import { ReactNode } from "react"
import "./globals.css"
import Provider from "@/providers/theme"
import Grid from "@/components/Grid"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
    subsets: ["latin"]
})

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <title>kotiasv</title>
                <meta name="description" content="My personal website!" />
            </head>
            <body suppressHydrationWarning className={`${montserrat.className} relative`}>
                <Grid />
                <Provider>{children}</Provider>
            </body>
        </html>
    )
}

export default Layout