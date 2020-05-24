import { Express, Response, Request } from 'express'
import { IDatabase } from './Database'
import { IUserApiSetup } from './api/users'
import { CallBackHandler } from './Callback'

interface IApiSetup {
  (app: Express): void;
}

interface IApi {
  setup: IApiSetup;
}

type ApiOptions = {
  db: unknown;
}

interface IRoutesSetup {
  (app: Express, apis: IApi[]): void;
}

interface IRoutes {
  setup: IRoutesSetup;
}

export interface IOnPost {
  (req: Request, res: Response): void;
}

export type ApiRoutes = {
  userApiSetup: IUserApiSetup;
}

export interface IApiRoutesSetup {
  (app: Express
    , database: IDatabase
    , apiRoutes: ApiRoutes
    , callbackHandler: CallBackHandler
  ): void;
}

