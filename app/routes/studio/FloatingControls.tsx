import { Maximize2, Minimize2, MousePointer2, Code2 } from "lucide-react"
import { Button } from "~/components/ui/button"
import { useStudio } from "./StudioContext" // Adjust path as needed

interface FloatingControlsProps {
  isMaximized: boolean
  setIsMaximized: (val: boolean) => void
}

export function FloatingControls({ isMaximized, setIsMaximized }: FloatingControlsProps) {
  const { isCodeOpen, setIsCodeOpen } = useStudio()

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 bg-background/80 backdrop-blur-md p-1 rounded-lg border border-border">
      <Button variant="ghost" size="icon" className="size-8" aria-label="Select element">
        <MousePointer2 className="size-4" />
      </Button>

      <Button 
        variant={isCodeOpen ? "secondary" : "ghost"} 
        size="icon" 
        className="size-8" 
        onClick={() => setIsCodeOpen(!isCodeOpen)}
        aria-label="Toggle code view"
      >
        <Code2 className="size-4" />
      </Button>

      <div className="w-px h-4 bg-border mx-1" />

      <Button
        variant="ghost"
        size="icon"
        className="size-8"
        onClick={() => setIsMaximized(!isMaximized)}
        aria-label={isMaximized ? "Minimize workspace" : "Maximize workspace"}
      >
        {isMaximized ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
      </Button>
    </div>
  )
}