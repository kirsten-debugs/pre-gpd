import { useState } from "react"
import { UserAvatar } from "@/components/UserAvatar"
import { LocalProfile } from "@/components/LocalProfile"

export function StudioNavbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  return (
    <>
      <header className="h-14 shrink-0 border-b border-border flex items-center justify-between px-4 bg-background/50 backdrop-blur-sm">
        <h1 className="font-medium text-sm">Studio Workspace</h1>
        <UserAvatar onOpenProfile={() => setIsProfileOpen(true)} />
      </header>

      {/* Rendered at the top level of the component, NOT inside the menu */}
      <LocalProfile isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </>
  )
}