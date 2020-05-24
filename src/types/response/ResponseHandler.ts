import { Response } from 'express';

interface IDefinedResponse {
  (res: Response
    , body: unknown): void;
}

interface ISendResponse {
  (res: Response
    , status: number
    , body: unknown): void;
}

interface IResponseHandler {
  sendSuccessResponse: IDefinedResponse;
}

export {
  ISendResponse
  , IDefinedResponse
  , IResponseHandler
}
