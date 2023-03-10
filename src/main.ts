import moduleAlias from 'module-alias';
moduleAlias.addAlias('@', __dirname);
moduleAlias();
import "reflect-metadata";

import bodyParser from 'body-parser';
import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from "@/container";
import CorsMiddleware from "@/App/Middlewares/Cors";
import ErrorMiddleware from "@/App/Middlewares/Error";
import NotFoundMiddleware from "@/App/Middlewares/NotFound"
import {AuthProvider} from "@/App/AuthProvider";

const SERVER_PORT = process.env.SERVER_PORT || 3000;

let server = new InversifyExpressServer(container,null,{
    rootPath: "/api/v1"
}, null, AuthProvider);

server.setConfig(app => {
    app.use(CorsMiddleware);
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
});

server.setErrorConfig(app => {
    app.use(NotFoundMiddleware);
    app.use(ErrorMiddleware);
});

server.build().listen(SERVER_PORT,() => {
    console.log(`Server start listened on port ${SERVER_PORT}`);
});
