import { useEffect, useState } from "react"
import { motion } from "motion/react"

export function Intro({ onComplete }: { onComplete: () => void }) {
  const [shouldExit, setShouldExit] = useState(false)

  useEffect(() => {
    let isLoaded = false
    let minTimePassed = false
    const triggerExit = () => setShouldExit(true)
    
    const timer = setTimeout(() => {
      minTimePassed = true
      if (isLoaded) triggerExit()
    }, 2000)
    
    const handlePageLoad = () => {
      isLoaded = true
      if (minTimePassed) triggerExit()
    }
    
    if (document.readyState === "complete") handlePageLoad()
    else window.addEventListener("load", handlePageLoad)
    
    return () => {
      window.removeEventListener("load", handlePageLoad)
      clearTimeout(timer)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: shouldExit ? 0 : 1 }}
      onAnimationComplete={() => shouldExit && onComplete()}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background p-4"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <motion.div
        layout
        transition={{ layout: { type: "spring", stiffness: 80, damping: 20 } }}
        initial={{ width: "min(90vw, 220px)", height: 120, borderRadius: 8 }}
        className="relative flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center p-2 text-center w-full h-full">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
            <motion.rect
              width="100%"
              height="100%"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              initial={{ rx: 8, pathLength: 0 }}
              animate={{ rx: 8, pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--chart-1)" />
                <stop offset="25%" stopColor="var(--chart-2)" />
                <stop offset="50%" stopColor="var(--chart-3)" />
                <stop offset="75%" stopColor="var(--chart-4)" />
                <stop offset="100%" stopColor="var(--chart-5)" />
              </linearGradient>
            </defs>
          </svg>
          <h1 className="text-[14px] font-celestial tracking-[0.15em] uppercase text-foreground">
            Gaia Studio
          </h1>
          <p className="mt-0.5 text-[8px] font-space text-foreground/50 tracking-[0.15em] uppercase">
            Atelier of Infinite Creation
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}