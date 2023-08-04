import About from "@/components/About"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"

const Home = () => {
    return (
        <div className="bg-[#f9f9f9] text-back dark:bg-back dark:text-white transition-colors duration-300">
            <div className=""></div>
            <Header />
            <div id="/" className="w-[100%] h-[1px]" />
            <main className="max-w-[1150px] mx-auto px-6 mt-14">
                <Hero />
                <About />
                <Skills />
                <Projects />
            </main>
            <Footer />
        </div>
    )
}

export default Home
