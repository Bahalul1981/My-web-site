import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {
    addtoCart: [],
    updateUser: [],
  },
};

export const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.addtoCart.push(action.payload);
    },
    updateUser: (state, action) => {
      state.items.updateUser.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items.addtoCart = state.items.addtoCart.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart, updateUser } = productSlice.actions;

export default productSlice.reducer;
