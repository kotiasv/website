import axios from "axios"
import { useEffect } from "react"

const Home = () => {
    useEffect(() => {
        axios.get("/api/discord").then(res => console.log(res.data))
    }, [])

    return (
        <div>Home</div>
    )
}

export default Home