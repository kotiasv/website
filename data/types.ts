export type discordOnlineProps = "offline"
    | "dnd"
    | "idle"
    | "online"

export type discordProps = {
    username: string
    global: string
    imageUrl: string
    online: discordOnlineProps
    statusColor: string
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