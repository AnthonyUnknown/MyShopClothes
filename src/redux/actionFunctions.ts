import { apiLog, fetchClothesHomepage } from "@/api";
import { Dispatch } from "react";
import { IActionClothes, SET_CLOTHES } from "./reducers/clothesReducer";
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

export const fetchClothesHome = (searchValue: string) => {
  return async (dispatch: Dispatch<IActionClothes>): Promise<void> => {
    try {
      let resp = await fetchClothesHomepage(searchValue);
      const respresp = resp;
      dispatch({ type: SET_CLOTHES, payload: respresp });
      localStorage.setItem("clothes", JSON.stringify(respresp));
    } catch (e) {
      alert(e);
    }
  };
};
