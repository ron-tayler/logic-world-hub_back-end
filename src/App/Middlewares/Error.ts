import {NextFunction, Request, Response} from "express";
import {RequestError} from "@/Errors/RequestError";
import {ServerError} from "@/Errors/ServerError";

export default function ErrorMiddleware(err: any, req: Request, res: Response, next: NextFunction){
    if(err instanceof RequestError){
        res.status(err.status).send(JSON.stringify({
            code: err.code,
            message: err.message
        }))
    }else if(err instanceof ServerError){
        res.status(500).send(JSON.stringify({
            code: err.code,
            message: err.message
        }))
        // Отправка уведомления
        console.log(err)
    }else{
        res.status(500).send(JSON.stringify({
            code: 5,
            message: "Server error"
        }))
        // Отправка уведомления
        console.log(err)
    }
}
