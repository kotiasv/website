import axios from "axios"
import { discordOnlineProps } from "./types"

export async function getDiscordData() {
    const { data: { data: json } } = await
        axios.get(`https://api.lanyard.rest/v1/users/511911643475738656`)

    const imageUrl = `https://cdn.discordapp.com/avatars/511911643475738656/${json.discord_user.avatar}.png?size=300`
    const online: discordOnlineProps = json.discord_status

    console.log("> discord fetching")

    const data = {
        username: json.discord_user.username,
        global: json.discord_user.global_name,
        imageUrl,
        online
    }

    return data
}