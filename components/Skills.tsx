"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
    SiGit,
    SiGithub,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiVisualstudiocode,
    SiNpm,
    SiExpress,
    SiPostman,
    SiVercel,
    SiAtom
} from "react-icons/si"

const Skills = () => {
    const skills = [
        {
            title: "Languages",
            value: (<>
                <SiJavascript className="w-16 h-16 text-yellow-300" />
                <SiTypescript className="w-16 h-16 text-blue-500" />
            </>)
        },
        {
            title: "Libraries",
            value: (<>
                <SiReact className="w-16 h-16 text-blue-400" />
            </>)
        },
        {
            title: "Platforms",
            value: (<>
                <SiNodedotjs className="w-16 h-16 text-green-500" />
                <SiPostman className="w-16 h-16 text-orange-500" />
            </>)
        },
        {
            title: "Databases",
            value: (<>
                <SiMongodb className="w-16 h-16 text-green-500" />
            </>)
        },
        {
            title: "Frameworks",
            value: (<>
                <SiNextdotjs className="w-16 h-16" />
                <SiTailwindcss className="w-16 h-16 text-blue-400" />
                {/* <SiVite className="w-16 h-16" /> */}
                <Image
                    src="/vite.svg"
                    width={64}
                    height={64}
                    alt="Vite"
                />
                <SiExpress className="w-16 h-16" />
            </>)
        },
        {
            title: "Files",
            value: (<>
                <SiGit className="w-16 h-16 text-orange-700" />
                <SiGithub className="w-16 h-16" />
            </>)
        },
        {
            title: "Managers",
            value: (<>
                <SiNpm className="w-16 h-16 text-red-500" />
            </>)
        },
        {
            title: "Code Editors",
            value: (<>
                <SiVisualstudiocode className="w-16 h-16 text-blue-400" />
                <SiAtom className="w-16 h-16 text-stone-700" />
            </>)
        },
        {
            title: "Hosting",
            value: (<>
                <SiVercel className="w-16 h-16" />
            </>)
        },
    ]

    return (
        <motion.section
            className="mt-28"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: .3 }}
            viewport={{ once: true }}
            id="skills"
        >
            <h2 className="text-5xl h-16 sm:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-[#8399c0] to-[#161923]">
                Skills
            </h2>
            <div className="flex flex-wrap my-7 gap-11 sm:gap-10 ml-3 sm:justify-center md:gap-16">
                {skills.map(skill => (
                    <div key={skill.title}>
                        <h3 className="text-2xl sm:text-3xl">{skill.title}</h3>
                        <div className="flex mt-2 sm:mt-4 gap-3">{skill.value}</div>
                    </div>
                ))}
            </div>
        </motion.section>
    )
}

export default Skills