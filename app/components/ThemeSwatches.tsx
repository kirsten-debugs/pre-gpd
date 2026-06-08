import * as React from "react"
import { Palette, Check } from "lucide-react"
import { Button } from "~/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuGroup,
} from "~/components/ui/dropdown-menu"
import { useTheme } from "@/hooks/useTheme"
import { ThemeList, type Theme, themePalettes } from "@/themes"

const ThemeSwatchItem = React.memo(({
  themeName,
  isSelected,
  onToggle
}: {
  themeName: string,
  isSelected: boolean,
  onToggle: () => void
}) => (
  <DropdownMenuItem onClick={onToggle} className="flex items-center justify-between gap-4">
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {['--background', '--primary', '--accent'].map((key) => (
          <div
            key={key}
            className="h-4 w-2 rounded-xs border border-border/50"
            style={{
              backgroundColor: themePalettes[themeName as Theme]?.[key as keyof typeof themePalettes[Theme]] ?? 'transparent'
            }}
          />
        ))}
      </div>
      <span className="capitalize text-sm">{themeName.replace(/-/g, ' ')}</span>
    </div>
    {isSelected && <Check className="h-4 w-4" />}
  </DropdownMenuItem>
))
ThemeSwatchItem.displayName = "ThemeSwatchItem"

export const ThemeSwatches = React.memo(() => {
  const { theme, setTheme } = useTheme()

  const handleOpenChange = React.useCallback((open: boolean) => {
    const lenis = (window as any).lenisInstance
    if (lenis) open ? lenis.stop() : lenis.start()
  }, [])

  return (
    <DropdownMenu onOpenChange={handleOpenChange} modal={true}>
      <DropdownMenuTrigger>
        <Button variant="outline" size="icon" aria-label="Select Theme">
          <Palette className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Select Theme</DropdownMenuLabel>
          <div className="max-h-75 overflow-y-auto overscroll-y-contain" data-lenis-prevent>
            {ThemeList.map((t) => (
              <ThemeSwatchItem
                key={t}
                themeName={t}
                isSelected={theme === t}
                onToggle={() => setTheme(t as Theme)}
              />
            ))}
          </div>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
})
ThemeSwatches.displayName = "ThemeSwatches"