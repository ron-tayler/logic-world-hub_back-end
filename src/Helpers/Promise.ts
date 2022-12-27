export type SyncPromise = {
    resolve: ()=>void
    reject: ()=>void
    promise: Promise<void>
}

export function createSyncPromise() {
    return new Promise<SyncPromise>(resolve_1 => {
        let promise: Promise<void>|undefined = undefined
        let resolve: (()=>void)|undefined = undefined
        let reject: (()=>void)|undefined = undefined
        function save(){
            if(promise&&resolve&&reject){
                resolve_1({
                    resolve,
                    reject,
                    promise
                })
            }
        }
        promise = new Promise<void>((resolve_2, reject_2) => {
            resolve = resolve_2
            reject = reject_2
            save()
        })
        save()
    })
}
