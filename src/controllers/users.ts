import { postUsers } from '../types/request/users';
import { IOnPostUser, IUserApiSetup } from '../types/api/users';
import { IOnPost } from '../types/Api';
import { User } from '../types/models/users';

const onPostUser: IOnPostUser = (req, onSuccess, onFailure, userModel) => {
  const data: postUsers = req.body
  const {
    username
    , firstName
    , lastName
    , role
  } = data
  const user: User = {
    userName: username
    , firstName: firstName
    , lastName: lastName
    , role: role
  }
  userModel.createUser(user)
    .then(onSuccess)
    .catch(onFailure)
}

export const userApiSetup: IUserApiSetup =
  (app
    , callbackHandler
    , userModel) => {
    const onPost: IOnPost = (req, res) => {
      onPostUser(
        req
        , callbackHandler.onSuccess(res)
        , callbackHandler.onFailure
        , userModel)
    }
    app.post('/users', onPost)
  }
