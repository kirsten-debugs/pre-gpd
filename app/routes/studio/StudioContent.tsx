import { useState, useEffect } from "react"
import { useSearchParams } from "react-router"
import { AnimatePresence } from "motion/react"
import { LeftSidebar } from "@/routes/studio/LeftSidebar"
import { RightSidebar } from "@/routes/studio/RightSidebar"
import { Canvas } from "@/components/Canvas"
import { StudioNavbar } from "@/routes/studio/StudioNavbar"
import { useStudio } from "@/routes/studio/StudioContext"
import { FloatingControls } from "@/routes/studio/FloatingControls"
import { CodePanel } from "@/routes/studio/CodePanel" // Import the new panel
import { cn } from "@/lib/utils"

export function StudioContent() {
  const [searchParams] = useSearchParams()
  const [isMaximized, setIsMaximized] = useState(false)
  const { isCodeOpen, setIsCodeOpen, loadPreset } = useStudio()

  useEffect(() => {
    const id = searchParams.get("id")
    const category = searchParams.get("category")
    if (id && category) loadPreset(id, category).then(() => setIsCodeOpen(true))
  }, [searchParams, loadPreset, setIsCodeOpen])

  return (
    <div className="fixed inset-0 flex w-screen h-screen bg-background overflow-hidden">
      {!isMaximized && <LeftSidebar />}
      <main className="flex-1 flex flex-col min-w-0 bg-transparent relative z-10">
        {!isMaximized && <StudioNavbar />}
        <div className={cn("flex-1 w-full h-full relative overflow-hidden flex items-center justify-center", !isMaximized && "p-8")}>
          {!isMaximized && (
            <div
              className="absolute inset-0 z-0 opacity-10 mask-[linear-gradient(to_bottom,white,transparent)]"
              style={{
                backgroundImage: `linear-gradient(#9C92AC 1px, transparent 1px), linear-gradient(90deg, #9C92AC 1px, transparent 1px)`,
                backgroundSize: "20px 20px"
              }}
            ></div>
          )}
          <FloatingControls isMaximized={isMaximized} setIsMaximized={setIsMaximized} />
          <Canvas isMaximized={isMaximized} />
        </div>
        
        {/* The isolated editor handles its own renders now */}
        <AnimatePresence>
          {isCodeOpen && <CodePanel />}
        </AnimatePresence>
        
      </main>
      {!isMaximized && <RightSidebar />}
    </div>
  )
}