import { inject } from "inversify";
import { fluentProvide } from "inversify-binding-decorators";
import { PrismaClient } from "@prisma/generated/lwh";

@fluentProvide("Model/User").inSingletonScope().done()
export class ModelUser {
    @inject("Prisma") private _prisma!: PrismaClient;

    createUser(nick = "") {
        return this._prisma.user.create({
            data: {
                is_active: true,
                nick: nick,
                avatar: "",
            },
        });
    }

    createEmailAuth(user_id: number, email: string, password_hash: string) {
        return this._prisma.user_Auth.create({
            data: {
                email,
                userId: user_id,
                password: password_hash,
                is_active: false,
            },
        });
    }

    getAuthByEmail(email: string) {
        return this._prisma.user_Auth.findUnique({
            where: { email },
        });
    }

    getUserInfo(user_id: number) {
        return this._prisma.user.findUnique({
            where: { id: user_id },
        });
    }
}
