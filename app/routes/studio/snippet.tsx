import { useState, useCallback, useEffect, memo } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Plus, ChevronRight, Check, MoreHorizontal, HelpCircle } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { EditorView } from "@uiw/react-codemirror"
import { sanitizeCss } from "@/lib/postcss-utils"

interface Snippet { id: number; name: string; code: string }
interface SnippetProps {
  editorRef: React.MutableRefObject<EditorView | null>
  selectionRef: React.MutableRefObject<{ anchor: number; head: number } | null>
  code: string
  setCode: (code: string) => void
  snippetsOpen: boolean
  setSnippetsOpen: (open: boolean) => void
}

export const Snippet = memo(function Snippet({ editorRef, code, setCode, snippetsOpen, setSnippetsOpen }: SnippetProps) {
  const [addFormOpen, setAddFormOpen] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editName, setEditName] = useState("")
  const [editCode, setEditCode] = useState("")
  const [newSnippetName, setNewSnippetName] = useState("")
  const [newSnippetCode, setNewSnippetCode] = useState("")
  const [snippets, setSnippets] = useState<Snippet[]>([])

  useEffect(() => {
    const loadSnippets = async () => {
      const files = import.meta.glob("./default-snippets/*.txt", { query: "?raw", import: "default" })
      const loadedSnippets: Snippet[] = []
      for (const path in files) {
        const codeContent = (await files[path]()) as string
        const fileName = path.split('/').pop()?.replace('.txt', '').replace(/-/g, ' ') || "Untitled"
        loadedSnippets.push({ id: Date.now() + Math.random(), name: fileName.charAt(0).toUpperCase() + fileName.slice(1), code: codeContent })
      }
      setSnippets(loadedSnippets)
    }
    loadSnippets()
  }, [])

  const addSnippet = useCallback(async () => {
    if (!newSnippetName || !newSnippetCode) return
    const safeCode = await sanitizeCss(newSnippetCode, true)
    setSnippets(prev => [...prev, { id: Date.now(), name: newSnippetName, code: safeCode }])
    setNewSnippetName(""); setNewSnippetCode(""); setAddFormOpen(false)
  }, [newSnippetName, newSnippetCode])

  const updateSnippet = useCallback(async (id: number) => {
    const safeCode = await sanitizeCss(editCode, true)
    setSnippets(prev => prev.map(s => s.id === id ? { ...s, name: editName, code: safeCode } : s))
    setEditingId(null)
  }, [editName, editCode])

  const deleteSnippet = useCallback((id: number) => {
    setSnippets(prev => prev.filter(s => s.id !== id))
  }, [])

  const handleInsert = useCallback(async (action: 'append' | 'prepend' | 'replace' | 'cursor', snippetCode: string) => {
    const view = editorRef.current
    const safeSnippet = await sanitizeCss(snippetCode, true)
    if (action === 'cursor' && view) { view.dispatch(view.state.replaceSelection(safeSnippet)); view.focus() }
    else if (action === 'append') setCode(`${code}\n${safeSnippet}`)
    else if (action === 'prepend') setCode(`${safeSnippet}\n${code}`)
    else if (action === 'replace') setCode(safeSnippet)
  }, [editorRef, setCode, code])

  return (
    <AnimatePresence mode="popLayout">
      {snippetsOpen && (
        <motion.div 
          initial={{ width: 0, opacity: 0 }} 
          animate={{ width: 300, opacity: 1 }} 
          exit={{ width: 0, opacity: 0 }} 
          transition={{ type: "spring", bounce: 0, duration: 0.3 }} 
          className="bg-muted/20 flex flex-col w-75 h-full overflow-hidden border-r border-border"
        >
          <div className="h-12 px-4 border-b border-border flex items-center justify-between shrink-0">
            <Button variant="ghost" size="sm" className="h-8 gap-1 px-1" onClick={() => setSnippetsOpen(false)}>
              <ChevronRight className="size-3 rotate-180" /> 
              <span className="text-xs font-semibold">Snippets</span>
            </Button>
            <div className="flex items-center gap-1">
              <Popover>
                <PopoverTrigger><Button variant="ghost" size="icon" className="size-6"><HelpCircle className="size-3" /></Button></PopoverTrigger>
                <PopoverContent className="w-72 p-4 text-xs" side="left"><h4 className="font-semibold">Snippets</h4><p className="text-foreground">Snippets are a way to save pieces of CSS code so you can reuse them later.</p></PopoverContent>
              </Popover>
              <Button variant="ghost" size="icon" className="size-6" onClick={() => setAddFormOpen(!addFormOpen)}>
                <motion.div initial={false} animate={{ rotate: addFormOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
                  <Plus className="size-3" />
                </motion.div>
              </Button>
            </div>
          </div>
          <ScrollArea className="flex-1 w-full">
            <div className="p-2 flex flex-col gap-2">
              <AnimatePresence mode="popLayout">
                {addFormOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: "auto", opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }} 
                    className="overflow-hidden border-b border-border"
                  >
                    <div className="p-3 bg-background/50 flex flex-col gap-2">
                      <div className="text-xs font-semibold text-muted-foreground">New Snippet</div>
                      <Input placeholder="Name" value={newSnippetName} onChange={(e) => setNewSnippetName(e.target.value)} className="h-8 text-xs" />
                      <Textarea placeholder="CSS Code" value={newSnippetCode} onChange={(e) => setNewSnippetCode(e.target.value)} className="h-32 w-full resize-none text-xs p-2" />
                      <Button size="sm" onClick={addSnippet} className="w-full h-8 text-xs">Add Snippet</Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {snippets.map((s) => (
                <motion.div 
                  key={s.id} 
                  layout 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <div className="group p-2 rounded-lg hover:bg-secondary border border-transparent hover:border-border transition-colors">
                    {editingId === s.id ? (
                      <div className="flex flex-col gap-2 p-2">
                        <Input value={editName} onChange={(e) => setEditName(e.target.value)} className="h-8 text-xs" />
                        <Textarea value={editCode} onChange={(e) => setEditCode(e.target.value)} className="h-32 w-full resize-none text-xs p-2" />
                        <Button size="sm" onClick={() => updateSnippet(s.id)} className="w-full h-8 text-xs"><Check className="size-3 mr-2" /> Save</Button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between cursor-pointer" onClick={() => handleInsert('cursor', s.code)}>
                        <div className="flex flex-col truncate w-48"><span className="text-xs font-semibold">{s.name}</span><span className="text-[10px] text-muted-foreground font-mono truncate">{s.code.split('\n')[0]}</span></div>
                        <div onClick={(e) => e.stopPropagation()}>
                          <DropdownMenu>
                            <DropdownMenuTrigger><Button variant="ghost" size="icon" className="size-6"><MoreHorizontal className="size-4" /></Button></DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-40">
                              <DropdownMenuItem onClick={() => handleInsert('replace', s.code)}>Replace</DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleInsert('prepend', s.code)}>Prepend</DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleInsert('append', s.code)}>Append</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem onClick={() => { setEditingId(s.id); setEditName(s.name); setEditCode(s.code); }}>Edit</DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive" onClick={() => deleteSnippet(s.id)}>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </motion.div>
      )}
    </AnimatePresence>
  )
})