import { useState, useEffect } from "react"
import { LocalProfile } from "@/components/LocalProfile"
import { StudioContent } from "~/routes/studio/StudioContent"
import { StudioProvider } from "./studio/StudioContext"
import { Monitor } from "lucide-react"
import { useIsMobile } from "@/hooks/use-is-mobile"
import { useIsTablet } from "@/hooks/use-is-tablet"

export default function StudioRoute() {
  const [isInitialized, setIsInitialized] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const { isMobile, isLoading: isMobileLoading } = useIsMobile()
  const { isTablet, isLoading: isTabletLoading } = useIsTablet()

  useEffect(() => {
    if (isMobileLoading || isTabletLoading) return

    const hasVisited = localStorage.getItem("studio_visited")
    
    if (!hasVisited) {
      setShowProfile(true)
    } else {
      setIsInitialized(true)
    }
  }, [isMobileLoading, isTabletLoading])

  const handleApply = () => {
    localStorage.setItem("studio_visited", "true")
    setShowProfile(false)
    setIsInitialized(true)
  }

  if (isMobileLoading || isTabletLoading) return null

  if (isMobile || isTablet) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center p-4 text-center bg-background">
        <Monitor className="mb-4 size-12 text-muted-foreground" />
        <p className="text-muted-foreground">The Studio is currently optimized for desktop use only.</p>
      </div>
    )
  }

  // Gatekeeping: Returns a blank screen until the modal check is finished
  if (!isInitialized && !showProfile) {
    return <div className="fixed inset-0 bg-background" />
  }

  return (
    <StudioProvider>
      {isInitialized && <StudioContent />}
      <LocalProfile 
        isOpen={showProfile} 
        onClose={handleApply} 
      />
    </StudioProvider>
  )
}