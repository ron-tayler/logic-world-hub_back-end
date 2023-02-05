import {BaseMiddleware} from "inversify-express-utils";
import {Request, Response, NextFunction} from "express"
import {RequestError} from "@/Errors/RequestError";
import {provide} from "inversify-binding-decorators";

@provide("Middleware/Check/AuthAccess")
export class MiddlewareCheckAuthAccess extends BaseMiddleware {
    handler(req: Request, res: Response, next: NextFunction) {
        this.httpContext.user.isAuthenticated()
            .then(status=>{
                if(status) next()
                else throw new RequestError(401,6,"Required auth")
            }).catch(err=>next(err))
    }
}