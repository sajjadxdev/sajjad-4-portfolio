"use client"

import { useState } from "react"
import ShadowCard from "./ShadowCard"
import { cn } from "@/lib/utils"
import { Menu, X, Sun, Moon, Rocket } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export default function Header() {
    const { theme, toggleTheme } = useTheme()
    const [mobileOpen, setMobileOpen] = useState(false)

    const navItems = [
        { label: "Hello", id: "hello" },
        { label: "About", id: "about" },
        { label: "Projects", id: "projects" },
        { label: "Experience", id: "experience" },
        { label: "Skills", id: "skills" },
        { label: "FAQ", id: "faq" },
        { label: "Contact", id: "contact" },
    ];

    return (
        <header className="w-full fixed top-0 left-0 z-50 bg-background/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Left - Logo */}
                <a href="#hello" className="flex items-center gap-2 font-semibold text-lg">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 shadow-inner overflow-hidden" >
                        <img className="relative top-2 scale-150" src="/sajjad.png" alt="Sajjad Ahmad" />
                    </div>
                    <span>
                        Sajjad <span className="font-bold">Ahmad</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

                    {navItems.map((item, i) => (
                        <a
                            key={i}
                            href={`#${item.id}`}
                            className="py-2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Right Side */}
                <div className="flex items-center gap-4">

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center gap-4">

                        {/* CTA Button */}
                        <a href="#contact">
                            <ShadowCard variant="button" className="px-5 py-2 rounded-full cursor-pointer">
                                <div className="flex items-center gap-2 text-sm font-medium">
                                    <Rocket size={16} />
                                    Hire Me
                                </div>
                            </ShadowCard>
                        </a>

                        {/* Theme Toggle */}
                        <ShadowCard
                            variant="button"
                            onClick={toggleTheme}
                            className="p-2 rounded-full cursor-pointer flex items-center justify-center"
                        >
                            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </ShadowCard>

                    </div>

                    {/* Theme Toggle Mobile */}
                    <ShadowCard
                        variant="button"
                        onClick={toggleTheme}
                        className="p-2 rounded-full cursor-pointer flex md:hidden items-center justify-center"
                    >
                        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                    </ShadowCard>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="inline-block md:hidden"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "md:hidden overflow-hidden transition-all duration-300",
                    mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="px-6 pb-6 flex flex-col gap-4">
                    {navItems.map(
                        (item, i) => (
                            <a
                                key={i}
                                href={`#${item.id}`}
                                onClick={() => setMobileOpen(false)}
                                className="py-2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item.label}
                            </a>
                        )
                    )}

                    <a href="#contact" onClick={() => setMobileOpen(false)}>
                        <ShadowCard variant="button" className="px-5 py-3 rounded-full cursor-pointer w-fit">
                            <div className="flex items-center gap-2 text-sm font-medium">
                                <Rocket size={16} />
                                Hire Me
                            </div>
                        </ShadowCard>
                    </a>
                </div>
            </div>
        </header>
    )
}