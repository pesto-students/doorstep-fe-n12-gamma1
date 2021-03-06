import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orderReducer",
  initialState: {
    isFetching: false,
    orderList: [],
  },
  reducers: {
    fetchOrder: (state) => {
      state.isFetching = true;
    },
    fetchOrderSuccess: (state, action) => {
      const { payload } = action;
      state.isFetching = false;
      state.orderList = payload;
    },
    fetchOrderFailure: (state, action) => {
      const { payload } = action;
      state.isFetching = false;
      state.orderList = payload;
    },
  },
});

export const { actions: orderActions, reducer: orderReducer } = orderSlice;
