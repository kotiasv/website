"use client"

import { ReactNode, useState } from "react"
import "./globals.css"
import { ThemeContext } from "@/hooks/theme"

const Layout = ({ children }: { children: ReactNode }) => {
    const [darkMode, setDarkMode] = useState(true)
    return (
        <html className={`${darkMode ? "dark" : ""}`}>
            <head>
                <title>kotiasv</title>
                <meta name="description" content="My personal website!" />
            </head>
            <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
                <body className="bg-[#f9f9f9] text-back dark:bg-back dark:text-white">
                    {children}
                </body>
            </ThemeContext.Provider>
        </html>
    )
}

export default Layout
