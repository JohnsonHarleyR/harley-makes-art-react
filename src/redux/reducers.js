import { combineReducers } from "redux";
import { ThemeReducer as theme } from "../theme/redux";
import { CommonReducer as common } from "../common/redux";
import { UserReducer as user } from "../pages/UserAccount";

const rootReducer = combineReducers({
  theme,
  common,
  user,
});

export default rootReducer;