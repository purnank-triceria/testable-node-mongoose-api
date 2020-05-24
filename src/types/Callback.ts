import { Response } from 'express';
import { IResponseHandler } from './response/ResponseHandler';
import { IDisconnect } from './MongooseConnection';

interface ISuccess {
  (data: unknown): void;
}

interface ISuccessFactory {
  (response: Response): ISuccess;
}

export interface ISuccessResponseFactory {
  (disconnect: IDisconnect
    , responseHandler: IResponseHandler
  ): ISuccessFactory;
}

interface IFailure {
  (error: unknown): void;
}

export interface IFailureFactory {
  (disconnect: IDisconnect): IFailure;
}

export type CallBackHandler = {
  onSuccess: ISuccessFactory;
  onFailure: IFailure;
}

export interface ICallBackHandlerSetup {
  (disconnect: IDisconnect
    , responseHandler: IResponseHandler): CallBackHandler;
}

export type CallBackHandlerSetup = {
  setup: ICallBackHandlerSetup;
}
