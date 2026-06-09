import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useProfileStore } from "@/store/useProfileStore"

interface UserAvatarProps {
  onOpenProfile: () => void
}

export function UserAvatar({ onOpenProfile }: UserAvatarProps) {
  const { username, userId, avatarUrl } = useProfileStore()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" size="icon" className="rounded-full size-8">
          <Avatar className="size-8 overflow-hidden relative">
            {avatarUrl ? (
              <AvatarImage 
                src={avatarUrl} 
                alt={username || "User"} 
                className="w-20 h-27.5 max-w-none -mt-6 -ml-4.5"
              />
            ) : (
              <AvatarFallback>{username?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
            )}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="flex flex-col">
            <span className="text-sm font-medium">{username || "Guest"}</span>
            <span className="text-xs text-muted-foreground font-normal">{userId || "No ID"}</span>
          </DropdownMenuLabel>
        </DropdownMenuGroup>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={onOpenProfile}>
            {username ? "Edit Local Profile" : "Setup Local Profile"}
          </DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}