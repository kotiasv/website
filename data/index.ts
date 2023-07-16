import { ProjectsProp, navProps, socialsProp } from "./types";

export const NavItems: navProps = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "About",
        href: "#about"
    },
    // {
    //     title: "Road",
    //     href: "#road"
    // },
    {
        title: "Skills",
        href: "#skills"
    },
    {
        title: "Projects",
        href: "#projects"
    },
]

export const socials: socialsProp = [
    {
        title: "discord",
        destination: "https://discordapp.com/users/511911643475738656",
        url: "/discord.png",

    },
    {
        title: "github",
        url: "/github.png",
        destination: "https://github.com/kotiasv",
        styles: "invert"
    }
]

export const projects: ProjectsProp = [
    {
        title: "Kotiasv",
        desc: "My personal website",
        stack: [
            "Next.js",
            "React",
            "Typescript"
        ],
        link: "https://github.com/kotiasv/website"
    },
    {
        title: "Promptshare",
        desc: "Share and view chatGPT prompts",
        stack: [
            "Next.js",
            "Typescript",
            "Grafbase"
        ],
        link: "https://github.com/kotiasv/dimitri-portfolio"
    }
]