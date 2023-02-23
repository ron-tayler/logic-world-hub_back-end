import {
    controller,
    httpGet,
    BaseHttpController,
    httpPost,
    requestBody,
} from "inversify-express-utils";
import { inject } from "inversify";
import * as IO from "io-ts";
import { Transporter } from "nodemailer";
import { RequestError } from "@/Errors/RequestError";

@controller("/test")
export class ControllerTest extends BaseHttpController {
    @inject("Email") private _email!: Transporter;

    @httpGet("/info")
    public getInfo() {
        let token = this.httpContext.request.headers["x-auth-token"];
        let user = this.httpContext.user;
        return this.json({ user });
    }

    @httpGet("/info2", "Middleware/Check/Auth")
    public getInfo2() {
        let user = this.httpContext.user;
        return this.json({ user });
    }

    @httpPost("/send-email")
    public sendEmail(@requestBody() body_raw: unknown) {
        const data = IO.type({
            html: IO.string,
        }).decode(body_raw);
        if (data._tag == "Left") throw new Error("Error html(left)");
        if (data.right.html.length < 1) throw new Error("Error html(length)");

        this._email.sendMail({
            from: "logic-world-hub@room-seven.ru",
            to: "max.urs@yandex.ru",
            subject: "Подтверждение регистрации",
            html: data.right.html,
        });

        return this.ok();
    }

    @httpGet("/http-status")
    public testHttpStatus() {
        throw new RequestError(401, 0, "Проверка");
    }
}
