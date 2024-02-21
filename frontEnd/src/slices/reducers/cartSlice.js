import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cartData")
  ? JSON.parse(localStorage.getItem("cartData"))
  : { cartNum: 0, carts: {} };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartNum++;

      for(let id of action.payload){
        console.log(id)
        state.carts[id]
        ? state.carts[id]++
        : (state.carts[id] = 1);
      }

      // state.carts[action.payload]
      //   ? state.carts[action.payload]++
      //   : (state.carts[action.payload] = 1);

      localStorage.setItem(
        "cartData",
        JSON.stringify({ 
          cartNum: state.cartNum,
          carts: state.carts,
        })
      );
    },
  },
});

export default cartSlice.reducer;

export const { addToCart } = cartSlice.actions;
