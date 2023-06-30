import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
    title: "Kotiasv",
    description: "My personal website!"
}

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            {children}
        </>
    )
}

export default Layout;