import {injectable, inject} from "inversify"
import {PrismaClient} from "@/../prisma/generated/lwh";
import {ModIssueTypes} from "@/App/Schemes/Types";

@injectable()
export class ModelMod {
    @inject("Prisma") private _prisma!: PrismaClient

    getMods(skip: number = 0, take: number = 10){
        return this._prisma.mod.findMany({
            where:{
                is_active: true
            }, skip, take
        })
    }
    getModsOrderByDownloads(skip: number = 0, take: number = 10){
        return this._prisma.mod.findMany({
            where:{
                is_active: true
            }, skip, take,
            orderBy:{
                Downloads: {
                    _count: "desc"
                }
            }
        })
    }
    getModsOrderByNews(skip: number = 0, take: number = 10){
        return this._prisma.mod.findMany({
            where:{
                is_active: true
            }, skip, take,
            orderBy:{
                createDate: "desc"
            }
        })
    }
    getModsOrderByUpdated(skip: number = 0, take: number = 10){
        return this._prisma.modVersion.groupBy({
            by: ["mod_id"],
            _max:{
                releaseDate: true
            },
            orderBy:{
                _max:{
                    releaseDate: "desc"
                }
            }, skip, take
        }).then(versions=>this._prisma.mod.findMany({
            where:{
                id: {
                    in: versions.map(v=>v.mod_id)
                }
            }
        }))
    }

    /**
     * @deprecated Ещё не реализовано
     * @param skip
     * @param take
     */
    getModsOrderByTrends(skip: number = 0, take: number = 10){
        return this._prisma.mod.findMany({
            where:{
                is_active: true,
                Collection:{
                    is_active: true
                }
            }, skip, take
        })
    }


    getMod(mod_id: number){
        return this._prisma.mod
            .findUnique({where:{id: mod_id}})
    }
    getStats(mod_id: number){
        return this._prisma.mod.findUnique({
            where:{id: mod_id},
            select:{
                _count:{
                    select:{
                        Downloads: true,
                        Favorits: true,
                        Subscribers: true
                    }
                }
            }
        }).then(mod=>{
            if(!mod) return {
                downloads: 0,
                favorites: 0,
                subscribers: 0
            }
            return {
                downloads: mod._count.Downloads,
                favorites: mod._count.Favorits,
                subscribers: mod._count.Subscribers
            }
        })
    }
    getTags(mod_id: number){
        return this._prisma.mod.findUnique({where:{id:mod_id}}).Tags()
    }
    getImages(mod_id: number){
        return this._prisma.mod.findUnique({where:{id:mod_id}}).Images()
    }
    getVersions(mod_id: number){
        return this._prisma.mod.findUnique({where:{id: mod_id}}).Versions()
    }
    getAuthors(mod_id: number){
        return this._prisma.mod
            .findUnique({where:{id: mod_id}})
            .Authors({include:{User: true}})
    }
    getReadme(mod_id: number){
        return this._prisma.mod
            .findUnique({
                where:{id: mod_id},
                select:{
                    readme: true,
                    readme_type: true
                }
            })
    }
    getChangeLog(mod_id: number){
        return this._prisma.mod
            .findUnique({
                where:{id: mod_id},
                select:{
                    change_list: true,
                    change_list_type: true
                }
            })
    }

    getIssues(mod_id: number){
        return this._prisma.mod
            .findUnique({where:{id: mod_id}})
            .Issues({
                select:{
                    id: true,
                    name: true,
                    type: true,
                    createDate: true,
                    _count:{
                        select: {
                            ModIssuePost: true
                        }
                    },
                    Author:{
                        select:{
                            id: true,
                            nick: true
                        }
                    },
                    ModIssuePost:{
                        orderBy:{
                            id: "desc"
                        },
                        select:{
                            createDate: true,
                            Author: {
                                select:{
                                    id: true,
                                    nick: true
                                }
                            }
                        },
                        take: 1
                    }
                }
            })
    }
    getIssue(mod_id: number, issue_id: number){
        return this._prisma.modIssue.findUnique({
            where:{id: issue_id},
            select:{
                id: true,
                mod_id: true,
                name: true,
                type: true,
                createDate: true,
                Author:{
                    select:{
                        id: true,
                        nick: true
                    }
                },
                ModIssuePost:{
                    select:{
                        id: true,
                        createDate: true,
                        text: true,
                        Author: {
                            select:{
                                id: true,
                                nick: true,
                                avatar: true
                            }
                        }
                    }
                }
            }
        })
    }
    createIssue(mod_id: number, author_id: number, name: string, type: ModIssueTypes) {
        return this._prisma.modIssue.create({
            data: {
                createDate: new Date(),
                name,
                type,
                Mod: {
                    connect: {
                        id: mod_id
                    }
                },
                Author: {
                    connect: {
                        id: author_id
                    }
                }
            }
        })
    }
    createIssuePost(issue_id: number, author_id: number, text: string) {
        return this._prisma.modIssuePost.create({
            data: {
                createDate: new Date(),
                text,
                Author: {
                    connect: {
                        id: author_id
                    }
                },
                Issue: {
                    connect: {
                        id: issue_id
                    }
                }
            }
        })
    }


    isActive(mod_id: number){
        return this._prisma.mod.findUnique({
            where: {id: mod_id},
            select:{
                is_active: true,
            }
        }).then(mod=>!!mod?.is_active)
    }
    createMod(){}
    activateMod(){}
    deactivateMod(){}
    editMod(){}
}