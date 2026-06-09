import { useState, useRef, useMemo, useCallback, useEffect } from "react"
import { motion, AnimatePresence, useDragControls, type Transition } from "motion/react"
import { Library, GripVertical, Monitor, Copy, Check, ChevronRight } from "lucide-react"
import { EditorView } from "@uiw/react-codemirror"
import CodeMirror from "@uiw/react-codemirror"
import { css } from "@codemirror/lang-css"
import { useSearchParams } from "react-router"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LeftSidebar } from "@/routes/studio/LeftSidebar"
import { RightSidebar } from "@/routes/studio/RightSidebar"
import { Canvas } from "@/components/Canvas"
import { StudioProvider, useStudio, useCssCode } from "./studio/StudioContext"
import { FloatingControls } from "./studio/FloatingControls"
import { Snippet } from "./studio/snippet"
import { studioTheme, customSearchTheme } from "@/routes/studio/EditorStyles"
import { cn } from "@/lib/utils"
import debounce from "lodash/debounce"
import { useIsMobile } from "@/hooks/use-is-mobile"
import { useIsTablet } from "@/hooks/use-is-tablet"

const SPRING_CONFIG: Transition = { type: "spring", stiffness: 400, damping: 25 }

function StudioLayout() {
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
    setTimeout(() => setCopied(false), 2000)
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
        {!isMaximized && (
          <header className="h-14 shrink-0 border-b border-border flex items-center justify-between px-4 bg-background/50 backdrop-blur-sm">
            <h1 className="font-medium text-sm">Studio Workspace</h1>
          </header>
        )}
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
              initial={{ opacity: 0, scale: 0.9, y: 50 }} 
              animate={{ opacity: 1, scale: 1, y: 0, width: snippetsOpen ? 700 : 400 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }} 
              transition={SPRING_CONFIG}
              className="absolute bottom-24 left-1/2 -translate-x-1/2 h-96 bg-background border border-border rounded-3xl flex overflow-hidden z-50"
            >
              {/* Main Editor Wrapper */}
              <div className="flex flex-col h-full grow w-full min-w-[400px]">
                <div className="h-12 shrink-0 border-b border-border flex items-center justify-between px-2 cursor-grab active:cursor-grabbing" onPointerDown={(e) => dragControls.start(e)}>
                  <div className="flex items-center gap-2">
                    <GripVertical className="size-4 text-muted-foreground" />
                    <span className="text-xs font-bold">CSS Editor</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm" onClick={handleCopy} className="gap-2">
                      {copied ? (
                        <>
                          <Check className="size-3 text-emerald-500" />
                          <span className="text-xs text-emerald-500 font-medium">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="size-3" />
                          <span className="text-xs">Copy</span>
                        </>
                      )}
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => setSnippetsOpen(!snippetsOpen)}>
                      <Library className="size-3 mr-2" /> Snippets
                    </Button>
                  </div>
                </div>

                <div className="flex-1 w-full overflow-hidden flex flex-col">
                  <ScrollArea className="flex-1 w-full min-h-0">
                    <CodeMirror
                      value={cssCode} onChange={handleCodeChange}
                      extensions={[css(), studioTheme, customSearchTheme, EditorView.lineWrapping, EditorView.theme({ "&": { height: "100%" }, ".cm-scroller": { overflow: "visible !important" } })]}
                      onCreateEditor={(view) => { editorViewRef.current = view }}
                    />
                  </ScrollArea>
                  
                  {/* Fixed Footer */}
                  <div className="h-8 shrink-0 border-t border-border flex items-center justify-end px-2 gap-1 bg-background/50">
                    <Button size="icon" variant="ghost" className="size-6 rounded-full" onClick={() => scrollTo('start')} title="Jump to top">
                      <ChevronRight className="size-3 -rotate-90" />
                    </Button>
                    <Button size="icon" variant="ghost" className="size-6 rounded-full" onClick={() => scrollTo('end')} title="Jump to bottom">
                      <ChevronRight className="size-3 rotate-90" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Snippet Panel */}
              <motion.div initial={{ opacity: 0, width: 0 }} animate={{ opacity: snippetsOpen ? 1 : 0, width: snippetsOpen ? 300 : 0 }} transition={SPRING_CONFIG} className="shrink-0 border-l border-border h-full overflow-hidden">
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

export default function Studio() {
  const { isMobile, isLoading: isMobileLoading } = useIsMobile()
  const { isTablet, isLoading: isTabletLoading } = useIsTablet()

  if (isMobileLoading || isTabletLoading) return null

  if (isMobile || isTablet) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center p-4 text-center bg-background">
        <Monitor className="mb-4 size-12 text-muted-foreground" />
        <p className="text-muted-foreground">The Studio is currently optimized for desktop use only.</p>
      </div>
    )
  }

  return (
    <StudioProvider>
      <StudioLayout />
    </StudioProvider>
  )
}