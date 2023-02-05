import {inject} from "inversify";
import * as IO from "io-ts"
import {ModelMod} from "@/App/Models/Mods/Mod";
import {
    controller,
    httpGet,
    httpPost,
    queryParam,
    requestParam,
    requestBody,
    request,
    httpPut,
    BaseHttpController
} from "inversify-express-utils";
import {Author, Issue, IssueMinimal, IssuePost, ModMinimal, SchemaMod, Tag, Version} from "@/App/Schemes/Mod";
import {HelperObject} from "@/Helpers/Object";
import {IOCreateIssue} from "@/App/Schemes/Requests/CreateIssue";
import {ModIssueTypes} from "@/App/Schemes/Types";
import {ModIssueType} from "../../../prisma/generated/lwh";
import {Request, NextFunction} from "express"
import {SelectelStorage} from "@/Services/SelectelStorage";

// (a * t) + ((1 - a) * p)
// a = 1/кол-во активности за день
// t = Date.now()

@controller("/mods")
export class ControllerModsGetMods extends BaseHttpController {
    @inject("Model/Mods/Mod") private _model_mod!: ModelMod
    @inject("Selectel") private _selectel!: SelectelStorage

    @httpGet("/most-downloaded")
    async getMostDownloaded(@queryParam("page") page_raw: string|undefined){
        if(page_raw == undefined || page_raw.length==0) page_raw = "1"
        const page = Number(page_raw)
        if(isNaN(page) || page < 1) throw new Error("Error param 'page'")
        const mods = await this._model_mod.getModsOrderByDownloads((page-1)*10)
        return mods.map(mod => ModMinimal.encode(HelperObject(mod).filter({
            id: true,
            name: true,
            avatar: true,
            description: true
        })))
    }

    @httpGet("/news")
    async getNews(@queryParam("page") page_raw: string|undefined){
        if(page_raw == undefined || page_raw.length==0) page_raw = "1"
        const page = Number(page_raw)
        if(isNaN(page) || page < 1) throw new Error("Error param 'page'")
        const mods = await this._model_mod.getModsOrderByNews((page-1)*10)
        return mods.map(mod => ModMinimal.encode(HelperObject(mod).filter({
            id: true,
            name: true,
            avatar: true,
            description: true
        })))
    }

    @httpGet("/recently-updated")
    async getRecentlyUpdated(@queryParam("page") page_raw: string|undefined){
        if(page_raw == undefined || page_raw.length==0) page_raw = "1"
        const page = Number(page_raw)
        if(isNaN(page) || page < 1) throw new Error("Error param 'page'")
        const mods = await this._model_mod.getModsOrderByUpdated((page-1)*10)
        return mods.map(mod => ModMinimal.encode(HelperObject(mod).filter({
            id: true,
            name: true,
            avatar: true,
            description: true
        })))
    }

    @httpGet("/trends")
    async getTrends(){
        throw new Error("Не реализовано")
        const mods = await this._model_mod.getMods()
        return mods.map(mod => ModMinimal.encode(HelperObject(mod).filter({
            id: true,
            name: true,
            avatar: true,
            description: true
        })))
    }

    @httpGet("/mod/:id")
    async getMod(@requestParam("id") id: string){
        const mod_id = Number(id)
        if(isNaN(mod_id)) throw new Error("Error id")

        const mod = await this._model_mod.getMod(mod_id)
        if(!mod) throw new Error("NotFound")
        const stats = await this._model_mod.getStats(mod_id)

        return SchemaMod.encode({
            id: mod.id,
            name: mod.name,
            views: mod.views,
            repository: mod.repository,
            docs_url: mod.docs_url,
            createDate: mod.createDate,
            avatar: mod.avatar,
            description: mod.description,
            collection_id: mod.collection_id,
            downloads: stats.downloads,
            subscribers: stats.subscribers,
            favorites: stats.favorites
        })
    }

    @httpGet("/mod/:id/tags")
    async getModTags(@requestParam("id") id: string){
        const mod_id = Number(id)
        if(isNaN(mod_id)) throw new Error("Error id")
        if(!await this._model_mod.isActive(mod_id)) throw new Error("NotFound")

        const tags = await this._model_mod.getTags(mod_id)
        return tags.map(tag=>Tag.encode(tag))
    }

    @httpGet("/mod/:id/images")
    async getModImages(@requestParam("id") id: string){
        const mod_id = Number(id)
        if(isNaN(mod_id)) throw new Error("Error id")
        if(!await this._model_mod.isActive(mod_id)) throw new Error("NotFound")

        const images = await this._model_mod.getImages(mod_id)
        return images.map(img=>img.url)
    }

    @httpGet("/mod/:id/versions")
    async getModVersions(@requestParam("id") id: string){
        const mod_id = Number(id)
        if(isNaN(mod_id)) throw new Error("Error id")
        if(!await this._model_mod.isActive(mod_id)) throw new Error("NotFound")

        const versions = await this._model_mod.getVersions(mod_id)
        return versions.map(version=>Version.encode({
            id: version.id,
            version: version.version,
            game_version: version.game_version,
            releaseDate: version.releaseDate
        }))
    }

    @httpGet("/mod/:id/authors")
    async getModAuthors(@requestParam("id") id: string){
        const mod_id = Number(id)
        if(isNaN(mod_id)) throw new Error("Error id")
        if(!await this._model_mod.isActive(mod_id)) throw new Error("NotFound")

        const authors = await this._model_mod.getAuthors(mod_id)
        return authors.map(author=>Author.encode({
            id: author.User.id,
            nick: author.User.nick,
            type: author.type,
            avatar: author.User.avatar
        }))
    }

    @httpGet("/mod/:id/readme")
    async getModReadme(@requestParam("id") id: string){
        const mod_id = Number(id)
        if(isNaN(mod_id)) throw new Error("Error id")
        if(!await this._model_mod.isActive(mod_id)) throw new Error("NotFound")

        const readme_info = await this._model_mod.getReadme(mod_id)
        if(!readme_info) return ""
        if(readme_info.readme_type == 1) return readme_info.readme // Выдаём из БД
        if(readme_info.readme_type == 2) return "" // Выдаём с GitHub при этом если с GitHub не получилось то выдаём из базы. Возможно буду кешировать в базу файл с GitHub
        return ""
    }

    @httpGet("/mod/:id/change-log")
    async getModChangeLog(@requestParam("id") id: string){
        const mod_id = Number(id)
        if(isNaN(mod_id)) throw new Error("Error id")
        if(!await this._model_mod.isActive(mod_id)) throw new Error("NotFound")

        const change_log_info = await this._model_mod.getChangeLog(mod_id)
        if(!change_log_info) return ""
        if(change_log_info.change_list_type == 1) return change_log_info.change_list // Выдаём из БД
        if(change_log_info.change_list_type == 2) return "" // Выдаём с GitHub при этом если с GitHub не получилось то выдаём из базы. Возможно буду кешировать в базу файл с GitHub
        return ""

    }

    @httpGet("/mod/:id/issues")
    async getModIssues(@requestParam("id") id: string){
        const mod_id = Number(id)
        if(isNaN(mod_id)) throw new Error("Error id")
        if(!await this._model_mod.isActive(mod_id)) throw new Error("NotFound")

        const issues = await this._model_mod.getIssues(mod_id)
        return issues.map(issue=>Issue.encode({
            id: issue.id,
            name: issue.name,
            type: ModIssueTypes[issue.type],
            posts: issue._count.ModIssuePost,
            createDate: issue.createDate,
            author: {
                id: issue.Author.id,
                nick: issue.Author.nick
            },
            last_post_author: {
                id: issue.ModIssuePost[0]?.Author.id ?? issue.Author.id,
                nick: issue.ModIssuePost[0]?.Author.nick ?? issue.Author.nick,
            },
            last_post_createDate: issue.ModIssuePost[0]?.createDate ?? issue.createDate
        }))
    }

    @httpGet("/mod/:mod_id/issue/:issue_id")
    async getModIssue(@requestParam("mod_id") mod_raw_id: string, @requestParam("issue_id") issue_raw_id: string){
        const mod_id = Number(mod_raw_id)
        if(isNaN(mod_id)) throw new Error("Error id")
        if(!await this._model_mod.isActive(mod_id)) throw new Error("NotFound")
        const issue_id = Number(issue_raw_id)
        if(isNaN(issue_id)) throw new Error("Error id")

        const issue = await this._model_mod.getIssue(mod_id,issue_id)
        if(!issue) throw new Error("NotFound")
        if(issue.mod_id != mod_id) throw new Error("NotFound")

        return {
            issue: IssueMinimal.encode({
                id: issue.id,
                name: issue.name,
                type: ModIssueTypes[issue.type],
                author: {
                    id: issue.Author.id,
                    nick: issue.Author.nick
                },
                createDate: issue.createDate
            }),
            posts: issue.ModIssuePost.map(post=>IssuePost.encode({
                    id: post.id,
                    author: {
                        id: post.Author.id,
                        nick: post.Author.nick,
                        avatar: post.Author.avatar
                    },
                    text: post.text,
                    createDate: post.createDate
                }))
        }
    }

    @httpGet("/mod/:id/metrics")
    async getModMetrics(@requestParam("id") id: string){
        const mod_id = Number(id)
        if(isNaN(mod_id)) throw new Error("Error id")
        if(!await this._model_mod.isActive(mod_id)) throw new Error("NotFound")

        return {}
    }

    @httpPost("/mod/:mod_id/issue/create")
    async createModIssue(
        @requestParam("mod_id") id: string,
        @requestBody() body_raw: unknown
    ){
        const author_id = 1
        const mod_id = Number(id)
        if(isNaN(mod_id)) throw new Error("Error issue_id")
        const result = IOCreateIssue.decode(body_raw)
        if(result._tag == "Left")
            throw new Error("Error in json")
        const issue_data = result.right
        if(issue_data.name.length < 1) throw new Error("Error name")
        if(issue_data.text.length < 1) throw new Error("Error text")
        const issue_type = ModIssueTypes[issue_data.type] as ModIssueType|undefined
        if(issue_type == undefined) throw new Error("Error type")

        const issue = await this._model_mod.createIssue(mod_id,author_id,issue_data.name,issue_type)
        await this._model_mod.createIssuePost(issue.id,author_id,issue_data.text)

        return "OK"
    }

    @httpPost("/mod/issue/:issue_id/post/send")
    async sendModIssuePost(
        @requestParam("issue_id") id: string,
        @requestBody() body_raw: unknown
    ){
        const author_id = 1
        const issue_id = Number(id)
        if(isNaN(issue_id)) throw new Error("Error issue_id")
        const data = IO.type({
            text: IO.string
        }).decode(body_raw)
        if(data._tag == "Left") throw new Error("Error text")
        if(data.right.text.length<1) throw new Error("Error text")

        await this._model_mod.createIssuePost(issue_id,author_id,data.right.text)

        return "OK"
    }

    @httpPut("/mod/:id/image")
    async uploadImage(@request() req: Request, @requestParam("id") id: string){
        await this._selectel.uploadFile(`logic-world-hub/mods/mod_${id}/test/img_1.jpg`,req)
        return "OK"
    }
}
