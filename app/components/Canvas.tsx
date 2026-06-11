import { memo, useRef, useEffect, useMemo } from "react"
import rawGaiaScript from "@/js/gaiascript.js?raw"
import gaiaHtml from "@/presets/gaia.html?raw"
import gaiaCss from "@/presets/gaia.css?raw"
import gaiaV1Html from "@/presets/gaia.v1.html?raw"
import gaiaV1Css from "@/presets/gaia.v1.css?raw"
import { useStudio, useCssCode } from "@/routes/studio/StudioContext"
import { useProfileStore } from "@/store/useProfileStore"

const TARGET_WIDTH = 1920
const TARGET_HEIGHT = 1080
const DEFAULT_AVATAR = "https://a1cdn.gaiaonline.com/dress-up/avatar/ava/0e/6e/6255ead32c36e0e_flip.png"

interface CanvasProps {
  isMaximized: boolean
}

export const Canvas = memo(function Canvas({ isMaximized }: CanvasProps) {
  const { version, isSelectionMode, rootCss } = useStudio()
  const { cssCode } = useCssCode()
  const { avatarUrl } = useProfileStore()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Combined CSS logic
  const combinedCss = useMemo(() => `${rootCss}\n${cssCode}`, [rootCss, cssCode])

  const htmlSource = useMemo(() => (version === "v1" ? gaiaV1Html : gaiaHtml), [version])
  const baseCss = useMemo(() => (version === "v1" ? gaiaV1Css : gaiaCss), [version])

  const finalAvatarUrl = avatarUrl || DEFAULT_AVATAR

  const srcDoc = useMemo(() => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <style id="base-styles">${baseCss}</style>
      <style id="user-overrides"></style>
      <style id="avatar-styles"></style>
      <style>
        .highlight-hover { outline: 2px solid #94a3b8 !important; cursor: crosshair !important; }
        .highlight-selected { outline: 2px solid #3b82f6 !important; }
        #id_details img { opacity: 0; transition: opacity 0.15s ease-in; }
        .avatar-ready { opacity: 1 !important; }
      </style>
    </head>
    <body>
      <div id="base-layer">${htmlSource}</div>
      <script>
        ${rawGaiaScript}
        const userStyleTag = document.getElementById('user-overrides');
        const avatarStyleTag = document.getElementById('avatar-styles');
        let lastSelected = null;
        let lastHovered = null;

        window.addEventListener('message', (e) => {
          if (e.data.type === 'update-css' && userStyleTag) {
            userStyleTag.textContent = e.data.css;
          }
          if (e.data.type === 'update-avatar') {
            const detailsPanel = document.getElementById('id_details');
            if (detailsPanel && e.data.avatarUrl) {
              const avatarImg = detailsPanel.querySelector('img');
              if (avatarImg) {
                const loader = new Image();
                loader.onload = () => {
                  avatarImg.src = e.data.avatarUrl;
                  avatarImg.classList.add('avatar-ready');
                };
                loader.src = e.data.avatarUrl;
              }
            }
            if (avatarStyleTag && e.data.avatarUrl) {
              avatarStyleTag.textContent = ':root { --user-avatar-url: url("' + e.data.avatarUrl + '"); } [data-avatar] { content: var(--user-avatar-url) !important; }';
            }
          }
        });

        window.parent.postMessage({ type: 'iframe-ready' }, '*');

        document.addEventListener('mouseover', (e) => {
          if (!window.parent.isSelectionModeActive) return;
          if (lastHovered) lastHovered.classList.remove('highlight-hover');
          lastHovered = e.target;
          lastHovered.classList.add('highlight-hover');
        });

        document.addEventListener('mouseout', (e) => {
          if (lastHovered) lastHovered.classList.remove('highlight-hover');
        });

        document.addEventListener('click', (e) => {
          if (!window.parent.isSelectionModeActive) return;
          e.preventDefault();
          e.stopPropagation();
          const target = e.target;
          if (lastSelected) lastSelected.classList.remove('highlight-selected');
          target.classList.add('highlight-selected');
          lastSelected = target;

          const path = [];
          let el = target;
          while (el && el !== document.body && el.id !== 'base-layer') {
            let selector = '';
            if (el.id) {
              selector = '#' + el.id;
            } else if (el.className && typeof el.className === 'string') {
              const classes = el.className.split(' ').filter(c => !c.includes('highlight'));
              if (classes.length > 0) selector = '.' + classes.join('.');
            }
            if (selector) path.unshift(selector);
            el = el.parentElement;
          }
          
          let selectorString = path.length > 0 ? path.join(' ') : 'body';
          if (selectorString === 'body') selectorString = 'html, body';
          
          window.parent.postMessage({ type: 'element-selected', selector: selectorString }, '*');
        });
      </script>
    </body>
  </html>
`, [htmlSource, baseCss])

  useEffect(() => {
    (window as any).isSelectionModeActive = isSelectionMode
  }, [isSelectionMode])

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data.type === 'iframe-ready' && iframeRef.current?.contentWindow) {
        iframeRef.current.contentWindow.postMessage({ type: 'update-css', css: combinedCss }, '*')
        iframeRef.current.contentWindow.postMessage({ type: 'update-avatar', avatarUrl: finalAvatarUrl }, '*')
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [combinedCss, finalAvatarUrl])

  useEffect(() => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage({ type: 'update-css', css: combinedCss }, '*')
      iframeRef.current.contentWindow.postMessage({ type: 'update-avatar', avatarUrl: finalAvatarUrl }, '*')
    }
  }, [combinedCss, finalAvatarUrl, version])

  useEffect(() => {
    const updateScale = () => {
      const wrapper = wrapperRef.current
      const iframe = iframeRef.current
      if (!wrapper || !iframe) return
      if (isMaximized) {
        iframe.style.width = "100%"
        iframe.style.height = "100%"
        iframe.style.transform = "none"
        return
      }
      const scale = Math.min(1, wrapper.clientWidth / TARGET_WIDTH, wrapper.clientHeight / TARGET_HEIGHT)
      iframe.style.width = `${TARGET_WIDTH}px`
      iframe.style.height = `${TARGET_HEIGHT}px`
      iframe.style.transform = `scale(${scale})`
      iframe.style.transformOrigin = "center center"
    }
    const observer = new ResizeObserver(updateScale)
    if (wrapperRef.current) observer.observe(wrapperRef.current)
    return () => observer.disconnect()
  }, [isMaximized])

  return (
    <div ref={wrapperRef} className="w-full h-full flex items-center justify-center overflow-hidden bg-transparent">
      <iframe ref={iframeRef} title="Gaia Preview" srcDoc={srcDoc} sandbox="allow-scripts allow-same-origin" className="block border-none shrink-0" />
    </div>
  )
})