import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      name: 'test',
      image: 'https://picsum.photos/450/300?grayscale',
      price: 200,
      quantity: 20,
      remainQuantity: 11,
      status: 'open',
      updatedAt: (new Date()).toISOString()
    }
  ],
};

export const useAdminproductSlice = createSlice({
  name: "admin-product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      action.payload.remainQuantity = action.payload.quantity;
      action.payload.updatedAt = (new Date()).toISOString();
      state.list.push(action.payload)
    },
    updateProduct: (state, action) => {
      const {index, ...product } = action.payload
      state.list[index] = {
        ...state.list[index],
        ...product,
        remainQuantity: product.quantity,
        updatedAt: (new Date()).toISOString(),
      };
    },
    removeProduct: (state, action) => {
      state.list.splice(action.payload, 1);
    },
  },
});

export const { addProduct, updateProduct, removeProduct } = useAdminproductSlice.actions;
export default useAdminproductSlice.reducer;
