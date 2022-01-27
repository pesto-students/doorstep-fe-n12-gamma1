import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "productReducer",
  initialState: {
    isFetching: false,
    userInfo: {},
  },
  reducers: {
    fetchProduct: (state) => {
      state.isFetching = true;
    },
    fetchProductSuccess: (state, action) => {
      const { payload } = action;
      state.isFetching = false;
      state.productInfo = payload;
    },
  },
});

export const { actions: productActions, reducer: productReducer } = productSlice;
