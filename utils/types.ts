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

export {
    ReqHandler,
    Middleware,
    ErrorRequestHandler as ErrorMiddleware
}