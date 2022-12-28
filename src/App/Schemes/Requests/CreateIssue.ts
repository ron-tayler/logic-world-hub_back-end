import * as IO from "io-ts"

export const IOCreateIssue = IO.type({
    name: IO.string,
    type: IO.number,
    text: IO.string
})