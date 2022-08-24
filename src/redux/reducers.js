import { combineReducers } from "redux";
import { ThemeReducer as theme } from "../theme/redux";
import { CommonReducer as common } from "../common/redux";
import { UserReducer as user } from "../pages/UserAccount/redux";
import { InventoryReducer as inventory } from "../inventory/redux";
import { ShopReducer as shop } from "../pages/Shop/redux";
import { CartReducer as cart } from "../pages/Cart/redux";

const rootReducer = combineReducers({
  theme,
  common,
  user,
  inventory,
  shop,
  cart,
});

export default rootReducer;