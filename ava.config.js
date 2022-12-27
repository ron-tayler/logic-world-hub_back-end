module.exports = () => {
    return {
        "extensions": [
            "ts"
        ],
        "required": [
            "ts-node/register"
        ],
        "nodeArguments": [
            "--loader=ts-node/esm"
        ],
        "files": [
            "src/Tests/**/*Test.ts"
        ],
        "source": [
            "src/**/*",
            "!src/Tests/*"
        ]
    }
}