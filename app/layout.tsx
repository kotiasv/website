"use client"

import { Metadata } from "next"
import { ReactNode, useState } from "react"
import "./globals.css"
import { ThemeContext } from "@/hooks/theme"

export const metadata: Metadata = {
    title: "kotiasv",
    description: "My personal website!",
}

const Layout = ({ children }: { children: ReactNode }) => {
    const [darkMode, setDarkMode] = useState(true)
    return (
        <html className={`${darkMode ? "dark" : ""}`}>
            <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
                <body className="bg-[#f9f9f9] text-back dark:bg-back dark:text-white">
                    {children}
                </body>
            </ThemeContext.Provider>
        </html>
    )
}

export default Layout
