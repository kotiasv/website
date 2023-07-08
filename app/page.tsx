"use client"

import About from "@/components/About"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Road from "@/components/Road"
import Skills from "@/components/Skills"
import { useState } from "react"

const Home = () => {

    return (
        <div>
            <Header />
            <div id="/" className="w-[100%] h-[1px]" />
            <main className="max-w-[1150px] mx-auto px-6 mt-14">
                <Hero />
                <About />
                <Skills />
                {/* <Road /> */}
                <Projects />
            </main>
            <Footer />
        </div>
    )
}

export default Home
