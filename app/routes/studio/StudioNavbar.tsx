import { useState, useRef } from "react"
import { Maximize, Minimize } from "lucide-react"
import { UserAvatar } from "@/components/UserAvatar"
import { LocalProfile } from "@/components/LocalProfile"
import { useFullscreen } from "@/hooks/use-fullscreen"

export function StudioNavbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const containerRef = useRef<HTMLElement>(null)
  const { isFullscreen, toggle } = useFullscreen(containerRef as React.RefObject<Element>)

  return (
    <>
      <header className="h-14 shrink-0 border-b border-border flex items-center justify-between px-4 bg-background/50 backdrop-blur-sm">
        <h1 className="font-medium text-sm">Studio Workspace</h1>
        <div className="flex items-center gap-2">
          <button
            onClick={() => toggle()}
            className="p-2 hover:bg-accent rounded-md transition-colors"
            aria-label="Toggle fullscreen"
          >
            {isFullscreen ? (
              <Minimize className="w-4 h-4" />
            ) : (
              <Maximize className="w-4 h-4" />
            )}
          </button>
          <UserAvatar onOpenProfile={() => setIsProfileOpen(true)} />
        </div>
      </header>

      <LocalProfile isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </>
  )
}