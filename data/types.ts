export type discordOnlineProps = "offline"
    | "dnd"
    | "idle"
    | "online"

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

export type ProjectsProp = {
    title: string
    desc: string
    stack: string[],
    link: string
}[]