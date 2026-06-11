import { useState, useRef, useMemo, useCallback, useEffect } from "react"
import { motion, useDragControls } from "motion/react"
import { Library, GripVertical, Copy, Check, ChevronRight, Hash } from "lucide-react"
import CodeMirror, { EditorView } from "@uiw/react-codemirror"
import { css } from "@codemirror/lang-css"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useStudio, useCssCode } from "@/routes/studio/StudioContext"
import { Snippet } from "@/routes/studio/snippet"
import { studioTheme, customSearchTheme } from "@/routes/studio/EditorStyles"
import { customColorPlugin } from "@/routes/studio/color-plugin"
import debounce from "lodash/debounce"
import { autocompletion } from "@codemirror/autocomplete"
import { tooltips } from "@codemirror/view"

const SPRING_CONFIG = { type: "spring" as const, stiffness: 400, damping: 25 }
const CONTAINER_PY = 0
const CONTAINER_PX = 4
const EDITOR_WIDTH = 450
const SNIPPETS_WIDTH = 300
const ROOT_PANEL_WIDTH = 350

export function CodePanel() {
  const [snippetsOpen, setSnippetsOpen] = useState(false)
  const [rootOpen, setRootOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  
  const { isCodeOpen, editorViewRef, rootCss, setRootCss } = useStudio()
  const { cssCode, setCssCode } = useCssCode()
  
  const selectionRef = useRef<{ anchor: number; head: number } | null>(null)
  const dragControls = useDragControls()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const EDITOR_EXTENSIONS = useMemo(() => {
    if (!isMounted) return [css()]
    return [
      css(),
      tooltips({ parent: document.body }),
      autocompletion({ activateOnTyping: true }),
      studioTheme,
      customSearchTheme,
      customColorPlugin,
      EditorView.lineWrapping,
      EditorView.theme({ 
        "&": { height: "100%" }, 
        ".cm-scroller": { overflow: "visible !important" } 
      })
    ]
  }, [isMounted])

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(cssCode)
    setCopied(true)
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [cssCode])

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

  if (!isCodeOpen || !isMounted) return null

  return (
    <motion.div
      drag
      dragListener={false}
      dragControls={dragControls}
      dragMomentum={false}
      initial={{ opacity: 0, scale: 0.9, y: 0 }}
      animate={{
        opacity: 1, scale: 1, y: 0,
        width: (rootOpen ? ROOT_PANEL_WIDTH : 0) + EDITOR_WIDTH + (snippetsOpen ? SNIPPETS_WIDTH : 0) + (CONTAINER_PX * 4)
      }}
      exit={{ opacity: 0, scale: 0.9, y: 0 }}
      transition={SPRING_CONFIG}
      className={`absolute bottom-16 left-1/2 -translate-x-1/2 h-96 bg-background border border-border rounded-3xl flex overflow-visible z-50 p-${CONTAINER_PY} px-${CONTAINER_PX}`}
    >
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: rootOpen ? 1 : 0, width: rootOpen ? ROOT_PANEL_WIDTH : 0 }}
        transition={SPRING_CONFIG}
        className="shrink-0 border-r border-border h-full overflow-hidden flex flex-col"
      >
        <div className="h-12 shrink-0 border-b border-border flex items-center px-3 text-xs font-bold uppercase tracking-wider">Variables</div>
        <div className="flex-1 w-full overflow-hidden">
          <CodeMirror 
            value={rootCss} 
            onChange={setRootCss} 
            extensions={EDITOR_EXTENSIONS} 
          />
        </div>
      </motion.div>

      <div className="flex flex-col h-full grow w-full min-w-96">
        <div className="h-12 shrink-0 border-b border-border flex items-center justify-between px-2 cursor-grab active:cursor-grabbing" onPointerDown={(e) => dragControls.start(e)}>
          <div className="flex items-center gap-2">
            <GripVertical className="size-4 text-muted-foreground" />
            <Button variant="ghost" size="sm" onClick={() => setRootOpen(!rootOpen)} className="gap-2 h-7 text-xs">
               <Hash className="size-3" /> :root
            </Button>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" onClick={handleCopy} className="gap-2 h-7 text-xs">
              {copied ? <><Check className="size-3 text-emerald-500" /> <span>Copied!</span></> : <><Copy className="size-3" /> <span>Copy</span></>}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setSnippetsOpen(!snippetsOpen)} className="h-7 text-xs">
              <Library className="size-3 mr-2" /> Snippets
            </Button>
          </div>
        </div>
        <div className="flex-1 w-full overflow-hidden flex flex-col">
          <ScrollArea 
            className="flex-1 w-full min-h-0"
            style={{ overflow: 'visible' }} 
          >
            <CodeMirror 
              value={cssCode} 
              onChange={handleCodeChange} 
              extensions={EDITOR_EXTENSIONS} 
              onCreateEditor={(view) => { editorViewRef.current = view }} 
            />
          </ScrollArea>
          <div className="h-8 shrink-0 border-t border-border flex items-center justify-end px-2 gap-1 bg-background/50">
            <Button size="icon" variant="ghost" className="size-6 rounded-full" onClick={() => scrollTo('start')}><ChevronRight className="size-3 -rotate-90" /></Button>
            <Button size="icon" variant="ghost" className="size-6 rounded-full" onClick={() => scrollTo('end')}><ChevronRight className="size-3 rotate-90" /></Button>
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
  )
}