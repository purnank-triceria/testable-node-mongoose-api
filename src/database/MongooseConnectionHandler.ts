import {
  IDisconnect
  , IConnectClient
  , IMongooseConnectionHandler,
  IDisconnectFactory
} from '../types/MongooseConnection'

const connectClient: IConnectClient =
  async (mongoose, url, databaseName) => {
    return Promise
      .resolve(
        mongoose.connect(`${url}/${databaseName}`
          , { useNewUrlParser: true, useUnifiedTopology: true }))
  }

const disconnectSetup: IDisconnectFactory = (mongoose) => {
  const disconnect: IDisconnect = () => {
    mongoose.disconnect()
  }
  return disconnect
}

export const MongooseConnectionHandler: IMongooseConnectionHandler = {
  connect: connectClient
  , disconnectSetup: disconnectSetup
}
