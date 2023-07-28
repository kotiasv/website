"use client"

import { ReactNode, useState, useEffect } from "react"
import "./globals.css"
import { ThemeContext } from "@/hooks/theme"

const Layout = ({ children }: { children: ReactNode }) => {
    const [darkMode, setDarkMode] = useState<boolean>(true)

    useEffect(() => {
        let local: boolean = true
        try {
            local = window.localStorage.theme !== undefined
                ? JSON.parse(window.localStorage.theme)
                : true
            setDarkMode(local)
        } catch (error) { }
    }, [])

    const setMode = (isDarkMode: boolean) => {
        localStorage.setItem("theme", JSON.stringify(isDarkMode))
        setDarkMode(isDarkMode)
    }

    return (
        <html className={`${darkMode ? "dark" : ""}`}>
            <head>
                <title>kotiasv</title>
                <meta name="description" content="My personal website!" />
            </head>
            <ThemeContext.Provider value={{ darkMode, setDarkMode: setMode }}>
                <body
                    className="transition-colors duration-300 bg-[#f9f9f9] text-back dark:bg-back dark:text-white"
                    suppressHydrationWarning={true}
                >
                    {children}
                </body>
            </ThemeContext.Provider>
        </html>
    )
}

export default Layout
