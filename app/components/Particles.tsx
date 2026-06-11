import type React from "react"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-is-mobile"

export interface ParticlesProps {
  className?: string
  children?: React.ReactNode
  quantity?: number
  staticity?: number
  ease?: number
  size?: number
  color?: string
  vx?: number
  vy?: number
  paused?: boolean
}

interface Circle {
  x: number
  y: number
  size: number
  alpha: number
  dx: number
  dy: number
  magnetism: number
  tx: number
  ty: number
}

export function Particles({
  className,
  children,
  quantity = 20,
  staticity = 50,
  ease = 50,
  size = 0.4,
  color = "#ff74c5",
  vx = 0,
  vy = 0,
  paused = false,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { isMobile, isLoading: isMobileLoading } = useIsMobile()

  useEffect(() => {
    if (isMobile || isMobileLoading) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let isVisible = false
    const mouse = { x: 0, y: 0 }

    const hexToRgb = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16)
      const g = parseInt(hex.slice(3, 5), 16)
      const b = parseInt(hex.slice(5, 7), 16)
      return `${r}, ${g}, ${b}`
    }
    const rgb = hexToRgb(color)
    let circles: Circle[] = []

    const init = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      canvas.width = w * window.devicePixelRatio
      canvas.height = h * window.devicePixelRatio
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

      circles = Array.from({ length: quantity }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 2 + size,
        alpha: Math.random() * 0.5 + 0.1,
        dx: (Math.random() - 0.5) * 0.1,
        dy: (Math.random() - 0.5) * 0.1,
        magnetism: 0.1 + Math.random() * 4,
        tx: 0,
        ty: 0,
      }))
    }

    const animate = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
        circles.forEach((c) => {
          if (!paused) {
            c.x += c.dx + vx
            c.y += c.dy + vy
            c.tx += (mouse.x / (staticity / c.magnetism) - c.tx) / ease
            c.ty += (mouse.y / (staticity / c.magnetism) - c.ty) / ease
          }

          ctx.beginPath()
          ctx.arc(c.x + c.tx, c.y + c.ty, c.size, 0, 2 * Math.PI)
          ctx.fillStyle = `rgba(${rgb}, ${c.alpha})`
          ctx.fill()
        })
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
    }, { threshold: 0 })

    const handleResize = () => init()
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX - window.innerWidth / 2
      mouse.y = e.clientY - window.innerHeight / 2
    }

    observer.observe(canvas)
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    init()
    animate()

    return () => {
      observer.disconnect()
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }, [quantity, staticity, ease, size, vx, vy, color, isMobile, isMobileLoading, paused])

  return (
    <div className={cn("relative w-full", className)}>
      {!isMobileLoading && !isMobile && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 z-0 pointer-events-none contain-strict"
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default Particles