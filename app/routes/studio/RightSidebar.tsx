import { useState, memo, useCallback, useRef } from "react"
import { PanelRightClose, FileText, Settings, MousePointer2, Box, LayoutGrid, Type, Eye, Layers3, Palette } from "lucide-react"
import { Button } from "~/components/ui/button"
import { motion } from "motion/react"
import { Tooltip, TooltipContent, TooltipTrigger } from "~/components/ui/tooltip"
import { SidebarButton } from "@/components/SidebarButton"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { Input } from "~/components/ui/input"
import { PopoverPicker } from "@/components/PopoverPicker"
import { useStudio } from "~/routes/studio/StudioContext"
import { useDrag } from "@use-gesture/react"

function useScrubbable(
  initialValue: number,
  onChange: (val: number) => void,
  multiplier: number = 0.5
) {
  const startVal = useRef(0)
  
  const bind = useDrag(({ active, movement: [mx], first }) => {
    if (first) startVal.current = initialValue
    if (active) {
      const newVal = Math.round(startVal.current + mx * multiplier)
      onChange(newVal)
    }
  }, { filterTaps: true })

  return bind
}

export const RIGHT_MENU_KEYS = {
  FILE: "file",
  SETTINGS: "settings",
} as const

export type RightMenuKey = (typeof RIGHT_MENU_KEYS)[keyof typeof RIGHT_MENU_KEYS]

const MENU_ITEMS = [
  { id: RIGHT_MENU_KEYS.FILE, icon: FileText, label: "Files" },
  { id: RIGHT_MENU_KEYS.SETTINGS, icon: Settings, label: "Settings" },
]

export const RightSidebar = memo(function RightSidebar() {
  const [rightOpen, setRightOpen] = useState(true)
  const [activeRight, setActiveRight] = useState<RightMenuKey>(RIGHT_MENU_KEYS.FILE)
  
  const { selectedElement, updateElementStyle } = useStudio()
  
  const [borderRadius, setBorderRadius] = useState(0)
  const [opacity, setOpacity] = useState(100)
  const [zIndex, setZIndex] = useState(1)

  const handleStyleChange = (prop: string, val: number | string) => {
    if (selectedElement) updateElementStyle(selectedElement, prop, String(val))
  }

  const bindRadius = useScrubbable(borderRadius, (v) => {
    const val = Math.max(0, Math.min(100, v))
    setBorderRadius(val)
    handleStyleChange("border-radius", `${val}%`)
  }, 0.5)

  const bindOpacity = useScrubbable(opacity, (v) => {
    const val = Math.max(0, Math.min(100, v))
    setOpacity(val)
    handleStyleChange("opacity", val / 100)
  }, 0.2)

  const bindZIndex = useScrubbable(zIndex, (v) => {
    const val = Math.max(0, v)
    setZIndex(val)
    handleStyleChange("z-index", val)
  }, 0.1)

  const toggleSidebar = useCallback(() => setRightOpen((prev) => !prev), [])
  const handleItemClick = useCallback((id: RightMenuKey) => {
    if (activeRight === id) setRightOpen((prev) => !prev)
    else { setActiveRight(id); setRightOpen(true) }
  }, [activeRight])

  return (
    <>
      <motion.aside
        initial={false}
        animate={{ width: rightOpen ? 256 : 0 }}
        className="shrink-0 border-l border-border overflow-hidden z-20 bg-background/50 backdrop-blur-sm"
      >
        <div className="w-64 flex flex-col h-screen">
          <div className="h-14 shrink-0 flex items-center px-4 border-b border-border">
            <h2 className="font-semibold text-sm capitalize">{activeRight} Menu</h2>
          </div>
          
          <div className="p-4 flex flex-col gap-6">
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                <MousePointer2 className="size-3" /> Selected Element
              </h3>
              <div className="text-xs bg-muted p-2 rounded-md break-all font-mono">
                {selectedElement || "No element selected"}
              </div>
            </div>

            {selectedElement && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xs font-semibold text-muted-foreground flex items-center gap-2">
                    <LayoutGrid className="size-3" /> Common Properties
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] text-muted-foreground flex items-center gap-1"><Type className="size-3" /> Font</label>
                      <Select onValueChange={(v) => handleStyleChange("font-family", v)}>
                        <SelectTrigger className="h-8 text-xs"><SelectValue placeholder="Family" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sans-serif">Sans Serif</SelectItem>
                          <SelectItem value="serif">Serif</SelectItem>
                          <SelectItem value="monospace">Mono</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] text-muted-foreground flex items-center gap-1"><Palette className="size-3" /> Color</label>
                      <PopoverPicker color="#000000" onChange={(c) => handleStyleChange("color", c)} />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] text-muted-foreground flex items-center gap-1"><Eye className="size-3" /> Opacity</label>
                      <div className="relative flex items-center">
                        <div {...bindOpacity()} className="absolute left-2 z-10 text-[10px] text-muted-foreground font-bold uppercase cursor-ew-resize hover:text-foreground select-none touch-none">o</div>
                        <Input type="number" value={opacity} onChange={(e) => { const v = Math.min(100, Math.max(0, Number(e.target.value))); setOpacity(v); handleStyleChange("opacity", v / 100) }} className="h-8 pl-6 text-xs [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] text-muted-foreground flex items-center gap-1"><Layers3 className="size-3" /> Z-Index</label>
                      <div className="relative flex items-center">
                        <div {...bindZIndex()} className="absolute left-2 z-10 text-[10px] text-muted-foreground font-bold uppercase cursor-ew-resize hover:text-foreground select-none touch-none">z</div>
                        <Input type="number" value={zIndex} onChange={(e) => { const v = Math.max(0, Number(e.target.value)); setZIndex(v); handleStyleChange("z-index", v) }} className="h-8 pl-6 text-xs [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-border">
                  <h3 className="text-xs font-semibold text-muted-foreground mb-3 flex items-center gap-2">
                    <Box className="size-3" /> Border Radius
                  </h3>
                  <div className="relative flex items-center">
                    <div {...bindRadius()} className="absolute left-2 z-10 text-[10px] text-muted-foreground font-bold uppercase cursor-ew-resize hover:text-foreground select-none touch-none">
                      r
                    </div>
                    <Input 
                      type="number" 
                      value={borderRadius} 
                      onChange={(e) => {
                        const val = Math.min(100, Math.max(0, Number(e.target.value)))
                        setBorderRadius(val)
                        handleStyleChange("border-radius", `${val}%`)
                      }}
                      className="h-8 pl-6 text-xs rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <span className="absolute right-3 text-xs text-muted-foreground pointer-events-none">%</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.aside>

      <aside className="shrink-0 w-12 flex flex-col items-center py-4 gap-4 border-l border-border z-20 bg-background/50 backdrop-blur-sm">
        <Tooltip>
          <TooltipTrigger>
            <Button variant="ghost" size="icon" className="size-8 rounded-md" onClick={toggleSidebar} aria-label="Toggle Sidebar">
              <PanelRightClose className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">Toggle Sidebar</TooltipContent>
        </Tooltip>
        
        <div className="flex-1 flex flex-col gap-3 pt-4">
          {MENU_ITEMS.map((item) => (
            <SidebarButton
              key={item.id}
              icon={item.icon}
              label={item.label}
              active={activeRight === item.id && rightOpen}
              onClick={() => handleItemClick(item.id)}
            />
          ))}
        </div>
      </aside>
    </>
  )
})