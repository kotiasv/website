import { Dispatch, SetStateAction, createContext } from "react"

export const ThemeContext = createContext<null | {
    darkMode: boolean
    setDarkMode: Dispatch<SetStateAction<boolean>>
}>(null)