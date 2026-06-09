import { Maximize2, Minimize2, MousePointer2, Code2 } from "lucide-react"
import { Button } from "~/components/ui/button"
import { useStudio } from "./StudioContext"

interface FloatingControlsProps {
  isMaximized: boolean
  setIsMaximized: (val: boolean) => void
}

export function FloatingControls({ isMaximized, setIsMaximized }: FloatingControlsProps) {
  const { isCodeOpen, setIsCodeOpen, isSelectionMode, setIsSelectionMode } = useStudio()

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 bg-background/80 backdrop-blur-md p-1 rounded-lg border border-border">
      <Button 
        variant={isSelectionMode ? "secondary" : "ghost"} 
        size="sm" 
        className="gap-2 px-3" 
        onClick={() => setIsSelectionMode(!isSelectionMode)}
      >
        <MousePointer2 className="size-4" />
        <span>Select Element</span>
      </Button>
      
      <Button 
        variant={isCodeOpen ? "secondary" : "ghost"} 
        size="sm" 
        className="gap-2 px-3" 
        onClick={() => setIsCodeOpen(!isCodeOpen)}
      >
        <Code2 className="size-4" />
        <span>Code</span>
      </Button>
      
      <div className="w-px h-6 bg-border mx-1" />
      
      <Button 
        variant="ghost" 
        size="sm" 
        className="gap-2 px-3" 
        onClick={() => setIsMaximized(!isMaximized)}
      >
        {isMaximized ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
 
      </Button>
    </div>
  )
}