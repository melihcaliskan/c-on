import { IResponseStatus } from "./ILogin.interface";

export namespace ILogout {
  export interface ILogoutResponse {
    error?: string;
    status?: IResponseStatus;
  }

  export interface ILogoutBody {
    username: string;
  }
}