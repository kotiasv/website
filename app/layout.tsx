import { Metadata } from "next"
import { ReactNode } from "react"
import "./globals.css"

export const metadata: Metadata = {
    title: "kotiasv",
    description: "My personal website!",
}

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <html>
            <body className="bg-back text-white">{children}</body>
        </html>
    )
}

export default Layout
