import Header from "@/components/Header"
import Hero from "@/components/Hero"

const Home = () => {
    return (
        <div>
            <Header />
            <main className="max-w-[1150px] mx-auto px-6 mt-14">
                <Hero />
            </main>
        </div>
    )
}

export default Home
