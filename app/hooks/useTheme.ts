"use client"

import * as React from "react"
import { type Theme } from "@/themes"

export function useTheme() {
  // 1. Initialize state with the strict Theme type
  const [theme, setThemeState] = React.useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      // Validate saved theme against Theme type
      return (saved as Theme) || "light"
    }
    return "light"
  })

  // 2. Optimized setter with strict typing
  const setTheme = React.useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
    
    window.dispatchEvent(new CustomEvent("theme-change", { detail: newTheme }))
  }, [])

  // 3. Sync theme on mount
  React.useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as Theme) || "light"
    document.documentElement.setAttribute("data-theme", savedTheme)
  }, [])

  return { theme, setTheme }
}