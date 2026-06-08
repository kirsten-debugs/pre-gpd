import { Link } from "react-router"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border bg-background py-20" role="contentinfo">
      <div className="container mx-auto flex flex-col items-center px-4">
        <div className="mb-12 flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-foreground">
            Gaia Profile Design
          </h2>
          <nav 
            className="flex flex-wrap justify-center gap-8 text-sm uppercase tracking-widest text-muted-foreground"
            aria-label="Footer Navigation"
          >
            <Link to="/presets" className="transition-colors hover:text-foreground">Presets</Link>
            <Link to="/themes" className="transition-colors hover:text-foreground">Themes</Link>
            <Link to="/studio" className="transition-colors hover:text-foreground">Studio</Link>
            <Link to="/docs" className="transition-colors hover:text-foreground">Docs</Link>
            <Link to="/contact" className="transition-colors hover:text-foreground">Contact</Link>
          </nav>
        </div>

        <div className="flex w-full max-w-md flex-col items-center gap-8 border-t border-border pt-12">
          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            Design and development framework for the modern web. Built with precision for creators who prioritize aesthetics and high-performance workflows.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link to="/privacy" className="transition-colors hover:text-foreground">Privacy</Link>
            <Link to="/terms" className="transition-colors hover:text-foreground">Terms</Link>
            <span className="text-muted-foreground" aria-hidden="true">
              © {currentYear}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}