import { interfaces } from "inversify-express-utils";
import { Request, Response, NextFunction } from "express";
import { IUser, Principal } from "@/App/Principal";
import { inject, injectable } from "inversify";
import { PrismaClient } from "@prisma/generated/lwh";
import Model_User_Auth from "@/App/Models/User/Auth";

@injectable()
export class AuthProvider implements interfaces.AuthProvider {
    @inject("Prisma") private readonly _prisma!: PrismaClient;

    async getUser(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Principal<IUser>> {
        const access_token = req.header("x-access-token");
        const session_uuid = req.header("x-session-uuid");

        if (access_token && access_token.length == 64) {
            // Приоритетная авторизация по access_token
            const token_info = await this.getInfoByToken(access_token);
            if (
                token_info &&
                token_info.is_enable &&
                token_info.Session.is_active &&
                token_info.Session.User.is_active &&
                Date.now() - token_info.createDate.getTime() <
                    1800000 /*30m*/ &&
                token_info.Session.uuid == session_uuid
            )
                return Promise.resolve(
                    new Principal({
                        id: token_info.Session.User.id,
                        roles: [""],
                        access_auth: token_info.is_super_access,
                    })
                );
        }

        // Гость
        return Promise.resolve(
            new Principal({
                id: 0,
                roles: [""],
                access_auth: false,
            })
        );
    }

    private getInfoByToken(token: string) {
        return this._prisma.user_Token.findUnique({
            where: { access_token: Model_User_Auth.hashToken(token) },
            select: {
                is_enable: true,
                createDate: true,
                is_super_access: true,
                Session: {
                    select: {
                        is_active: true,
                        uuid: true,
                        User: {
                            select: {
                                id: true,
                                is_active: true,
                            },
                        },
                    },
                },
            },
        });
    }
}
