"use client"

import { projects } from "@/data"
import { FiExternalLink } from "react-icons/fi"
import Motion from "./Motion"

const Projects = () => {
    return (
        <Motion init={-50}>
            <div
                className="mt-28"
                id="projects"
            >
                <h2 className="text-5xl h-16 sm:text-6xl text-transparent bg-clip-text bg-gradient-to-tr from-[#161923] to-[#8399c0] dark:from-[#8399c0] dark:to-[#161923]">
                    Projects
                </h2>
                <div className="flex flex-wrap gap-10 projects:justify-center sm:ml-4 mt-9">
                    {projects.map((project, index) => (
                        <div
                            className="relative border-[0.1px] border-[#0a0a0c] dark:border-none dark:bg-[#121212] w-[100%] md:w-[700px] projects:w-[500px] p-3 rounded-lg hover:scale-[1.015] transition-transform duration-300 cursor-pointer"
                            key={`project-${index}`}
                            onClick={() => window.open(project.link)}
                        >
                            <h3 className="text-3xl">
                                {project.title}
                            </h3>
                            <p className="mt-2 ml-3 text-2xl md:min-w-[400px] max-w-[300px] text-gray-800 dark:text-gray-300">
                                {project.desc}
                            </p>
                            <ul className="flex mt-4 ml-3 gap-2 text-gray-600 dark:text-gray-400">
                                {project.stack.map((tech, i) => {
                                    const isLast =
                                        project.stack.length - 1 == i

                                    return (
                                        <div
                                            className="flex gap-2"
                                            key={`stack-${i}-${index}`}
                                        >
                                            <li>
                                                {tech}
                                            </li>
                                            <li className={`${isLast ? "hidden" : "block"}`}>
                                                •
                                            </li>
                                        </div>
                                    )
                                })}
                            </ul>
                            <FiExternalLink
                                className="absolute right-4 top-4 w-7 h-7"
                                key={`project-image-${index}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Motion>
    )
}

export default Projects