export type discordOnlineProps = "offline" | "dnd" | "idle" | "online"

export type discordProps = {
    username: string
    global: string
    imageUrl: string
    online: discordOnlineProps
}

export type navProps = {
    title: string
    href: string
}[]

export type socialsProp = {
    title: string
    url: string
    destination: string
    styles?: string
}[]

export type ProjectProps = {
    name: string
    url: string
    primaryLanguage: {
        name: string
        color: string
    }
    description: string
    homepageUrl: string
}
