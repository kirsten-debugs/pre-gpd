import { useState, useMemo, lazy, Suspense } from "react"
import { useLocation } from "react-router"
import { motion, AnimatePresence } from "motion/react"
import { Intro } from "@/layouts/Intro"
import { SmoothScroll } from "@/layouts/SmoothScroll"

const Navbar = lazy(() => import("@/components/Navbar"))
const Footer = lazy(() => import("@/components/Footer"))
const Particles = lazy(() => import("@/components/Particles"))

export function MainLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const isStudio = location.pathname === "/studio"

  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window !== "undefined") return sessionStorage.getItem("hasVisited") !== "true"
    return true
  })

  const handleLoaderComplete = () => {
    sessionStorage.setItem("hasVisited", "true")
    setShowIntro(false)
  }

  const content = useMemo(() => {
    return isStudio ? children : <Particles>{children}</Particles>
  }, [isStudio, children])

  return (
    <SmoothScroll>
      <AnimatePresence mode="wait">
        {showIntro ? (
          <Intro key="loader" onComplete={handleLoaderComplete} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex min-h-screen flex-col"
          >
            <Suspense fallback={<div className="h-20" />}>
              <Navbar />
            </Suspense>
            
            <main className={isStudio ? "w-full grow" : "container mx-auto grow py-5 pt-30 pb-50"}>
              {content}
            </main>
            
            {!isStudio && <Footer />}
          </motion.div>
        )}
      </AnimatePresence>
    </SmoothScroll>
  )
}