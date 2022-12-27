import {NextFunction, Request, Response} from "express";


export default function ErrorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
    console.warn(error.message)
    if(error) {
        res.status(500)
        res.send("Server error")
    } else {
        next()
    }
}