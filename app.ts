import express from "express"
import {
    errorHandler,
    unknownEndpoint
} from "./utils/middleware"
import {
    projectsRouter,
    discordRouter,
    socialsRouter
} from "./routes"
import path from "path"

require("express-async-errors")
const app = express()

app.use(express.static(
    path
        .join(__dirname, "")
        .replace("\dist", "client\\dist")
))

app.use("/api/projects", projectsRouter)
app.use("/api/discord", discordRouter)
app.use("/api/socials", socialsRouter)

app.use('/', (req, res) => {
    res.sendFile(path
        .join(__dirname, "")
        .replace("\dist", "client\\dist\\index.html"));
});


// app.use(unknownEndpoint)
app.use(errorHandler)

export default app