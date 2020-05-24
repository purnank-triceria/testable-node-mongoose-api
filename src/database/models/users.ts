import { Constant } from '../../configs/database'
import {
  IInitialiseUserModel
  , ICreateUserFactory,
  ICreateUser
} from '../../types/models/users'

const usersSchema = {
  userName: String
  , firstName: String
  , lastName: String
  , role: String
}

const createUserFactory: ICreateUserFactory = (userModel) => {
  const createUser: ICreateUser = async (user) => {
    const createdUser = await userModel.create(user)
    return Promise.resolve(createdUser)
  }
  return createUser
}

export const initialiseUserModel: IInitialiseUserModel = (mongoose) => {
  const schema = new mongoose.Schema(usersSchema)
  const userModel = mongoose.model(Constant.Users, schema)
  return {
    getUser: (): void => {
      return
    }
    , createUser: createUserFactory(userModel)
  }
}
