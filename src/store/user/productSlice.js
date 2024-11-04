import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      name: "shoes 1",
      imageUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      quantity: 1,
      about: "test !",
      status: 'open',
      price: 100,
    },
    {
      name: "shoes 2",
      imageUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      quantity: 1,
      about: "test !",
      status: 'open',
      price: 100,
    },
    {
      name: "shoes 11",
      imageUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      quantity: 1,
      about: "test !",
      status: 'open',
      price: 100,
    },
    {
      name: "shoes 22",
      imageUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      quantity: 1,
      about: "test !",
      status: 'open',
      price: 100,
    },
    {
      name: "shoes 3",
      imageUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      quantity: 1,
      about: "test !",
      status: 'open',
      price: 100,
    },
  ],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      // return {...state, list: state.list.filter(product => product.status === action.payload)}
      return state.list.filter(product => product.name.includes(action.payload));
    }
  },
});

export const { filterProducts } = productSlice.actions;
export default productSlice.reducer;
