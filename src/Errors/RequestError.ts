import {IResponseError} from "@/Errors/IResponseError";

export class RequestError implements IResponseError{
    constructor(
        readonly status: number,
        readonly code: number,
        readonly message: string
    ){}
}
