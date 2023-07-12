import { Dispatch, SetStateAction, createContext } from "react"

export const ThemeContext = createContext<null | {
    darkMode: boolean
    setDarkMode: (isDarkMode: boolean) => void
}>(null)