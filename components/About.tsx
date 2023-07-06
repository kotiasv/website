"use client"

import { motion } from "framer-motion"
import { AiFillStar } from "react-icons/ai"

const About = () => {
    return (
        <motion.section
            className="mt-28"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: .3 }}
            viewport={{ once: true }}
            id="about"
        >
            <h2 className="text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-[#8399c0] to-[#161923]">
                About me
            </h2>
            <div className="ml-3 sm:ml-4 mt-7 text-gray-400 sm:text-gray-300 leading-10 sm:leading-[45px]">
                <h3 className="flex gap-2 text-white items-center text-3xl">
                    Hello World
                    <AiFillStar style={{
                        zIndex: -1,
                        color: "#fffa6b",
                        transform: "rotate(79deg)"
                    }} />
                </h3>
                <p className="max-w-md sm:max-w-3xl text-[22px] mt-2">
                    My name is <b>Vlad</b> and I'm a (beginner) Software Engineer from Russia. I'm Open Source Lover and enjoy the idea of explaining where and how you can use the code. Besides programming, I'm really interested in gaming and music. (lofi, different types of phonk, future bass, etc)
                </p>
                <p className="max-w-md sm:max-w-3xl text-[22px] mt-7">
                    My main goal is to become a really good programmer and work in the top companies, making enough money to live comfortably and also filming "A Day In Life as a Software Engineer".
                </p>
            </div>
        </motion.section>
    )
}

export default About