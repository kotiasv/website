import express from "express"
import {
    errorHandler,
    unknownEndpoint
} from "./utils/middleware"
import { projectsRouter } from "./routes"
import path from "path"

require("express-async-errors")
const app = express()

app.use(express.static(
    path
        .join(__dirname, "")
        .replace("\dist", "client\\dist")
))

app.use("/api/projects", projectsRouter)

app.use(unknownEndpoint)
app.use(errorHandler)

export default app