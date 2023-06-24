import {
    Request,
    Response,
    NextFunction,
    ErrorRequestHandler
} from "express"

type ReqHandler = (
    req: Request,
    res: Response
) => void

type Middleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => void

type Projects = {
    name: String,
    description: String,
    image: String,
    link: String,
    stack: String[]
}[]

type Socials = {
    name: String,
    image: String,
    userUrl: String
}[]

export {
    ReqHandler,
    Middleware,
    ErrorRequestHandler as ErrorMiddleware,

    Projects,
    Socials
}