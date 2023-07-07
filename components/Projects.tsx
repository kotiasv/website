"use client"

import { projects } from "@/data"
import { motion } from "framer-motion"
import { FiExternalLink } from "react-icons/fi"

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
            <div className="flex flex-wrap gap-10 projects:justify-center sm:ml-4 mt-9">
                {projects.map((project, index) => (
                    <div
                        className="relative bg-[#121212] w-[100%] md:w-[700px] projects:w-[500px] p-3 rounded-lg hover:scale-[1.015] transition-transform duration-300 cursor-pointer"
                        key={`project-${index}`}
                        onClick={() => window.open(project.link)}
                    >
                        <h3 className="text-3xl">
                            {project.title}
                        </h3>
                        <p className="mt-2 ml-3 text-2xl md:min-w-[400px] max-w-[300px] text-gray-300">
                            {project.desc}
                        </p>
                        <ul className="flex mt-4 ml-3 gap-2 text-gray-400">
                            {project.stack.map((tech, i) => (
                                <>
                                    <li key={`stack-${index}${i}`}>
                                        {tech}
                                    </li>
                                    <li
                                        className="last:hidden"
                                        key={`dot-${index}${i}`}
                                    >
                                        •
                                    </li>
                                </>
                            ))}
                        </ul>
                        <FiExternalLink
                            className="absolute right-4 top-4 w-7 h-7"
                        />
                    </div>
                ))}
            </div>
        </motion.section>
    )
}

export default Projects