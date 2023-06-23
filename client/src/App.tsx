import { useEffect } from "react"
import axios from "axios"

const App = () => {
    useEffect(() => {
        axios.get("/api/projects").then(res => console.log(res.data))
    }, [])

    return (
        <>
            Project Structure
        </>
    )
}
export default App
