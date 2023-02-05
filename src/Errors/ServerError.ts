import {IResponseError} from "@/Errors/IResponseError";

export class ServerError implements IResponseError{
    constructor(
        readonly status: number,
        readonly code: number,
        readonly message: string,
        readonly previous: Error
    ){}
}
