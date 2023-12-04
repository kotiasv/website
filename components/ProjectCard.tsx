"use client"

import { ProjectProps } from "@/data/types"
import Image from "next/image"
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
        <div className="mx-auto border-[0.1px] border-[#0a0a0c] dark:border-[#b8b8b8] dark:bg-[#121212] w-[100%] md:w-[700px] lg:w-[485px] projects:w-[520px] p-3 rounded-lg mb-5 break-inside-avoid">
            <div className="flex gap-2">
                <div
                    className={`border-[0.1px] rounded-md p-1 ${project.homepageUrl ? "transition-transform duration-300 hover:scale-[1.03] cursor-pointer border-[#0a0a0c] dark:border-white" : "cursor-not-allowed border-gray-500 text-gray-500"}`}
                    onClick={() => window.open(project.homepageUrl)}
                >
                    <FiExternalLink
                        className="w-5 h-5"
                        key={`project-image-${index}`}
                    />
                </div>
                <div
                    className="border-[0.1px] rounded-md border-[#0a0a0c] p-1 transition-transform duration-300 hover:scale-[1.03] cursor-pointer dark:invert"
                    onClick={() => window.open(project.url)}
                >
                    <Image
                        src="/github.png"
                        alt="github"
                        width={20}
                        height={20}
                    />
                </div>
            </div>
            <h3 className="mt-2 text-3xl">
                {project.name}
            </h3>
            <p className="text-xl leading-6 mt-1 md:min-w-[400px] max-w-[300px] text-gray-800 dark:text-gray-400">
                {project.description}
            </p>
            <div className="flex items-center mt-3 gap-1 text-lg">
                <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: project.primaryLanguage.color }}
                />
                {project.primaryLanguage.name}
            </div>
        </div>
    )
}

export default ProjectCard
