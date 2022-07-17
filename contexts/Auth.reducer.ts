import { AuthConst } from "./Auth.const";
import { AUTH_INITIAL_STATE } from "@/utilities/constants";

export function authReducer(state: any, action: any) {
  switch (action.type) {
    case AuthConst.LOGIN: {
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true
      }
    }
    case AuthConst.LOGOUT: {
      return AUTH_INITIAL_STATE
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export default authReducer;