import {
    controller,
    httpGet,
    BaseHttpController,
} from "inversify-express-utils";
import { inject } from "inversify";
import { ModelUser } from "@/App/Models/User";

@controller("/user")
export class ControllerUser extends BaseHttpController {
    @inject("Model/User") private model_user!: ModelUser;

    @httpGet("/get-info", "Middleware/Check/Auth")
    getInfo() {
        const user_id = this.httpContext.user.details?.id ?? 0;
        return this.model_user
            .getUserInfo(user_id)
            .then(user =>
                user ? user : Promise.reject(new Error("user not found"))
            )
            .then(user => ({
                avatar: user.avatar,
                nick: user.nick,
                id: user.id,
            }));
    }

    @httpGet("/:id")
    getUser() {
        return this.httpContext.request.params.id;
    }
}
