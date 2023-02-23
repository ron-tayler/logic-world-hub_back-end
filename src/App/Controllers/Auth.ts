import {
    controller,
    httpGet,
    BaseHttpController,
    httpPost,
    httpPut,
} from "inversify-express-utils";
import { inject } from "inversify";
import * as IO from "io-ts";
import passwordHash from "password-hash";
import { RequestError } from "@/Errors/RequestError";
import { ModelUser } from "@/App/Models/User";
import Model_User_Auth from "@/App/Models/User/Auth";
import EmailSender from "@/Services/EmailSender";

@controller("/auth")
export class ControllerAuth extends BaseHttpController {
    @inject("Model/User") private model_user!: ModelUser;
    @inject("Model/User/Auth") private model_user_auth!: Model_User_Auth;
    @inject("Email") private service_email!: EmailSender;

    @httpGet("/password")
    async authByLogin() {
        const email = this.httpContext.request.headers["x-auth-user"];
        const password = this.httpContext.request.headers["x-auth-key"];
        let fingerprint_id =
            this.httpContext.request.headers["x-fingerprint-id"];
        const ipv4 = this.httpContext.request.ip;
        const user_agent = this.httpContext.request.headers["user-agent"];
        let session_uuid = this.httpContext.request.headers["x-session-uuid"];
        if (typeof session_uuid != "string") session_uuid = undefined;

        if (!user_agent) throw new RequestError(400, 7, "user-agent not found");
        if (!email || typeof email != "string")
            throw new RequestError(400, 7, "email not found");
        if (!password || typeof password != "string")
            throw new RequestError(400, 7, "password not found");
        if (email.length > 96)
            throw new RequestError(400, 7, "email is wary long");
        if (!email.includes("@"))
            throw new RequestError(400, 7, "@ not found in email");

        if (!fingerprint_id || typeof fingerprint_id != "string")
            fingerprint_id = "";

        return this.model_user_auth
            .verifyPassword(email, password)
            .then(user_id => {
                if (session_uuid)
                    return this.model_user_auth
                        .logout(session_uuid as string)
                        .then(
                            () => user_id,
                            () => user_id
                        );
                else return user_id;
            })
            .then(user_id =>
                this.model_user_auth
                    .createSession(
                        user_id,
                        ipv4,
                        user_agent,
                        fingerprint_id as string
                    )
                    .then(session => ({
                        session_id: session.id,
                        user_id,
                        session_uuid: session.uuid,
                    }))
            )
            .then(({ session_id, user_id, session_uuid }) =>
                this.model_user_auth
                    .createTokens(session_id, true)
                    .then(
                        ({
                            access_token,
                            refresh_token,
                            createDate,
                            is_super_access,
                        }) => ({
                            access_token,
                            refresh_token,
                            session_uuid,
                            createDate,
                            user_id,
                            is_super_access,
                        })
                    )
            );
    }

    @httpPost("/password")
    async signUpByEmailAndPassword() {
        const ipv4 = this.httpContext.request.ip;
        const user_agent = this.httpContext.request.headers["user-agent"];
        const raw_body = this.httpContext.request.body;
        const decode = IO.type({
            email: IO.string,
            password: IO.string,
            nick: IO.string,
            fid: IO.string,
        }).decode(raw_body);

        if (!user_agent) throw new RequestError(400, 7, "user-agent not found");

        if (decode._tag == "Left")
            throw new RequestError(400, 7, "params is bad");

        const nick = decode.right.nick;
        const email = decode.right.email;
        const password = decode.right.password;
        const fingerprint_id = decode.right.fid;

        if (email.length > 96)
            throw new RequestError(400, 7, "email is wary long");
        if (!email.includes("@"))
            throw new RequestError(400, 7, "@ not found in email");

        if (password.length < 8 || password.length > 32)
            throw new RequestError(400, 7, "limit password length");

        const check_password = password.match(
            /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[.,!@#$%^&*\-=+_:;"'<>()\[\]{}])[a-zA-Z0-9.,!@#$%^&*\-=+_:;"'<>()\[\]{}]{8,32}$/
        );
        if (!check_password) throw new RequestError(400, 7, "password is bad");

        if (await this.model_user.getAuthByEmail(email))
            throw new RequestError(400, 7, "email is used");

        const password_hash = passwordHash.generate(password);

        return this.model_user
            .createUser(nick)
            .then(user =>
                this.model_user
                    .createEmailAuth(user.id, email, password_hash)
                    .then(_ => user.id)
            )
            .then(user_id =>
                this.service_email
                    .sendTemplate(email, "confirm_email", {
                        confirm_url:
                            "https://logic-world-hub.net/confirm-email?token=1234567890qwertyuiop",
                    })
                    .then(
                        _ => user_id,
                        _ => user_id
                    )
            )
            .then(user_id =>
                this.model_user_auth.createSession(
                    user_id,
                    ipv4,
                    user_agent,
                    fingerprint_id as string
                )
            )
            .then(session =>
                this.model_user_auth
                    .createTokens(session.id, true)
                    .then(
                        ({
                            access_token,
                            refresh_token,
                            createDate,
                            is_super_access,
                        }) => ({
                            access_token,
                            refresh_token,
                            session_uuid: session.uuid,
                            createDate,
                            user_id: session.userId,
                            is_super_access,
                        })
                    )
            );
    }

    @httpGet("/refresh")
    authByRefresh() {
        const refresh_token =
            this.httpContext.request.headers["x-refresh-token"];
        // Получение auth токена через refresh

        if (
            !refresh_token ||
            typeof refresh_token != "string" ||
            refresh_token.length != 64
        )
            throw new RequestError(400, 7, "refresh token is bad");

        return this.model_user_auth.createTokensByRefresh(refresh_token);
    }

    @httpGet("/access", "Middleware/Check/Auth")
    authForAccess() {
        const auth_token = this.httpContext.request.headers["x-access-token"];
        const password = this.httpContext.request.headers["x-auth-key"];

        if (
            !auth_token ||
            typeof auth_token != "string" ||
            auth_token.length != 64
        )
            throw new RequestError(400, 7, "refresh token is bad");
        if (!password || typeof password != "string")
            throw new RequestError(400, 7, "password not found");

        return this.model_user_auth.createSuperAccessTokens(
            auth_token,
            password
        );
    }

    @httpGet("/check")
    checkAuth() {
        return this.httpContext.user.isAuthenticated();
    }

    @httpGet("/logout", "Middleware/Check/Auth")
    logout() {
        const session_uuid = this.httpContext.request.headers["x-session-uuid"];
        if (typeof session_uuid != "string") throw new Error("session is bad");
        return this.model_user_auth.logout(session_uuid).then(() => this.ok());
    }

    @httpGet("/sessions", "Middleware/Check/Auth")
    getSessions() {
        const user_id = this.httpContext.user.details?.id ?? 0;

        return this.model_user_auth.getSessions(user_id).then(sessions =>
            sessions.map(session => ({
                uuid: session.uuid,
                ip: session.ipv4,
                create_date: session.createDate,
                device: session.deviceName,
                os: session.osName,
                name: session.name,
                userAgent: session.userAgentName,
                fid: session.fingerprint_id,
            }))
        );
    }

    @httpPut("/session-logout", "Middleware/Check/Auth")
    sessionLogout() {
        const raw_body = this.httpContext.request.body;
        const decode = IO.type({
            uuid: IO.string,
        }).decode(raw_body);

        if (decode._tag == "Left")
            throw new RequestError(400, 7, "params is bad");

        const session_uuid = decode.right.uuid;

        return this.model_user_auth.logout(session_uuid).then(() => this.ok());
    }
}
