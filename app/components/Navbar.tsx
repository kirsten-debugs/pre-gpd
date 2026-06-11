import { useState, useEffect, useRef, memo } from "react"
import { Link, useLocation } from "react-router"
import { motion, AnimatePresence } from "motion/react"
import { Sparkles, Menu, X } from "lucide-react"
import { useIsMobile } from "~/hooks/use-is-mobile"
import { ThemeSwatches } from "~/components/ThemeSwatches"
import { Particles } from "~/components/Particles"

const NAV_LINKS = [
  { name: "Home", to: "/pre-gpd" },
  { name: "Gallery", to: "/pre-gpd/gallery" },
  { name: "Creators", to: "/pre-gpd/gallery" },
] as const

const NavLink = memo(({ to, name, mobile, onClick }: { to: string; name: string; mobile?: boolean; onClick?: () => void }) => (
  <Link
    to={to}
    onClick={onClick}
    className={["group relative font-bold tracking-widest uppercase transition-colors outline-hidden focus-visible:ring-2 focus-visible:ring-primary rounded-xl", mobile ? "text-on-surface w-full py-4 text-center text-sm hover:text-primary" : "text-on-surface px-5 py-2 text-[10px] hover:text-primary"].join(" ")}
  >
    <span className="relative z-10">{name}</span>
    {!mobile && (
      <>
        <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute -bottom-px left-1/2 h-px w-0 -translate-x-1/2 bg-linear-to-r from-transparent via-primary to-transparent opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100" />
      </>
    )}
  </Link>
))
NavLink.displayName = "NavLink"

const MobileMenu = memo(({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (v: boolean) => void }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        role="navigation"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="overflow-hidden lg:hidden"
        data-lenis-prevent
      >
        <div className="container mx-auto flex flex-col items-center gap-6 px-6 py-8">
          {NAV_LINKS.map((link, i) => (
            <motion.div key={link.to} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="w-full">
              <NavLink {...link} mobile onClick={() => setIsOpen(false)} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
))
MobileMenu.displayName = "MobileMenu"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isMobile, isLoading: isMobileLoading } = useIsMobile()
  const location = useLocation()
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: [0], rootMargin: "-20px 0px 0px 0px" }
    )
    if (sentinelRef.current) observer.observe(sentinelRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => { setIsOpen(false) }, [location.pathname])

  if (location.pathname.endsWith("/studio")) return null

  return (
    <>
      <div ref={sentinelRef} className="absolute top-0 h-5 w-full" />
      <nav className={`fixed top-0 left-0 z-50 w-full transition-[backdrop-filter,background-color,border-color] duration-500 ${isScrolled || isOpen ? "bg-background/70 backdrop-blur-xl border-b border-border" : "bg-transparent border-b border-transparent"}`}>
        <Particles className="absolute inset-0 z-[-1]" quantity={30} />
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-20 items-center justify-between">
            <Link to="" className="group flex shrink-0 items-center gap-2.5 outline-hidden">
              <div className="bg-surface relative flex h-10 w-10 items-center justify-center rounded-xl border border-border transition-all group-hover:border-primary"><Sparkles size={20} className="text-primary" /></div>
              <div className="flex flex-col"><span className="text-sm font-bold uppercase">Gaia</span><span className="text-[9px] font-black text-primary uppercase">Profile Design</span></div>
            </Link>

            {!isMobileLoading && !isMobile && (
              <nav className="bg-surface/40 absolute left-1/2 hidden -translate-x-1/2 rounded-2xl border border-border p-1.5 backdrop-blur-md lg:flex">
                {NAV_LINKS.map((link) => <NavLink key={link.to} {...link} />)}
              </nav>
            )}

            <div className="flex items-center gap-3">
              <ThemeSwatches />
              <div className="relative overflow-hidden rounded-2xl p-0.5">
                <div className="absolute inset-0 animate-conic-rotate" style={{ background: "conic-gradient(var(--chart-1), var(--chart-3), var(--chart-5), var(--chart-1))" }} />
                <Link to="studio" className="relative z-10 flex items-center justify-center px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-2xl bg-background text-foreground transition-all hover:bg-background/90 outline-hidden">Studio</Link>
              </div>
              <button onClick={() => setIsOpen(!isOpen)} className="bg-surface rounded-xl border border-border p-2.5 lg:hidden focus-visible:ring-2 focus-visible:ring-primary" aria-expanded={isOpen}>
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </>
  )
}