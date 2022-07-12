import { combineReducers } from "redux";
import { clothesReducer } from "./reducers/clothesReducer";
import { userLogReducer } from "./reducers/userLogReducer";

const combineReducer = combineReducers({
  user: userLogReducer,
  cloth: clothesReducer,
});

export default combineReducer;
