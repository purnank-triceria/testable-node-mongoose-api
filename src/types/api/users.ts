import { Request } from 'express'
import { IMongooseConnectionHandler } from '../MongooseConnection'
import { Express } from 'express'
import { CallBackHandler } from '../Callback'
import { UserModel } from '../models/users'

export interface IOnPostUser {
  (request: Request
    , onSuccess: (res: unknown) => void
    , onFailure: (mongooseConnectionHandler: IMongooseConnectionHandler) => void
    , userModel: UserModel): void;
}

export interface IUserApiSetup {
  (app: Express
    , callbackHandler: CallBackHandler
    , userModel: UserModel): void;
}
