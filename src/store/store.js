import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./user/productSlice";
import cartSlice from "./user/cartSlice";
// admin
import useAdminproductSlice from "./admin/productSlice";
export const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    adminProduct: useAdminproductSlice
  }
})