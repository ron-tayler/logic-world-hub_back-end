import passwordHash from "password-hash";
import { inject } from "inversify";
import { PrismaClient } from "@prisma/generated/lwh";
import { v4 as uuid_v4 } from "uuid";
import useragent from "useragent";
import Crypto from "crypto";
import * as crypto from "crypto";
import { fluentProvide } from "inversify-binding-decorators";

@fluentProvide("Model/User/Auth").inSingletonScope().done()
export default class Model_User_Auth {
    @inject("Prisma") private _prisma!: PrismaClient;

    private genErr(err: string) {
        return Promise.reject(new Error(err));
    }

    verifyPassword(email: string, password: string): Promise<number> {
        return this._prisma.user_Auth
            .findUnique({
                where: { email },
                select: {
                    userId: true,
                    password: true,
                },
            })
            .then(auth_info => auth_info ?? this.genErr("user not found"))
            .then(auth_info =>
                passwordHash.verify(password, auth_info.password)
                    ? auth_info.userId
                    : this.genErr("password is bad")
            );
    }

    createSession(
        user_id: number,
        ipv4: string,
        user_agent: string,
        fingerprint_id: string,
        uuid: string = ""
    ) {
        const session_uuid = uuid_v4();

        const agent_info = useragent.parse(user_agent);

        return this._prisma.user_Session.create({
            data: {
                userId: user_id,
                ipv4: ipv4,
                is_active: true,
                userAgent: user_agent,
                fingerprint_id,
                uuid: session_uuid,
                name: "",
                osName: agent_info.os.family,
                deviceName: agent_info.device.family,
                userAgentName: agent_info.family,
            },
        });
    }

    disableTokensForSession(session_id: number) {
        return this._prisma.user_Token.updateMany({
            where: { sessionId: session_id, is_enable: true },
            data: {
                is_enable: false,
            },
        });
    }

    createTokens(session_id: number, is_super_access: boolean) {
        const access_token = Crypto.randomBytes(32).toString("hex");
        const refresh_token = Crypto.randomBytes(32).toString("hex");

        const access_token_hash = Model_User_Auth.hashToken(access_token);
        const refresh_token_hash = Model_User_Auth.hashToken(refresh_token);

        return this.disableTokensForSession(session_id)
            .then(_ =>
                this._prisma.user_Token.create({
                    data: {
                        access_token: access_token_hash,
                        refresh_token: refresh_token_hash,
                        is_enable: true,
                        sessionId: session_id,
                        is_super_access: is_super_access,
                    },
                })
            )
            .then(tokens_info => ({
                createDate: tokens_info.createDate,
                access_token,
                refresh_token,
                is_super_access: tokens_info.is_super_access,
            }));
    }

    createTokensByRefresh(refresh_token: string) {
        const refresh_token_hash = Model_User_Auth.hashToken(refresh_token);

        this._prisma.user_Token.update({
            where: {
                refresh_token: refresh_token_hash,
            },
            data: {
                is_enable: false,
            },
        });

        return this._prisma.user_Token
            .findUnique({
                where: {
                    refresh_token: refresh_token_hash,
                },
                include: {
                    Session: true,
                },
            })
            .then(tokens_info =>
                tokens_info &&
                tokens_info.is_enable &&
                tokens_info.Session.is_active
                    ? tokens_info
                    : this.genErr("token not found")
            )
            .then(tokens_info =>
                this.createTokens(tokens_info.sessionId, false)
            );
    }

    createSuperAccessTokens(access_token: string, password: string) {
        const access_token_hash = Model_User_Auth.hashToken(access_token);

        return this._prisma.user_Token
            .findUnique({
                where: {
                    access_token: access_token_hash,
                },
                select: {
                    sessionId: true,
                    is_enable: true,
                    Session: {
                        select: {
                            is_active: true,
                            User: {
                                select: {
                                    is_active: true,
                                    UserAuth: {
                                        select: {
                                            is_active: true,
                                            password: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            })
            .then(tokens_info =>
                tokens_info &&
                tokens_info.is_enable &&
                tokens_info.Session.is_active &&
                tokens_info.Session.User.is_active &&
                tokens_info.Session.User.UserAuth?.is_active
                    ? tokens_info
                    : this.genErr("token not found")
            )
            .then(tokens_info =>
                passwordHash.verify(
                    password,
                    tokens_info.Session.User.UserAuth?.password ?? ""
                )
                    ? this.createTokens(tokens_info.sessionId, true)
                    : this.genErr("password is bad")
            );
    }

    static hashToken(token: string) {
        return crypto.createHash("sha1").update(token).digest("hex");
    }

    logout(session_uuid: string) {
        return this._prisma.user_Session
            .update({
                where: {
                    uuid: session_uuid,
                },
                data: {
                    is_active: false,
                },
            })
            .then(session => {
                this.disableTokensForSession(session.id);
            });
    }

    getSessions(user_id: number) {
        return this._prisma.user_Session.findMany({
            where: {
                userId: user_id,
                is_active: true,
            },
        });
    }
}
