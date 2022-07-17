export namespace IAuth {
  export interface IAuthState {
    isLoggedIn?: boolean;
    username?: string;
    name?: string;
    avatar?: string;
    event?: string;
  }

  export interface IAuthHook {
    authState: IAuthState;
    login?: (data: any) => void;
    logOut?: () => void;
    dispatch?: (body: Object) => void;
  }
}