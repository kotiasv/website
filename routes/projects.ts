import { Router } from "express"
import { projects } from "../utils/data"
const projectsRouter = Router()

projectsRouter.get("/", (req, res) => res.json(projects))

export default projectsRouter