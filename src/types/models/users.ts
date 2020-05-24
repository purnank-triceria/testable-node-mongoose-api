import { IVoidFunction } from '../Common'
import { Mongoose, Model, Document } from 'mongoose'

export type User = {
  userName: string;
  firstName: string;
  lastName: string;
  role: string;
}

export interface ICreateUser {
  (user: User): Promise<Document>;
}

export interface ICreateUserFactory {
  (userModel: Model<Document>): ICreateUser;
}

export interface IInitialiseUserModel {
  (mongoose: Mongoose): UserModel;
}

export type UserModel = {
  getUser: IVoidFunction;
  createUser: ICreateUser;
}
