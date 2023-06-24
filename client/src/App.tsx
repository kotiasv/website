import { useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Home from "./pages/Home"

const App = () => {
    const navigate = useNavigate()
    const path = location.pathname
    const locations = ["/", "/test"]

    useEffect(() => {
        if (locations.filter(routes => !path.includes(routes)).length)
            navigate("/")
    }, [])

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
            </Routes>
        </>
    )
}
export default App
