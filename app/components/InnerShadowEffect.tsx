import { cn } from "@/lib/utils"
import React from "react"

interface InnerShadowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: "card" | "button"
}

export default function InnerShadowCard({ className, children, variant, ...props }: InnerShadowCardProps) {
  return (
    <div className={cn(variant === "button" ? "theme-btn" : "theme-inset", className)} {...props}>
      {children}
    </div>
  )
}
