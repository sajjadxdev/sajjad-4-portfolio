import { cn } from "@/lib/utils"
import React from "react"

interface ShadowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: "card" | "button"
}

// Glass cream card matching the home page cards
export default function ShadowCard({ className, children, variant = "card", ...props }: ShadowCardProps) {
  return (
    <div className={cn(variant === "button" ? "theme-btn" : "theme-card", className)} {...props}>
      {children}
    </div>
  )
}
