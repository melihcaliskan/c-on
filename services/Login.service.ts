import Http from "@/services/Http.service";
import { Endpoints } from "@/utilities/endpoints";
import { ILogin } from "@/interfaces/ILogin.interface";

const LoginService = {
  /**
   *
   * @param {*} data -> username & password
   * @returns -> user data
   */
  Login: async (body: ILogin.ILoginForm) => {
    const res = await Http.POST(Endpoints.Login, body);
    return res.data;
  },
  /**
   *
   * @returns -> Log out user and redirect to home page
   */
  Logout: async (body: ILogin.ILogoutBody) => {
    const res = await Http.POST(Endpoints.Logout, body);
    return res.data;
  }
}

export default LoginService;
