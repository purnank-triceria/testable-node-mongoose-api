import {
  ICallBackHandlerSetup
  , CallBackHandlerSetup
  , ISuccessResponseFactory
  , IFailureFactory
} from '../types/Callback'


const successFunction: ISuccessResponseFactory = (disconnect
  , responseHandler) => {
  return (response) => {
    return (data): void => {
      disconnect()
      responseHandler.sendSuccessResponse(response, data)
    }
  }
}

const failureFunction: IFailureFactory =
  (disconnect) => {
    return (error): void => {
      disconnect()
      throw error
    }
  }

const setup: ICallBackHandlerSetup = (disconnect
  , responseHandler) => {
  return {
    onSuccess: successFunction(disconnect, responseHandler)
    , onFailure: failureFunction(disconnect)
  }
}

export const CallbackHandlerSetup: CallBackHandlerSetup = {
  setup: setup
}
