import moduleAlias from 'module-alias';
moduleAlias.addAlias('@', __dirname)
moduleAlias()
import "reflect-metadata";

import bodyParser from 'body-parser';
import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from "@/container";

const SERVER_PORT = process.env.SERVER_PORT || 3000;

let server = new InversifyExpressServer(container,null,{
    rootPath: "/api/v1"
});
server.setConfig((app) => {
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use((req, res, next) => {
        res.setHeader("Content-Type","application/json;charset=UTF-8")
        res.setHeader("Access-Control-Allow-Origin","*")
        res.setHeader("Access-Control-Allow-Methods","GET,POST")
        res.setHeader("Access-Control-Allow-Headers","Content-Type")
        next()
    })
});

let app = server.build();
app.listen(SERVER_PORT,() => {
    console.log(`Server started on port ${SERVER_PORT}`)
});