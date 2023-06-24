import { Router } from "express"
import axios from "axios"
import { DISCORD_ID } from "../utils/config"

const discordRouter = Router()

discordRouter.get("/", async (req, res) => {
    const { data: { data: json } } = await axios.get(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`)

    const imageUrl = `https://cdn.discordapp.com/avatars/${DISCORD_ID}/${json.discord_user.avatar}.png?size=300`
    const activeOn = json.active_on_discord_web
        ? "Web"
        : json.active_on_discord_mobile
            ? "Mobile"
            : "Desktop"

    const data = {
        username: json.discord_user.username,
        global: json.discord_user.global_name,
        imageUrl,
        online: json.discord_status,
        status: json.activities[0].state,
        session: json.activities[1].name,
        activeOn,
    }
    res.json(data)
})

export default discordRouter