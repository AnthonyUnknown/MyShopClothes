import { apiLog } from "@/api";
import { Dispatch } from "react";
import { IUserAction, LOG_ERROR, LOG_USER } from "./reducers/userLogReducer";

export const fetchUser = (emailLog: string, passwordLog: string) => {
  return async (dispatch: Dispatch<IUserAction>): Promise<void> => {
    try {
      let response = await apiLog(emailLog, passwordLog);
      let user = response.user;
      dispatch({ type: LOG_USER, payload: user });
      localStorage.setItem("user", JSON.stringify(user));
    } catch (e) {
      dispatch({ type: LOG_ERROR, payload: "Error in sign in!" });
      alert(e);
    }
  };
};
