import { Projects, Socials } from "./types"
import { DISCORD_ID } from "./config"

const projects: Projects = [
    {
        name: "Adrian Portfolio",
        description: "Portfolio Application for 3D visual and web developer",
        image: "",
        link: "https://adrian-kotiasv.vercel.app/",
        stack: ["React", "TailwindCSS", "Vite", "Framer Motion", "Three"]
    }
]

const socials: Socials = [
    {
        name: "Discord",
        image: "",
        userUrl: `https://discord.com/users/${DISCORD_ID}`
    },
    {
        name: "VK",
        image: "",
        userUrl: "https://vk.com/vshakitskiy"
    },
    {
        name: "Github",
        image: "",
        userUrl: "https://github.com/kotiasv"
    }
]

export {
    projects,
    socials
}