import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./user/productSlice";
import cartSlice from "./user/cartSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice
  }
})