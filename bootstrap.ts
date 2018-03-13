import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';
import { makeLoggerMiddleware } from 'inversify-logger-middleware';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import './src/controller/home';
import './src/controller/user';
import TYPES from './src/constant/types';
import { UserService } from './src/service/user';
import { MongoDBClient } from './src/utils/mongodb/client';

// load everything needed to the Container
let container = new Container();

if (process.env.NODE_ENV === 'development') {
    let logger = makeLoggerMiddleware();
    container.applyMiddleware(logger);
}

container.bind<MongoDBClient>(TYPES.MongoDBClient).to(MongoDBClient);
container.bind<UserService>(TYPES.UserService).to(UserService);

// start the server
let server = new InversifyExpressServer(container);
server.setConfig((app) => {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(helmet());
});

let app = server.build();
app.listen(3223);
console.log('Server started on port 3223 :)');

exports = module.exports = app;
