import {
  ISendResponse
  , IDefinedResponse,
  IResponseHandler
} from '../types/response/ResponseHandler'

const sendResponse: ISendResponse = (responseObj, status, body) => {
  responseObj.status(status);
  responseObj.send(body);
}

const sendSuccessResponse: IDefinedResponse = (res, body) => {
  sendResponse(res, 200, body)
}

export const ResponseHandler: IResponseHandler = {
  sendSuccessResponse: sendSuccessResponse
}
