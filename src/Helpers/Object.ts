type ObjectForHelper = { [k:string|number|symbol]: any }
type ObjAndIHelperObject<T extends ObjectForHelper> = T & IHelperObject<T>

type FilterPropertyPredicate<T> = { [P in keyof T]?: true }
type FilterPropertyReturn<A,B> = Pick<A,Extract<keyof A, keyof B>>
export function filterProperty
<T extends ObjectForHelper, B extends FilterPropertyPredicate<T>>
(obj: T, predicate: B): FilterPropertyReturn<T,B> {
    let ent = Object.entries(predicate)
    let new_ent = ent.filter(([,v])=>v).map(([k])=>[k,obj[k]])
    return Object.fromEntries(new_ent);
}

type MapPropertyPredicate<T>
    = { [P in keyof T]?: (p:T[P]) => unknown }
type MapPropertyReturn<T extends ObjectForHelper,B extends MapPropertyPredicate<T>>
    = { [P in keyof T]: B[P] extends (p:T[P]) => infer R ? R : T[P] }
export function mapProperty
<T extends ObjectForHelper, B extends MapPropertyPredicate<T>>
(obj: T, predicate: B): MapPropertyReturn<T,B>{
    let keys = Object.keys(obj) as Array<keyof T>
    let arrRes = keys.map(key=> ({key, cb: predicate[key]}))
        .map(({key,cb}) => ([
            key,
            // @ts-ignore
            cb ? cb(obj[key]) : obj[key]
        ]))
    return Object.fromEntries(arrRes)
}

type RenamePropertyPredicate<T extends ObjectForHelper> = {[P in keyof T]?: string}
type RenamePropertyReturn<T extends ObjectForHelper,B extends RenamePropertyPredicate<T>>
    = { [P in keyof T as B[P] extends string ? B[P] : P]: T[P] }
export function renameProperty
<T extends ObjectForHelper, B extends RenamePropertyPredicate<T>>
(obj: T, predicate: B): RenamePropertyReturn<T,B>{
    let ent = Object.entries(obj)
    let new_ent = ent.map(([key,value])=>[predicate[key]?predicate[key]:key,value])
    return Object.fromEntries(new_ent)
}

type MultiMapPropertyPredicate<T extends ObjectForHelper> = {
    [P in keyof T]?: true
        | string
        | ((p:T[P]) => unknown)
        | {n?: string, m?: (p:T[P]) => unknown}
}
type MultiMapPropertyReturn<T extends ObjectForHelper,B extends MultiMapPropertyPredicate<T>> = {
    [P in Extract<keyof T, keyof B> as (
        B[P] extends string ? B[P] : B[P] extends {n: string} ? B[P]["n"] : B[P] extends undefined ? never : P
    )]: B[P] extends (p:T[P]) => infer R ? R : B[P] extends {m: (p:T[P]) => infer R} ? R : T[P]
}
export function multiMapProperty
<T extends ObjectForHelper, B extends MultiMapPropertyPredicate<T>>
(obj: T, predicate: B): MultiMapPropertyReturn<T,B>{
    let ent = Object.entries(obj)
    let new_ent = ent.filter(([k])=>typeof predicate[k] != 'undefined')
        .map(([k,v])=> {
            let predicateEl = predicate[k] as true
                | string
                | ((p:unknown) => unknown)
                | {n?: string, m?: (p:unknown) => unknown}
            if(predicateEl === true) return [k,v]
            if(typeof predicateEl == "string") return [predicateEl,v]
            if(typeof predicateEl == "function") return [k,predicateEl(v)]
            if(typeof predicateEl == "object") {
                if(predicateEl?.n) k = predicateEl.n
                if(predicateEl?.m) v = predicateEl.m(v)
                return [k,v]
            }
            return [k,v]
        })
    return Object.fromEntries(new_ent)
}

interface IHelperObject<T extends ObjectForHelper>{
    filter<A extends FilterPropertyPredicate<T>>(names: A)
        : ObjAndIHelperObject<FilterPropertyReturn<T, A>>
    map<A extends MapPropertyPredicate<T>>(names: A)
        : ObjAndIHelperObject<MapPropertyReturn<T, A>>
    rename<A extends RenamePropertyPredicate<T>>(names: A)
        : ObjAndIHelperObject<RenamePropertyReturn<T, A>>
    multiMap<A extends MultiMapPropertyPredicate<T>>(names: A)
        : ObjAndIHelperObject<MultiMapPropertyReturn<T, A>>
}

export function HelperObject<T extends ObjectForHelper>
(obj: T): T & IHelperObject<T>{
    let proxy_handler: ProxyHandler<T> = {
        get(target: T, p: string): any {
            switch (p){
                case 'filter': return (names: object)=>{
                    return new Proxy(
                        filterProperty(target,names) as ObjectForHelper,
                        proxy_handler)
                };
                case 'map': return (names: object)=>{
                    return new Proxy(
                        mapProperty(target,names) as ObjectForHelper,
                        proxy_handler)
                };
                case 'rename': return (names: object)=>{
                    return new Proxy(
                        renameProperty(target,names) as ObjectForHelper,
                        proxy_handler)
                };
                case 'multiMap': return (names: object)=>{
                    return new Proxy(
                        multiMapProperty(target,names) as ObjectForHelper,
                        proxy_handler)
                }
                default: return target[p]
            }
        }
    }

    return new Proxy(obj,proxy_handler) as T & IHelperObject<T>
}
