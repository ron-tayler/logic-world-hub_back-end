import * as IO from "io-ts"
import * as IOTypes from "io-ts-types"

// export type ISchemaMod = IO.TypeOf<typeof SchemaMod>

export const Version = IO.type({
    id: IO.number,
    version: IO.string,
    game_version: IO.string,
    releaseDate: IOTypes.date
},"Version")

export const Author = IO.type({
    id: IO.number,
    nick: IO.string,
    type: IO.number,
    avatar: IO.string
},"Author")

export const Tag = IO.type({
    id: IO.number,
    name: IO.string
},"Tag")

export const ModMinimal = IO.type({
    id: IO.number,
    name: IO.string,
    description: IO.string,
    avatar: IO.string
},"Mod")

export const SchemaMod = IO.type({
    id: IO.number,
    name: IO.string,
    description: IO.string,
    avatar: IO.string,
    repository: IO.string,
    docs_url: IO.string,
    collection_id: IO.number,
    createDate: IOTypes.date,
    views: IO.number,
    downloads: IO.number,
    favorites: IO.number,
    subscribers: IO.number,
},"Mod")

export const Issue = IO.type({
    id: IO.number,
    name: IO.string,
    type: IO.number,
    author: IO.type({
        id: IO.number,
        nick: IO.string
    }),
    createDate: IOTypes.date,
    posts: IO.number,
    last_post_author: IO.type({
        id: IO.number,
        nick: IO.string
    }),
    last_post_createDate: IOTypes.date
})

export const IssueMinimal = IO.type({
    id: IO.number,
    name: IO.string,
    type: IO.number,
    author: IO.type({
        id: IO.number,
        nick: IO.string
    }),
    createDate: IOTypes.date,
})

export const IssuePost = IO.type({
    id: IO.number,
    createDate: IOTypes.date,
    author: IO.type({
        id: IO.number,
        nick: IO.string,
        avatar: IO.string,
    }),
    text: IO.string
})

