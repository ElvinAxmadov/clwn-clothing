import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setIsCartOpen = (boolen) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolen);
