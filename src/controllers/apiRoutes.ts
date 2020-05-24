import { IApiRoutesSetup } from '../types/Api';

export const apiRoutesSetup: IApiRoutesSetup =
  (app, database, apiRoutes, callbackHandler) => {
    apiRoutes.userApiSetup(app, callbackHandler, database.userModel)
  }
