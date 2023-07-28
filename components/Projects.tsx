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
                <div className="columns-1 lg:columns-2 mt-9">
                    {projects.map((project, index) => (
                        <div
                            className="relative mx-auto border-[0.1px] border-[#0a0a0c] dark:border-none dark:bg-[#121212] w-[100%] md:w-[700px] lg:w-[485px] projects:w-[520px] p-3 rounded-lg hover:scale-[1.015] transition-transform duration-300 cursor-pointer mb-5 break-inside-avoid"
                            key={`project-${index}`}
                            onClick={() => window.open(project.link)}
                        >
                            <h3 className="text-3xl">
                                {project.title}
                            </h3>
                            <p className="mt-2 ml-3 text-2xl md:min-w-[400px] max-w-[300px] text-gray-800 dark:text-gray-300">
                                {project.desc}
                            </p>
                            <ul className="mt-4 flex flex-wrap text-gray-600 dark:text-gray-400">
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
                                            <li className={`${isLast ? "hidden" : "block"} mr-2`}>
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