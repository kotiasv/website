"use client"

import { ProjectProps } from "@/data/types"
import React from "react"
import { FiExternalLink } from "react-icons/fi"

const ProjectCard = ({
    project,
    index,
}: {
    project: ProjectProps
    index: number
}) => {
    return (
        <div
            className="relative mx-auto border-[0.1px] border-[#0a0a0c] dark:border-none dark:bg-[#121212] w-[100%] md:w-[700px] lg:w-[485px] projects:w-[520px] p-3 rounded-lg transition-transform duration-300 mb-5 break-inside-avoid cursor-pointer hover:scale-[1.02]"
            onClick={() => window.open(project.url)}
        >
            <h3 className="text-3xl">{project.name}</h3>
            <p className="mt-2 ml-3 text-2xl md:min-w-[400px] max-w-[300px] text-gray-800 dark:text-gray-300">
                {project.description}
            </p>
            <ul className="mt-3 ml-3 flex gap-2 items-center text-gray-600 dark:text-gray-400">
                <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: project.primaryLanguage.color }}
                />
                {project.primaryLanguage.name}
            </ul>
            <FiExternalLink
                className="absolute right-4 top-4 w-7 h-7"
                key={`project-image-${index}`}
            />
        </div>
    )
}

export default ProjectCard
