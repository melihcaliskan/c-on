export namespace ILogin {
  export type ILoginStatus = "success" | "fail";
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
    status?: ILoginStatus;
    player?: Player;
  }

  export interface ILogoutBody {
    username: string;
  }
}