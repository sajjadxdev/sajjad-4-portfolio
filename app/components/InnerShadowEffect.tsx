"use client"

import { cn } from "@/lib/utils"
import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { useTheme } from "./ThemeProvider"

interface InnerShadowCardProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    variant?: "card" | "button"
}

export default function InnerShadowCard({
    className,
    children,
    variant = "card",
    ...props
}: InnerShadowCardProps) {
    const cardRef = useRef<HTMLDivElement>(null)
    const { theme } = useTheme()

    useEffect(() => {
        const card = cardRef.current
        if (!card) return

        const isDark = theme === "dark"
        const isButton = variant === "button"

        const shadow = { x: 4, y: 4 }

        const maxOffset = isButton ? 3 : 6
        const blur = isDark
            ? isButton ? 6 : 10
            : isButton ? 8 : 14

        const getShadow = () => {
            return `
    inset ${shadow.x}px ${shadow.y}px ${blur}px var(--shadow-inner-dark),
    inset ${-shadow.x}px ${-shadow.y}px ${blur}px var(--shadow-inner-light)
  `
        }

        const updateShadow = () => {
            card.style.boxShadow = getShadow()
        }

        updateShadow()

        const quickX = gsap.quickTo(shadow, "x", {
            duration: 0.3,
            ease: "power3.out",
            onUpdate: updateShadow
        })

        const quickY = gsap.quickTo(shadow, "y", {
            duration: 0.3,
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
            quickX(4)
            quickY(4)
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
            className={cn(
                "relative bg-card rounded-3xl transition-colors",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}