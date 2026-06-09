import { memo, useRef, useEffect, useMemo } from "react"
import rawGaiaScript from "@/js/gaiascript.js?raw"
import gaiaHtml from "@/presets/gaia.html?raw"
import gaiaCss from "@/presets/gaia.css?raw"
import gaiaV1Html from "@/presets/gaia.v1.html?raw"
import gaiaV1Css from "@/presets/gaia.v1.css?raw"
import { useStudio, useCssCode } from "@/routes/studio/StudioContext"

const TARGET_WIDTH = 1920
const TARGET_HEIGHT = 1080

interface CanvasProps {
  isMaximized: boolean
}

export const Canvas = memo(function Canvas({ isMaximized }: CanvasProps) {
  const { version, isSelectionMode } = useStudio()
  const { cssCode } = useCssCode()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const htmlSource = useMemo(() => (version === "v1" ? gaiaV1Html : gaiaHtml), [version])
  const baseCss = useMemo(() => (version === "v1" ? gaiaV1Css : gaiaCss), [version])

  const srcDoc = useMemo(() => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <style id="base-styles">${baseCss}</style>
      <style id="user-overrides"></style>
      <style>
        .highlight-hover { outline: 2px solid #94a3b8 !important; cursor: crosshair !important; }
        .highlight-selected { outline: 2px solid #3b82f6 !important; }
      </style>
    </head>
    <body>
      <div id="base-layer">${htmlSource}</div>
      <script>
        ${rawGaiaScript}
        const userStyleTag = document.getElementById('user-overrides');
        let lastSelected = null;
        let lastHovered = null;

        window.addEventListener('message', (e) => {
          if (e.data.type === 'update-css' && userStyleTag) userStyleTag.textContent = e.data.css;
        });

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
          window.parent.postMessage({ type: 'element-selected', selector: path.length > 0 ? path.join(' > ') : 'body' }, '*');
        });
      </script>
    </body>
  </html>
`, [htmlSource, baseCss])

  useEffect(() => {
    (window as any).isSelectionModeActive = isSelectionMode
  }, [isSelectionMode])

  useEffect(() => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage({ type: 'update-css', css: cssCode }, '*')
    }
  }, [cssCode])

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