import {Container} from "inversify";
import {PrismaClient} from "@/../prisma/generated/lwh";
import "@/App/Controllers/Mods";
import {ModelMod} from "@/App/Model/Mods/Mod";

export const container = new Container()
export const prisma = new PrismaClient()
container.bind("Prisma").toConstantValue(prisma)
container.bind("Model/Mods/Mod").to(ModelMod)