import {Container} from "inversify";
import {PrismaClient} from "@/../prisma/generated/lwh";
import "@/App/Controllers/Mods";
import {ModelMod} from "@/App/Model/Mods/Mod";
import {SelectelStorage} from "@/Services/SelectelStorage";

const sel_user = process.env["S3_USER"] ?? ""
const sel_pass = process.env["S3_PASSWORD"] ?? ""

export const container = new Container()
export const prisma = new PrismaClient()
export const selectel = new SelectelStorage(sel_user, sel_pass)
container.bind("Prisma").toConstantValue(prisma)
container.bind("Selectel").toConstantValue(selectel)
container.bind("Model/Mods/Mod").to(ModelMod)