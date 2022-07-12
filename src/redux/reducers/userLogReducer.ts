import { IUserUser } from "@/interfaces";

export const LOG_USER = "LOG_USER";
export const LOG_ERROR = "LOG_ERROR";

interface IActionLogUser {
  type: typeof LOG_USER;
  payload: IUserUser;
}

interface IActionLogError {
  type: typeof LOG_ERROR;
  payload: string;
}

interface IDefaultState {
  user: null | IUserUser;
  error: null | string;
}

export type IUserAction = IActionLogError | IActionLogUser;

const defaultState: IDefaultState = {
  user: null,
  error: null,
};

export const userLogReducer = (state = defaultState, action: IUserAction): IDefaultState => {
  switch (action.type) {
    case LOG_USER:
      return { user: action.payload, error: null };
    case LOG_ERROR:
      return { user: null, error: action.payload };
    default:
      return state;
  }
};
