import * as express from 'express';
import * as bodyParser from 'body-parser';
import {defaultMetadataStorage} from "../../src/metadata/MetadataStorage";
import {ExpressHttpFramework} from "../../src/http-framework-integration/ExpressHttpFramework";
import {ControllerRunner} from "../../src/ControllerRunner";

require('./BlogController');

let app = express(); // create express server
app.use(bodyParser.json()); // setup body parser

let controllerHandler = new ControllerRunner(new ExpressHttpFramework(app));
controllerHandler.registerAllActions(); // register actions in the app
app.listen(3004); // run express app

console.log('Express server is running on port 3004. Open http://localhost:3004/blogs/');