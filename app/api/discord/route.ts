import { NextResponse } from "next/server"
import axios from "axios"

export async function GET(request: Request) {
    const { data: { data: json } } = await
        axios.get(`https://api.lanyard.rest/v1/users/511911643475738656`)

    const imageUrl = `https://cdn.discordapp.com/avatars/511911643475738656/${json.discord_user.avatar}.png?size=300`


    const data = {
        username: json.discord_user.username,
        global: json.discord_user.global_name,
        imageUrl,
        online: json.discord_status,
        session: null
    }

    if (json.activities.length) {
        data.session = json.activities[1].name
    }

    return NextResponse.json(data)
}