'use strict';
import express, { Express } from 'express'
import { apiRoutesSetup } from './controllers/apiRoutes';
import * as http from 'http';
import { IApiRoutesSetup, ApiRoutes } from './types/Api';
import { Database } from './database/Database';
import Mongoose from 'mongoose';
import { Constant } from './configs/database';
import {
  MongooseConnectionHandler
} from './database/MongooseConnectionHandler';
import { IDatabase } from './types/Database';
import { CallbackHandlerSetup } from './lib/CallbackHandler';
import { ResponseHandler } from './lib/ResponseHandler';
import { userApiSetup } from './controllers/users';
import { CallBackHandler } from './types/Callback';

let server: http.Server
const start =
  (port: number
    , app: Express
    , apiRoutesSetup: IApiRoutesSetup
    , apiRoutes: ApiRoutes
    , database: IDatabase
    , callbackHandler: CallBackHandler
  ): void => {
    apiRoutesSetup(app, database, apiRoutes, callbackHandler)
    server = app.listen(port, (err) => {
      if (err) {
        return console.error(err);
      }
      return console.log(`server is listening on ${port}`);
    });
  }
const port = 3000;
const app = express()
app.use(express.json())

const apiRoutes: ApiRoutes = {
  userApiSetup: userApiSetup
}

Database.initialise(
  Mongoose
  , Constant.URL
  , Constant.Database
  , MongooseConnectionHandler)
  .then((database) => {
    const callbackHandler =
      CallbackHandlerSetup.setup(
        MongooseConnectionHandler.disconnectSetup(Mongoose)
        , ResponseHandler)
    start(port, app, apiRoutesSetup, apiRoutes, database, callbackHandler)
  })


export default app

export { server }
