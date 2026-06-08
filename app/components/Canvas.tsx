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
  const { version } = useStudio()
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
    </head>
    <body>
      <div id="base-layer">${htmlSource}</div>
      <script>
        ${rawGaiaScript}
        const userStyleTag = document.getElementById('user-overrides');
        window.addEventListener('message', (e) => {
          if (e.data.type === 'update-css' && userStyleTag) userStyleTag.textContent = e.data.css;
        });
      </script>
    </body>
  </html>
`, [htmlSource, baseCss])

  useEffect(() => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage({
        type: 'update-css',
        css: cssCode
      }, '*')
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
      <iframe
        ref={iframeRef}
        title="Gaia Preview"
        srcDoc={srcDoc}
        sandbox="allow-scripts allow-same-origin"
        className="block border-none shrink-0"
      />
    </div>
  )
})