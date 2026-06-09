import React, { createContext, useContext, useState, useMemo, useCallback, useRef, useEffect } from "react"
import { EditorView } from "@uiw/react-codemirror"

type StudioContextType = {
  version: "v1" | "v2"
  setVersion: (v: "v1" | "v2") => void
  isCodeOpen: boolean
  setIsCodeOpen: (open: boolean) => void
  loadPreset: (id: string, category: string) => Promise<void>
  editorViewRef: React.MutableRefObject<EditorView | null>
  insertCode: (text: string) => void
  selectedElement: string | null
  setSelectedElement: (selector: string | null) => void
  isSelectionMode: boolean
  setIsSelectionMode: (mode: boolean) => void
  targetProperty: string
  setTargetProperty: (prop: string) => void
  updateElementStyle: (selector: string, property: string, value: string) => void
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
  const [selectedElement, setSelectedElement] = useState<string | null>(null)
  const [isSelectionMode, setIsSelectionMode] = useState(false)
  const [targetProperty, setTargetProperty] = useState("background-color")
  const editorViewRef = useRef<EditorView | null>(null)

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === "element-selected") {
        setSelectedElement(event.data.selector)
      }
    }
    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [])

  const loadPreset = useCallback(async (id: string, category: string) => {
    try {
      const module = await import(`../../presets/${category}/${id}/preset.css?raw`);
      setCssCode(module.default);
    } catch (err) {
      console.error("Failed to load preset CSS:", err);
    }
  }, []);

const updateElementStyle = useCallback((selector: string, property: string, value: string) => {
  setCssCode(prev => {
    // Escape special characters for Regex, but keep the comma/space for 'html, body'
    // We only need to escape characters that interfere with Regex structure
    const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const selectorRegex = new RegExp(`${escapedSelector}\\s*{([^}]*)}`, 'g');
    
    let found = false;
    const updatedCss = prev.replace(selectorRegex, (match, body) => {
      found = true;
      const propRegex = new RegExp(`${property}:\\s*[^;!]+(!important)?`, 'g');
      const newProp = `${property}: ${value} !important`;
      if (propRegex.test(body)) {
        return match.replace(propRegex, newProp);
      }
      return match.replace('{', `{ ${newProp};`);
    });

    return found ? updatedCss : `${prev}\n${selector} { ${property}: ${value} !important; }`;
  });
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

  const studioValue = useMemo(() => ({ 
    version, setVersion, isCodeOpen, setIsCodeOpen, loadPreset, 
    editorViewRef, insertCode, selectedElement, setSelectedElement,
    isSelectionMode, setIsSelectionMode, targetProperty, setTargetProperty, updateElementStyle
  }), [version, isCodeOpen, loadPreset, insertCode, selectedElement, isSelectionMode, targetProperty, updateElementStyle])
  
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