import * as ThemeThunks from "../theme/redux/thunks";
import * as CommonThunks from "../common/redux/thunks";
import * as UserThunks from "../pages/UserAccount/redux/thunks";
import * as InventoryThunks from "../inventory/redux/thunks";
import * as ShopThunks from "../pages/Shop/redux/thunks";
import * as CartThunks from "../pages/Cart/redux/thunks";

export const themeThunks = ThemeThunks.default;
export const commonThunks = CommonThunks.default;
export const userThunks = UserThunks.default;
export const inventoryThunks = InventoryThunks.default;
export const shopThunks = ShopThunks.default;
export const cartThunks = CartThunks.default;

const thunks = {
  theme: ThemeThunks.default,
  common: CommonThunks.default,
  user: UserThunks.default,
  inventory: InventoryThunks.default,
  shop: ShopThunks.default,
  cart: CartThunks.default,
};

export default thunks;