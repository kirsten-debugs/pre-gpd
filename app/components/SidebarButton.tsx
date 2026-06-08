"use client"

import { memo, useState } from "react"
import { Button } from "~/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "~/components/ui/tooltip"

interface SidebarButtonProps {
  icon: React.ElementType
  label: string
  active: boolean
  onClick: () => void
}

export const SidebarButton = memo(({ icon: Icon, label, active, onClick }: SidebarButtonProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Tooltip open={open}>
      <TooltipTrigger>
        <Button
          variant={active ? "secondary" : "ghost"}
          size="icon"
          className="size-8"
          onClick={onClick}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <Icon className="size-4" />
        </Button>
      </TooltipTrigger>
      
      {/* By gating the entire content behind the 'open' state, 
        Base UI does not mount the Portal or Positioner 
        until it is actually needed. 
      */}
      {open && (
        <TooltipContent side="right" sideOffset={8}>
          {label}
        </TooltipContent>
      )}
    </Tooltip>
  )
})