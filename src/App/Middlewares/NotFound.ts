import {NextFunction, Request, Response} from "express";
import {RequestError} from "@/Errors/RequestError";

export default function NotFoundMiddleware(req: Request, res: Response, next: NextFunction){
    throw new RequestError(404,6,"Маршрут не найден")
}