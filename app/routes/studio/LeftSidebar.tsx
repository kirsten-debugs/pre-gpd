import { useState, memo, useCallback, useMemo } from "react"
import { PanelLeftClose, Home, LayoutGrid, Search } from "lucide-react"
import { Button } from "~/components/ui/button"
import { motion } from "motion/react"
import { Tooltip, TooltipContent, TooltipTrigger } from "~/components/ui/tooltip"
import { SidebarButton } from "@/components/SidebarButton"
import { Input } from "~/components/ui/input"
import { ScrollArea } from "~/components/ui/scroll-area"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuGroup,
} from "~/components/ui/context-menu"
import { useStudio } from "@/routes/studio/StudioContext"
import selectorsData from "@/data/gaia-selectors.json"

export const LEFT_MENU_KEYS = {
  HOME: "home",
  SELECTORS: "selectors",
} as const

export type LeftMenuKey = (typeof LEFT_MENU_KEYS)[keyof typeof LEFT_MENU_KEYS]

const MENU_ITEMS = [
  { id: LEFT_MENU_KEYS.HOME, icon: Home, label: "Home" },
  { id: LEFT_MENU_KEYS.SELECTORS, icon: LayoutGrid, label: "Selectors" },
]

const SelectorItem = memo(({ selector, index }: { selector: string; index: number }) => {
  const { insertCode } = useStudio()

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <button 
          onClick={() => insertCode(selector)}
          className="w-full text-left flex gap-3 text-[11px] font-mono py-1.5 border-b border-border/20 hover:bg-secondary/50 focus:bg-secondary rounded items-start outline-none pr-3"
        >
          <span className="text-muted-foreground/50 shrink-0 w-6 text-right font-sans">{index + 1}</span>
          <span className="text-foreground wrap-break-words whitespace-normal">{selector}</span>
        </button>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuGroup>
          <ContextMenuLabel className="wrap-break-words whitespace-normal text-xs font-mono bg-muted/50 p-2 rounded-sm mb-1">
            {selector}
          </ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuItem onClick={() => insertCode(selector)}>Insert Selector</ContextMenuItem>
          <ContextMenuItem onClick={() => insertCode(`${selector}::before`)}>Insert with ::before</ContextMenuItem>
          <ContextMenuItem onClick={() => insertCode(`${selector}::after`)}>Insert with ::after</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
})
SelectorItem.displayName = "SelectorItem"

export const LeftSidebar = memo(function LeftSidebar() {
  const [leftOpen, setLeftOpen] = useState(false)
  const [activeLeft, setActiveLeft] = useState<LeftMenuKey>(LEFT_MENU_KEYS.HOME)
  const [searchQuery, setSearchQuery] = useState("")

  const selectors = useMemo(() => selectorsData as string[], [])
  const filteredSelectors = useMemo(() => {
    const q = searchQuery.toLowerCase()
    return selectors.filter((s) => s.toLowerCase().includes(q))
  }, [selectors, searchQuery])

  const toggleSidebar = useCallback(() => setLeftOpen((prev) => !prev), [])
  
  const handleItemClick = useCallback((id: LeftMenuKey) => {
    if (activeLeft === id) {
      setLeftOpen((prev) => !prev)
    } else {
      setActiveLeft(id)
      setLeftOpen(true)
    }
  }, [activeLeft])

  return (
    <>
      <aside className="shrink-0 w-12 flex flex-col items-center py-4 gap-4 border-r border-border z-20 bg-background/50 backdrop-blur-sm">
        <Tooltip>
          <TooltipTrigger>
            <Button
              variant="ghost"
              size="icon"
              className="size-8"
              onClick={toggleSidebar}
              aria-label="Toggle Sidebar"
            >
              <PanelLeftClose className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">Toggle Sidebar</TooltipContent>
        </Tooltip>

        <div className="flex-1 flex flex-col gap-3 pt-4">
          {MENU_ITEMS.map((item) => (
            <SidebarButton
              key={item.id}
              icon={item.icon}
              label={item.label}
              active={activeLeft === item.id && leftOpen}
              onClick={() => handleItemClick(item.id)}
            />
          ))}
        </div>
      </aside>

      <motion.aside
        initial={false}
        animate={{ width: leftOpen ? 256 : 0 }}
        className="shrink-0 border-r border-border overflow-hidden z-20 bg-background/50 backdrop-blur-sm"
      >
        <div className="w-64 flex flex-col h-screen">
          <div className="h-14 shrink-0 flex items-center px-4 border-b border-border">
            <h2 className="font-semibold text-sm capitalize">{activeLeft} Menu</h2>
          </div>

          {activeLeft === LEFT_MENU_KEYS.SELECTORS && (
            <div className="flex flex-col flex-1 min-h-0">
              <div className="p-4 shrink-0">
                <div className="relative">
                  <Search className="absolute left-2 top-1.5 size-3.5 text-muted-foreground" />
                  <Input
                    placeholder="Filter selectors..."
                    className="pl-7"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase mt-4 mb-2 px-1">
                  Selectors ({filteredSelectors.length})
                </h3>
              </div>

              <div className="flex-1 min-h-0 overflow-hidden">
                <ScrollArea className="h-full w-full">
                  {filteredSelectors.map((selector, index) => (
                    <SelectorItem key={selector} selector={selector} index={index} />
                  ))}
                </ScrollArea>
              </div>
            </div>
          )}

          {activeLeft === LEFT_MENU_KEYS.HOME && (
            <div className="p-4 text-sm text-muted-foreground">
              Home content goes here.
            </div>
          )}
        </div>
      </motion.aside>
    </>
  )
})