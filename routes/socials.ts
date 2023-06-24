import { Router } from "express"
import { socials } from "../utils/data"
const socialsRouter = Router()

socialsRouter.get("/", (req, res) => res.json(socials))

export default socialsRouter