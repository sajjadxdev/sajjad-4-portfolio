import { cn } from "@/lib/utils"
import React from "react"

interface ShadowCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export default function ShadowCard({
    className,
    children,
    ...props
}: ShadowCardProps) {
    return (
        <div
            className={cn(
                "relative bg-card",
                // Light mode neumorphism
                "shadow-[8px_8px_20px_rgba(0,0,0,0.08),_-8px_-8px_20px_rgba(255,255,255,0.9)]",
                // Dark mode neumorphism
                "dark:shadow-[8px_8px_20px_rgba(0,0,0,0.6),_-8px_-8px_20px_rgba(255,255,255,0.04)]",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}