import { NextFunction, Request, Response} from 'express'

export default function Cors(req: Request, res: Response, next: NextFunction) {
    res.setHeader("Content-Type","application/json;charset=UTF-8")
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Methods","GET,POST")
    res.setHeader("Access-Control-Allow-Headers","Content-Type")
    next()
}