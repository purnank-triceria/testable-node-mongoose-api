import { IMongooseConnectionHandler } from './MongooseConnection';
import { Mongoose } from 'mongoose';
import { UserModel } from './models/users';

type IDatabase = {
  userModel: UserModel;
}

interface IInitialise {
  (mongoose: Mongoose
    , url: string
    , databaseName: string
    , mongooseConnection: IMongooseConnectionHandler): Promise<IDatabase>;
}

interface IDatabaseSetup {
  initialise: IInitialise;
}

export {
  IInitialise
  , IDatabaseSetup
  , IDatabase
}
