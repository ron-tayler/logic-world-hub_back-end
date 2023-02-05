import {
    controller,
    httpGet,
    httpPost,
    queryParam,
    requestParam,
    requestBody,
    request,
    httpPut,
    BaseHttpController,
    interfaces
} from "inversify-express-utils";

type auth = interfaces.AuthProvider

@controller("/auth")
export class ControllerAuth extends BaseHttpController {

    @httpGet("/base")
    authByLogin(){
        const login = this.httpContext.request.headers["x-auth-user"];
        const password = this.httpContext.request.headers["x-auth-key"];
        // refresh - Позволяет получить auth token, одноразовый, можно переполучить только через пароль
        // auth - Основной токен авторизации, действует 30 минут, можно получить через refresh или пароль
        // access - Этот токен нужен для всех важных запросов, отправляется вместе с токеном авторизации, он действителен только 30 минут и его можно получить только через пароль
        // Токены также привязываются к сессиям с разных устройств и браузеров
        // Думаю, либо передавать данные об сессии при получении токена, либо думаю их стоит передавать при каждом запросе и перепроверять, пытаясь изолировать воровство токенов
    }

    @httpGet("/refresh")
    authByRefresh(){
        const refresh_token = this.httpContext.request.headers["x-refresh-token"];
        // Получение auth токена через refresh
    }

    @httpGet("/access")
    authForAccess(){
        const auth_token = this.httpContext.request.headers["x-auth-token"];
        const password = this.httpContext.request.headers["x-auth-key"];
        // Получение access токена через auth Токен и пароль
        // Если нет Auth токена то,
        //  либо его сначала запросить через Refresh,
        //  либо пройти полную авторизацию и там получить и access токен сразу
    }
}