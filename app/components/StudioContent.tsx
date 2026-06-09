import { useState, useRef, useMemo, useCallback, useEffect } from "react"
import { motion, AnimatePresence, useDragControls, type Transition } from "motion/react"
import { Library, GripVertical, Copy, Check, ChevronRight } from "lucide-react"
import { EditorView } from "@uiw/react-codemirror"
import CodeMirror from "@uiw/react-codemirror"
import { css } from "@codemirror/lang-css"
import { useSearchParams } from "react-router"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LeftSidebar } from "@/routes/studio/LeftSidebar"
import { RightSidebar } from "@/routes/studio/RightSidebar"
import { Canvas } from "@/components/Canvas"
import { StudioNavbar } from "@/routes/studio/StudioNavbar"
import { useStudio, useCssCode } from "@/routes/studio/StudioContext"
import { FloatingControls } from "@/routes/studio/FloatingControls"
import { Snippet } from "@/routes/studio/snippet"
import { studioTheme, customSearchTheme } from "@/routes/studio/EditorStyles"
import { cn } from "@/lib/utils"
import debounce from "lodash/debounce"
import { customColorPlugin } from "@/routes/studio/color-plugin"

const SPRING_CONFIG: Transition = { type: "spring", stiffness: 400, damping: 25 }
const CONTAINER_PY = 0
const CONTAINER_PX = 4
const EDITOR_WIDTH = 400
const SNIPPETS_WIDTH = 300

const EDITOR_EXTENSIONS = [
  css(),
  studioTheme,
  customSearchTheme,
  customColorPlugin,
  EditorView.lineWrapping,
  EditorView.theme({ "&": { height: "100%" }, ".cm-scroller": { overflow: "visible !important" } })
]

export function StudioContent() {
  const [searchParams] = useSearchParams()
  const [isMaximized, setIsMaximized] = useState(false)
  const [snippetsOpen, setSnippetsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const { isCodeOpen, setIsCodeOpen, loadPreset, editorViewRef } = useStudio()
  const { cssCode, setCssCode } = useCssCode()

  const selectionRef = useRef<{ anchor: number; head: number } | null>(null)
  const dragControls = useDragControls()

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(cssCode)
    setCopied(true)
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [cssCode])

  useEffect(() => {
    const id = searchParams.get("id")
    const category = searchParams.get("category")
    if (id && category) loadPreset(id, category).then(() => setIsCodeOpen(true))
  }, [searchParams, loadPreset, setIsCodeOpen])

  const debouncedCanvasUpdate = useMemo(() => debounce((code: string) => console.log("Canvas updated:", code), 300), [])

  const handleCodeChange = useCallback((val: string, viewUpdate: any) => {
    setCssCode(val)
    debouncedCanvasUpdate(val)
    selectionRef.current = viewUpdate.state.selection.main
  }, [setCssCode, debouncedCanvasUpdate])

  const scrollTo = (position: 'start' | 'end') => {
    const view = editorViewRef.current
    if (!view) return
    view.dispatch({
      selection: { anchor: position === 'start' ? 0 : view.state.doc.length },
      scrollIntoView: true
    })
    view.focus()
  }

  return (
    <div className="fixed inset-0 flex w-screen h-screen bg-background overflow-hidden">
      {!isMaximized && <LeftSidebar />}
      <main className="flex-1 flex flex-col min-w-0 bg-transparent relative z-10">
        {!isMaximized && <StudioNavbar />}
        <div className={cn("flex-1 w-full h-full relative overflow-hidden flex items-center justify-center", !isMaximized && "p-8")}>
          {!isMaximized && (
            <div
              className="absolute inset-0 z-0 opacity-10 mask-[linear-gradient(to_bottom,white,transparent)]"
              style={{
                backgroundImage: `linear-gradient(#9C92AC 1px, transparent 1px), linear-gradient(90deg, #9C92AC 1px, transparent 1px)`,
                backgroundSize: "20px 20px"
              }}
            ></div>
          )}
          <FloatingControls isMaximized={isMaximized} setIsMaximized={setIsMaximized} />
          <Canvas isMaximized={isMaximized} />
        </div>
        <AnimatePresence>
          {isCodeOpen && (
            <motion.div
              drag dragListener={false} dragControls={dragControls} dragMomentum={false}
              initial={{ opacity: 0, scale: 0.9, y: 0 }}
              animate={{
                opacity: 1, scale: 1, y: 0,
                width: snippetsOpen ? (EDITOR_WIDTH + SNIPPETS_WIDTH + (CONTAINER_PX * 4)) : (EDITOR_WIDTH + (CONTAINER_PX * 4))
              }}
              exit={{ opacity: 0, scale: 0.9, y: 0 }}
              transition={SPRING_CONFIG}
              className={`absolute bottom-15 left-1/2 -translate-x-1/2 h-96 bg-background border border-border rounded-3xl flex overflow-hidden z-50 p-${CONTAINER_PY} px-${CONTAINER_PX}`}
            >
              <div className="flex flex-col h-full grow w-full min-w-100">
                <div className="h-12 shrink-0 border-b border-border flex items-center justify-between px-2 cursor-grab active:cursor-grabbing" onPointerDown={(e) => dragControls.start(e)}>
                  <div className="flex items-center gap-2">
                    <GripVertical className="size-4 text-muted-foreground" />
                    <span className="text-xs font-bold">CSS Editor</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm" onClick={handleCopy} className="gap-2">
                      {copied ? <><Check className="size-3 text-emerald-500" /> <span className="text-xs text-emerald-500 font-medium">Copied!</span></> : <><Copy className="size-3" /> <span className="text-xs">Copy</span></>}
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => setSnippetsOpen(!snippetsOpen)}>
                      <Library className="size-3 mr-2" /> Snippets
                    </Button>
                  </div>
                </div>
                <div className="flex-1 w-full overflow-hidden flex flex-col">
                  <ScrollArea className="flex-1 w-full min-h-0">
                    <CodeMirror value={cssCode} onChange={handleCodeChange} extensions={EDITOR_EXTENSIONS} onCreateEditor={(view) => { editorViewRef.current = view }} />
                  </ScrollArea>
                  <div className="h-8 shrink-0 border-t border-border flex items-center justify-end px-2 gap-1 bg-background/50">
                    <Button size="icon" variant="ghost" className="size-6 rounded-full" onClick={() => scrollTo('start')} title="Jump to top"><ChevronRight className="size-3 -rotate-90" /></Button>
                    <Button size="icon" variant="ghost" className="size-6 rounded-full" onClick={() => scrollTo('end')} title="Jump to bottom"><ChevronRight className="size-3 rotate-90" /></Button>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: snippetsOpen ? 1 : 0, width: snippetsOpen ? SNIPPETS_WIDTH : 0 }}
                transition={SPRING_CONFIG}
                className="shrink-0 border-l border-border h-full overflow-hidden"
              >
                {snippetsOpen && <Snippet editorRef={editorViewRef} selectionRef={selectionRef} code={cssCode} setCode={setCssCode} snippetsOpen={snippetsOpen} setSnippetsOpen={setSnippetsOpen} />}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      {!isMaximized && <RightSidebar />}
    </div>
  )
}