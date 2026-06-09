import { useState, memo, useCallback } from "react"
import { PanelRightClose, FileText, Settings, MousePointer2, Palette } from "lucide-react"
import { Button } from "~/components/ui/button"
import { motion } from "motion/react"
import { Tooltip, TooltipContent, TooltipTrigger } from "~/components/ui/tooltip"
import { SidebarButton } from "@/components/SidebarButton"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { PopoverPicker } from "@/components/PopoverPicker"
import { useStudio } from "@/routes/studio/StudioContext"

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
  
  const { 
    selectedElement, 
    targetProperty, 
    setTargetProperty, 
    updateElementStyle 
  } = useStudio()
  
  const [color, setColor] = useState("#3b82f6")

  const handleApplyColor = useCallback((newColor: string) => {
    setColor(newColor)
    if (selectedElement) {
      updateElementStyle(selectedElement, targetProperty, newColor)
    }
  }, [selectedElement, targetProperty, updateElementStyle])

  const toggleSidebar = useCallback(() => setRightOpen((prev) => !prev), [])
  
  const handleItemClick = useCallback((id: RightMenuKey) => {
    if (activeRight === id) {
      setRightOpen((prev) => !prev)
    } else {
      setActiveRight(id)
      setRightOpen(true)
    }
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
              <div className="text-xs bg-muted p-2 rounded break-all font-mono">
                {selectedElement || "No element selected"}
              </div>
            </div>

            {selectedElement && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                    <Palette className="size-3" /> CSS Property
                  </h3>
                  <Select 
                    value={targetProperty} 
                    onValueChange={(val) => val && setTargetProperty(val)}
                  >
                    <SelectTrigger className="h-8 text-xs">
                      <SelectValue placeholder="Select property" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="background-color">Background Color</SelectItem>
                      <SelectItem value="color">Text Color</SelectItem>
                      <SelectItem value="border-color">Border Color</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                    <Palette className="size-3" /> Color
                  </h3>
                  <PopoverPicker color={color} onChange={handleApplyColor} />
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.aside>

      <aside className="shrink-0 w-12 flex flex-col items-center py-4 gap-4 border-l border-border z-20 bg-background/50 backdrop-blur-sm">
        <Tooltip>
          <TooltipTrigger>
            <Button variant="ghost" size="icon" className="size-8" onClick={toggleSidebar} aria-label="Toggle Sidebar">
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