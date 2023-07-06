"use client"

import { motion } from "framer-motion"

const Projects = () => {
    return (
        <motion.section
            className="mt-28"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: .3 }}
            viewport={{ once: true }}
            id="projects"
        >
            <h2 className="text-5xl h-16 sm:text-6xl text-transparent bg-clip-text bg-gradient-to-tr from-[#8399c0] to-[#161923]">
                Projects
            </h2>
        </motion.section>
    )
}

export default Projects