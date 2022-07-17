export type IResponseStatus = "success" | "fail";
export namespace ILogin {
  export type Player = {
    name: string;
    avatar: string;
    event: string;
    password?: string;
  }

  export interface ILoginForm {
    username: string;
    password: string;
  }

  export interface ILoginResponse {
    error?: string;
    status?: IResponseStatus;
    player?: Player;
  }

  export interface ILogoutBody {
    username: string;
  }
}