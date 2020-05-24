import { IInitialise, IDatabaseSetup } from '../types/Database'
import { UserModel } from '../types/models/users'
import { initialiseUserModel } from './models/users'


const initialiseModels: IInitialise =
  async (mongoose, url, databaseName, mongooseHandler) => {
    await mongooseHandler.connect(mongoose, url, databaseName)
    const userModel: UserModel = initialiseUserModel(mongoose)
    return {
      userModel: userModel
    }
  }

export const Database: IDatabaseSetup = {
  initialise: initialiseModels
}
