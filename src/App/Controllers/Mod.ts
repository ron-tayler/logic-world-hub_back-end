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

@controller("/mod")
export class ControllerMod extends BaseHttpController {

    // GET :id
    // GET readme
    // GET changelog
    // GET metrics

    // PUT new mod
    // POST edit mod(name,description,repository,docs,...)
    // POST edit readme
    // POST edit change-log
}