"use client"

import { cn } from "@/lib/utils"
import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { useTheme } from "./ThemeProvider"

interface ShadowTextProps
    extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode
}

export default function ShadowText({
    className,
    children,
    ...props
}: ShadowTextProps) {
    const textRef = useRef<HTMLHeadingElement>(null)
    const { theme } = useTheme()

    useEffect(() => {
        const el = textRef.current
        if (!el) return

        const shadow = { x: 4, y: 4 }
        const maxOffset = 6

        const getShadow = () => {
            return `
    ${-shadow.x}px ${-shadow.y}px 10px var(--shadow-text-dark),
    ${shadow.x}px ${shadow.y}px 10px var(--shadow-text-light)
  `
        }

        const updateShadow = () => {
            el.style.textShadow = getShadow()
        }

        updateShadow()

        gsap.set(el, { textShadow: getShadow() })

        const handleMouseMove = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect()

            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2

            const percentX = (e.clientX - centerX) / (rect.width / 2)
            const percentY = (e.clientY - centerY) / (rect.height / 2)

            const clampedX = Math.max(-1, Math.min(1, percentX))
            const clampedY = Math.max(-1, Math.min(1, percentY))

            const moveX = clampedX * maxOffset
            const moveY = clampedY * maxOffset

            gsap.to(shadow, {
                x: moveX,
                y: moveY,
                duration: 0.2,
                ease: "power2.out",
                onUpdate: updateShadow
            })
        }

        const handleMouseLeave = () => {
            gsap.to(shadow, {
                x: 4,
                y: 4,
                duration: 0.4,
                ease: "power3.out",
                onUpdate: updateShadow
            })
        }

        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [theme])

    return (
        <h1
            ref={textRef}
            className={cn("font-bold", className)}
            {...props}
        >
            {children}
        </h1>
    )
}