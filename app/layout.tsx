import { ReactNode } from "react"
import "./globals.css"
import Provider from "@/providers/theme"
import Grid from "@/components/Grid"

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <title>kotiasv</title>
                <meta name="description" content="My personal website!" />
            </head>
            <body suppressHydrationWarning className="relative">
                <Grid />
                <Provider>{children}</Provider>
            </body>
        </html>
    )
}

export default Layout
