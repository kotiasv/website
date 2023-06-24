import { config } from "dotenv"
config()

const PORT = process.env.PORT || 3000
const DISCORD_ID = process.env.DISCORD_ID

export {
    PORT,
    DISCORD_ID
}