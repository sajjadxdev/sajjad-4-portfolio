"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Menu, X } from "lucide-react"

const navItems = [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/#work" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
]

export default function Header() {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)
    const close = () => setOpen(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12)
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
            <Link href="/" className="brand" onClick={close}>
                SA<span>.</span>
            </Link>
            <nav className="desktop-nav" aria-label="Primary navigation">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        aria-current={!item.href.includes("#") && pathname.startsWith(item.href) ? "page" : undefined}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
            <Link className="header-cta" href="/#contact">
                Start a project <ArrowUpRight size={15} />
            </Link>
            <button
                type="button"
                className="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mobile-panel"
                onClick={() => setOpen(!open)}
            >
                {open ? <X size={22} /> : <Menu size={22} />}
            </button>
            {open && (
                <nav id="mobile-panel" className="mobile-panel" aria-label="Mobile navigation">
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href} onClick={close}>
                            {item.label}
                        </Link>
                    ))}
                    <Link href="/#contact" onClick={close}>Start a project ↗</Link>
                </nav>
            )}
        </header>
    )
}
