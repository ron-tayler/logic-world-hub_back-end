import { NextFunction, Request, Response } from "express";

export default function CorsMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
}
