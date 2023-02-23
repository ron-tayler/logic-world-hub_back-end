import {interfaces} from "inversify-express-utils"

export interface IUser {
    id: number,
    roles: string[],
    access_auth: boolean
}

export interface IGuest {}

export class Principal<T extends IUser|null> implements interfaces.Principal{

    constructor(readonly details: T){}

    isAuthenticated(): Promise<boolean> {
        return Promise.resolve((this.details?.id ?? 0) > 0);
    }

    isInRole(role: string): Promise<boolean> {
        return Promise.resolve(!!this.details?.id && this.details.roles.includes(role));
    }

    isResourceOwner(resourceId: any): Promise<boolean> {
        return Promise.resolve(false);
    }

}