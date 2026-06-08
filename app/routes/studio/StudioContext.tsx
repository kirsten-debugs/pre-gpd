import React, { createContext, useContext, useState, useMemo, useCallback, useRef } from "react"
import { EditorView } from "@uiw/react-codemirror"

type StudioContextType = {
  version: "v1" | "v2"
  setVersion: (v: "v1" | "v2") => void
  isCodeOpen: boolean
  setIsCodeOpen: (open: boolean) => void
  loadPreset: (id: string, category: string) => Promise<void>
  editorViewRef: React.MutableRefObject<EditorView | null>
  insertCode: (text: string) => void
}

type CssCodeContextType = {
  cssCode: string
  setCssCode: (css: string) => void
}

const StudioContext = createContext<StudioContextType | undefined>(undefined)
const CssCodeContext = createContext<CssCodeContextType | undefined>(undefined)

export function StudioProvider({ children }: { children: React.ReactNode }) {
  const [version, setVersion] = useState<"v1" | "v2">("v2")
  const [cssCode, setCssCode] = useState("")
  const [isCodeOpen, setIsCodeOpen] = useState(false)
  const abortControllerRef = useRef<AbortController | null>(null)
  const editorViewRef = useRef<EditorView | null>(null)

const loadPreset = useCallback(async (id: string, category: string) => {
  try {
    // Vite's dynamic import with the correct path
    // We use a template string to dynamically point to the new location in app/presets
    const module = await import(`../../presets/${category}/${id}/preset.css?raw`);
    setCssCode(module.default);
  } catch (err) {
    console.error("Failed to load preset CSS:", err);
  }
}, []);

const insertCode = useCallback((text: string) => {
  setIsCodeOpen(true)
  
  setTimeout(() => {
    if (editorViewRef.current) {
      const view = editorViewRef.current
      const doc = view.state.doc
      const lastLine = doc.line(doc.lines)
      
      const needsNewline = lastLine.text.trim().length > 0
      const codeToInsert = `${needsNewline ? "\n" : ""}${text} {}\n`
      
      view.dispatch({
        changes: { from: doc.length, insert: codeToInsert },
        selection: { anchor: doc.length + codeToInsert.length }
      })
      view.focus()
    }
  }, 150)
}, [setIsCodeOpen])

  const studioValue = useMemo(() => ({ version, setVersion, isCodeOpen, setIsCodeOpen, loadPreset, editorViewRef, insertCode }), [version, isCodeOpen, loadPreset, insertCode])
  const cssValue = useMemo(() => ({ cssCode, setCssCode }), [cssCode])

  return (
    <StudioContext.Provider value={studioValue}>
      <CssCodeContext.Provider value={cssValue}>
        {children}
      </CssCodeContext.Provider>
    </StudioContext.Provider>
  )
}

export const useStudio = () => {
  const context = useContext(StudioContext)
  if (!context) throw new Error("useStudio must be used within a StudioProvider")
  return context
}

export const useCssCode = () => {
  const context = useContext(CssCodeContext)
  if (!context) throw new Error("useCssCode must be used within a StudioProvider")
  return context
}