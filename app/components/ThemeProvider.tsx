"use client"

import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react"

type Theme = "light" | "dark"

type ThemeContextType = {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [theme, setTheme] = useState<Theme>("light")

    useEffect(() => {
        const saved = localStorage.getItem("theme") as Theme | null

        if (saved) {
            setTheme(saved)
            document.documentElement.classList.toggle(
                "dark",
                saved === "dark"
            )
        } else {
            const systemDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches

            if (systemDark) {
                setTheme("dark")
                document.documentElement.classList.add("dark")
            }
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark"
        setTheme(newTheme)

        document.documentElement.classList.toggle(
            "dark",
            newTheme === "dark"
        )

        localStorage.setItem("theme", newTheme)
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider")
    }
    return context
}