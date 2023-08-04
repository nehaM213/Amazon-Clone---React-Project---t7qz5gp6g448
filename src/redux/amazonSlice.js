import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  wishList:[],
  userInfo: null,
  userSearch: "",
  resultNotFound:false
};

export const amazonSlice = createSlice({
  name: "amazon",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    addToWishList: (state, action) => {
      const item = state.wishList.find((item) => item.id === action.payload.id);
      if (item) {
      //   item.quantity += action.payload.quantity;
        state.wishList = state.wishList.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.wishList.push(action.payload);
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    deleteFromWishList: (state, action) => {
      state.wishList = state.wishList.filter(
        (item) => item.id !== action.payload
      );
    },
    setUserSearch: (state, action) => {
      state.userSearch = action.payload;
    },
    setResultNotFound: (state, action) => {
      state.resultNotFound = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    userSignOut: (state) => {
      state.userInfo = null;
    },
  },
});
export const {
  addToCart,
  addToWishList,
  deleteItem,
  deleteFromWishList,
  resetCart,
  incrementQuantity,
  decrementQuantity,
  setUserSearch,
  setResultNotFound,
  setUserInfo,
  userSignOut,
} = amazonSlice.actions;
export default amazonSlice.reducer;