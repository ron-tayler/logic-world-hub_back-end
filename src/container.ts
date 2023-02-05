import {Container} from "inversify";
import {PrismaClient} from "@/../prisma/generated/lwh";
import {SelectelStorage} from "@/Services/SelectelStorage";
import { buildProviderModule } from "inversify-binding-decorators";
import nodemailer from "nodemailer"

// Middlewares
import "@/App/Middlewares/Check/Auth"
import "@/App/Middlewares/Check/AuthAccess"

// Контролеры
import "@/App/Controllers/Mods"
import "@/App/Controllers/Test"

// Модели
import "@/App/Models/Mods/Mod";

const sel_user = process.env["S3_USER"] ?? ""
const sel_pass = process.env["S3_PASSWORD"] ?? ""

const email_transport = nodemailer.createTransport({
    host: "server142.hosting.reg.ru",
    secure: true,
    auth:{
        user: "logic-world-hub@room-seven.ru",
        pass: "hY9bN8yM1h"
    }
})
export const container = new Container()
export const prisma = new PrismaClient()
export const selectel = new SelectelStorage(sel_user, sel_pass)

container.bind("Prisma").toConstantValue(prisma)
container.bind("Selectel").toConstantValue(selectel)
container.bind("Email").toConstantValue(email_transport)
container.load(buildProviderModule())

