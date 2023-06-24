import { ErrorMiddleware, Middleware } from "./types"


const unknownEndpoint: Middleware = (req, res, next) => {
    res
        .status(404)
        .end()
    next()
}

const errorHandler: ErrorMiddleware = (err: Error, req, res, next) => {
    console.log(err)

    res
        .status(502)
        .json({ error: `server error: ${err.message}` })
    next()
}

export {
    unknownEndpoint,
    errorHandler
}