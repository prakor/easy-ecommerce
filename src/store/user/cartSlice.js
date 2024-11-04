import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  checkout: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadCart(state) {
      const previousCart = localStorage.getItem('cart-data')
      if (previousCart) {
        state.items = JSON.parse(previousCart)
      }
    },
    addToCart(state, action) {
      const findProductIndex = state.items.findIndex(product => product.name === action.payload.name)

      if (findProductIndex >= 0) {
        state.items[findProductIndex].quantity += 1
      } else {
        state.items.push(action.payload)
      }

      localStorage.setItem('cart-data', JSON.stringify(state.items))
    },
    updateQuantity(state, action) {
      state.items[action.payload.index].quantity = action.payload.quantity
      localStorage.setItem('cart-data', JSON.stringify(state.items))
    },
    removeItemInCart(state, action) {
      state.items.splice(action.payload, 1)
      localStorage.setItem('cart-data', JSON.stringify(state.items))
    },
    placeOrder(state, action) {
      const orderData = {
        ...action.payload,
        totalPrice: state.items.reduce((acc, item) => acc + (item.price * item.quantity), 0),
        paymentMethod: 'Credit Card',
        createdDate: (new Date()).toLocaleString(),
        orderNumber: `AA${Math.floor((Math.random() * 90000) + 10000)}`,
        products: state.items
      }
      localStorage.setItem('order-data', JSON.stringify(orderData))
    },
    loadCheckout(state) {
      const orderData = localStorage.getItem('order-data')
      if (orderData) {
        state.checkout = JSON.parse(orderData)
      }
    }
  }
});

export const { loadCart, addToCart, updateQuantity, removeItemInCart, placeOrder, loadCheckout } = cartSlice.actions;
export default cartSlice.reducer;