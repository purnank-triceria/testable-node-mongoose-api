import { Mongoose } from 'mongoose'
import { IVoidFunction } from './Common'

interface IMongooseConnectionHandler {
  connect: IConnectClient;
  disconnectSetup: IDisconnectFactory;
}

interface IConnectClient {
  (mongoose: Mongoose
    , url: string
    , databaseName: string): Promise<Mongoose>;
}

export type IDisconnect = IVoidFunction

export interface IDisconnectFactory {
  (mongoose: Mongoose): IDisconnect;
}

export {
  IMongooseConnectionHandler
  , IConnectClient
}
