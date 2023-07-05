import { navProps, socialsProp } from "./types";

export const NavItems: navProps = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "About",
        href: "#about"
    },
    {
        title: "Road",
        href: "#road"
    },
    {
        title: "Projects",
        href: "#projects"
    },
    {
        title: "Skills",
        href: "#skills"
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