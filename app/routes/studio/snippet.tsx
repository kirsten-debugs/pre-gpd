import { useState, useCallback, useEffect, memo } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Plus, ChevronRight, Check, MoreHorizontal, HelpCircle, Database } from "lucide-react"
import { toast } from "sonner"
import { Button } from "~/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { EditorView } from "@uiw/react-codemirror"
import { sanitizeCss } from "@/lib/postcss-utils"
import { useIndexedDB } from "@/hooks/use-indexed-db"
import { useSnippetStore, type Snippet as SnippetType } from "~/store/useSnippetStore"

interface SnippetProps {
  editorRef: React.MutableRefObject<EditorView | null>
  selectionRef: React.MutableRefObject<{ anchor: number; head: number } | null>
  code: string
  setCode: (code: string) => void
  snippetsOpen: boolean
  setSnippetsOpen: (open: boolean) => void
}

export const Snippet = memo(function Snippet({ editorRef, code, setCode, snippetsOpen, setSnippetsOpen }: SnippetProps) {
  const { snippets, isInitialized, setInitialized, setSnippets, upsertSnippet, deleteSnippet } = useSnippetStore()
  const { getAll, putItem, deleteItem } = useIndexedDB<SnippetType>('gstudio', 'snippets')

  const [addFormOpen, setAddFormOpen] = useState(false)
  const [showDefaults, setShowDefaults] = useState(true)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editName, setEditName] = useState("")
  const [editCode, setEditCode] = useState("")
  const [newSnippetName, setNewSnippetName] = useState("")
  const [newSnippetCode, setNewSnippetCode] = useState("")
  const [defaultSnippets, setDefaultSnippets] = useState<SnippetType[]>([])

  useEffect(() => {
    const loadDefaults = async () => {
      const files = import.meta.glob("./default-snippets/*.txt", { query: "?raw", import: "default" })
      const loaded: SnippetType[] = []
      for (const path in files) {
        const content = (await files[path]()) as string
        const name = path.split('/').pop()?.replace('.txt', '').replace(/-/g, ' ') || "Untitled"
        loaded.push({ id: Date.now() + Math.random(), name: name.charAt(0).toUpperCase() + name.slice(1), code: content })
      }
      setDefaultSnippets(loaded)
    }
    loadDefaults()
  }, [])

  useEffect(() => {
    const syncFromDB = async () => {
      if (isInitialized) return
      const stored = await getAll()
      setSnippets(stored)
      setInitialized(true)
    }
    syncFromDB()
  }, [getAll, setSnippets, isInitialized, setInitialized])

  const handleAdd = useCallback(async () => {
    if (!newSnippetName || !newSnippetCode) return
    const safeCode = await sanitizeCss(newSnippetCode, true)
    const newSnippet = { id: Date.now(), name: newSnippetName, code: safeCode }
    await putItem(newSnippet)
    upsertSnippet(newSnippet)
    setNewSnippetName(""); setNewSnippetCode(""); setAddFormOpen(false)
    toast.success("Snippet created")
  }, [newSnippetName, newSnippetCode, putItem, upsertSnippet])

  const handleUpdate = useCallback(async (id: number) => {
    const safeCode = await sanitizeCss(editCode, true)
    const updated = { id, name: editName, code: safeCode }
    await putItem(updated)
    upsertSnippet(updated)
    setEditingId(null)
    toast.success("Snippet updated")
  }, [editName, editCode, putItem, upsertSnippet])

  const handleDelete = useCallback(async (id: number) => {
    await deleteItem(id)
    deleteSnippet(id)
    toast.success("Snippet deleted")
  }, [deleteItem, deleteSnippet])

  const handleInsert = useCallback(async (action: 'append' | 'prepend' | 'replace' | 'cursor', snippet: SnippetType) => {
    const view = editorRef.current
    const safeSnippet = await sanitizeCss(snippet.code, true)
    if (action === 'cursor' && view) { view.dispatch(view.state.replaceSelection(safeSnippet)); view.focus() }
    else if (action === 'append') setCode(`${code}\n${safeSnippet}`)
    else if (action === 'prepend') setCode(`${safeSnippet}\n${code}`)
    else if (action === 'replace') setCode(safeSnippet)
    
    toast.success(`Inserted ${snippet.name}`)
  }, [editorRef, setCode, code])

  return (
    <AnimatePresence mode="wait">
      {snippetsOpen && (
        <motion.div 
          initial={{ width: 0, opacity: 0 }} 
          animate={{ width: 300, opacity: 1 }} 
          exit={{ width: 0, opacity: 0 }} 
          transition={{ type: "spring", bounce: 0, duration: 0.3 }} 
          className="flex flex-col h-full overflow-hidden border-r border-border"
        >
          <div className="h-12 px-4 border-b border-border flex items-center justify-between shrink-0">
            <Button variant="ghost" size="sm" className="h-8 gap-1 px-1" onClick={() => setSnippetsOpen(false)}>
              <ChevronRight className="size-3 rotate-180" /> 
              <span className="text-xs font-semibold">Snippets</span>
            </Button>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className={`size-6 ${showDefaults ? 'bg-secondary' : ''}`} onClick={() => setShowDefaults(!showDefaults)}>
                <Database className="size-3" />
              </Button>
              <Popover>
                <PopoverTrigger><Button variant="ghost" size="icon" className="size-6"><HelpCircle className="size-3" /></Button></PopoverTrigger>
                <PopoverContent className="w-72 p-4 text-xs" side="left"><h4 className="font-semibold">Snippets</h4><p className="text-foreground">Save CSS pieces to reuse.</p></PopoverContent>
              </Popover>
              <Button variant="ghost" size="icon" className="size-6" onClick={() => setAddFormOpen(!addFormOpen)}>
                <motion.div animate={{ rotate: addFormOpen ? 45 : 0 }}><Plus className="size-3" /></motion.div>
              </Button>
            </div>
          </div>

          <AnimatePresence initial={false}>
            {addFormOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }} 
                animate={{ height: "auto", opacity: 1 }} 
                exit={{ height: 0, opacity: 0 }} 
                className="overflow-hidden border-b border-border shrink-0"
              >
                <div className="p-3 bg-background/50 flex flex-col gap-2">
                  <Input placeholder="Name" value={newSnippetName} onChange={(e) => setNewSnippetName(e.target.value)} className="h-8 text-xs" />
                  <Textarea placeholder="CSS Code" value={newSnippetCode} onChange={(e) => setNewSnippetCode(e.target.value)} className="h-32 text-xs p-2" />
                  <Button size="sm" onClick={handleAdd} className="w-full h-8 text-xs">Add Snippet</Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full w-full">
              <div className="p-2 flex flex-col gap-2">
                <motion.div layout className="flex flex-col gap-2">
                  {showDefaults && defaultSnippets.map((s) => (
                    <motion.div key={s.id} layout="position" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="group p-2 rounded-lg hover:bg-secondary border border-transparent hover:border-border cursor-pointer" onClick={() => handleInsert('cursor', s)}>
                        <span className="text-xs font-semibold">{s.name}</span>
                      </div>
                    </motion.div>
                  ))}

                  {snippets.map((s) => (
                    <motion.div key={s.id} layout="position" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="group p-2 rounded-lg hover:bg-secondary border border-transparent hover:border-border">
                        {editingId === s.id ? (
                          <div className="flex flex-col gap-2 p-2">
                            <Input value={editName} onChange={(e) => setEditName(e.target.value)} className="h-8 text-xs" />
                            <Textarea value={editCode} onChange={(e) => setEditCode(e.target.value)} className="h-32 text-xs p-2" />
                            <Button size="sm" onClick={() => handleUpdate(s.id)} className="w-full h-8 text-xs"><Check className="size-3 mr-2" /> Save</Button>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between cursor-pointer" onClick={() => handleInsert('cursor', s)}>
                            <div className="flex flex-col truncate w-48"><span className="text-xs font-semibold">{s.name}</span><span className="text-[10px] text-muted-foreground font-mono truncate">{s.code.split('\n')[0]}</span></div>
                            <div onClick={(e) => e.stopPropagation()}>
                              <DropdownMenu>
                                <DropdownMenuTrigger><Button variant="ghost" size="icon" className="size-6"><MoreHorizontal className="size-4" /></Button></DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem onClick={() => handleInsert('replace', s)}>Replace</DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => handleInsert('prepend', s)}>Prepend</DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => handleInsert('append', s)}>Append</DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem onClick={() => { setEditingId(s.id); setEditName(s.name); setEditCode(s.code); }}>Edit</DropdownMenuItem>
                                  <DropdownMenuItem className="text-destructive" onClick={() => handleDelete(s.id)}>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </ScrollArea>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
})