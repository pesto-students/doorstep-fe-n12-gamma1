import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "productReducer",
  initialState: {
    isFetching: false,
    productList: {},
  },
  reducers: {
    fetchProduct: (state) => {
      state.isFetching = true;
    },
    fetchProductSuccess: (state, action) => {
      const { payload } = action;
      state.isFetching = false;
      state.productList = payload;
    },
    fetchProductFailure: (state, action) => {
      const { payload } = action;
      state.isFetching = false;
      state.productList = payload;
    },
  },
});

export const { actions: productActions, reducer: productReducer } =
  productSlice;
