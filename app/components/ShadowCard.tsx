"use client"

import { cn } from "@/lib/utils"
import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { useTheme } from "./ThemeProvider"

interface ShadowCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: "card" | "button"
}

export default function ShadowCard({
  className,
  children,
  variant = "card",
  ...props
}: ShadowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const isDark = theme === "dark"
    const isButton = variant === "button"

    const shadow = { x: 6, y: 6 }

    const maxOffset = isButton ? 4 : 8
    const blur = isDark
      ? isButton ? 8 : 14
      : isButton ? 12 : 20

    const getShadow = () => {
      return `
    ${-shadow.x}px ${-shadow.y}px ${blur}px var(--shadow-outer-light),
    ${shadow.x}px ${shadow.y}px ${blur}px var(--shadow-outer-dark)
  `
    }

    const updateShadow = () => {
      card.style.boxShadow = getShadow()
    }

    updateShadow()

    const quickX = gsap.quickTo(shadow, "x", {
      duration: 0.35,
      ease: "power3.out",
      onUpdate: updateShadow
    })

    const quickY = gsap.quickTo(shadow, "y", {
      duration: 0.35,
      ease: "power3.out",
      onUpdate: updateShadow
    })

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()

      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const percentX = (e.clientX - centerX) / 200
      const percentY = (e.clientY - centerY) / 200

      const moveX = Math.max(-maxOffset, Math.min(maxOffset, percentX * 20))
      const moveY = Math.max(-maxOffset, Math.min(maxOffset, percentY * 20))

      quickX(moveX)
      quickY(moveY)
    }

    const handleMouseLeave = () => {
      quickX(isButton ? 4 : 6)
      quickY(isButton ? 4 : 6)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [variant, theme])

  return (
    <div
      ref={cardRef}
      className={cn("relative bg-card transition-colors", className)}
      {...props}
    >
      {children}
    </div>
  )
}