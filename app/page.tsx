import About from "@/components/About"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Road from "@/components/Road"
import Skills from "@/components/Skills"

const Home = () => {
    return (
        <div>
            <Header />
            <main className="max-w-[1150px] mx-auto px-6 mt-14">
                <Hero />
                <About />
                <Skills />
                {/* <Road /> */}
                <Projects />
            </main>
        </div>
    )
}

export default Home
