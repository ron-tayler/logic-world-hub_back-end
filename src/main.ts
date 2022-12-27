import moduleAlias from 'module-alias';
moduleAlias.addAlias('@', __dirname)
moduleAlias()
import "reflect-metadata";

import bodyParser from 'body-parser';
import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from "@/container";
import Cors from "@/App/Middlewares/corsMiddleware";

const SERVER_PORT = process.env.SERVER_PORT || 3000;

let server = new InversifyExpressServer(container,null,{
    rootPath: "/api/v1"
});
server.setConfig((app) => {
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(Cors)
});

let app = server.build();
app.listen(SERVER_PORT,() => {
    console.log(`Server started on port ${SERVER_PORT}`)
});