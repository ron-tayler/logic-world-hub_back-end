import { Container } from "inversify";
import { PrismaClient } from "@prisma/generated/lwh";
import { SelectelStorage } from "@/Services/SelectelStorage";
import { buildProviderModule } from "inversify-binding-decorators";
import passwordHash from "password-hash";
import EmailSender from "@/Services/EmailSender";

// Middlewares
import "@/App/Middlewares/Check/Auth";
import "@/App/Middlewares/Check/AuthAccess";

// Контролеры
import "@/App/Controllers/Mods";
import "@/App/Controllers/Test";
import "@/App/Controllers/Auth";
import "@/App/Controllers/User";

// Модели
import "@/App/Models/Mods/Mod";
import "@/App/Models/User";
import "@/App/Models/User/Auth";

const sel_user = process.env["S3_USER"] ?? "";
const sel_pass = process.env["S3_PASSWORD"] ?? "";

export const container = new Container();
export const prisma = new PrismaClient();
export const selectel = new SelectelStorage(sel_user, sel_pass);
export const email = new EmailSender(
    "server142.hosting.reg.ru",
    "logic-world-hub@room-seven.ru",
    "hY9bN8yM1h",
    "logic-world-hub@room-seven.ru"
);

container.bind("Prisma").toConstantValue(prisma);
container.bind("Selectel").toConstantValue(selectel);
container.bind("Email").toConstantValue(email);
container.bind("PasswordHash").toConstantValue(passwordHash);
container.load(buildProviderModule());
