import { createSlice } from "@reduxjs/toolkit";

const orderListSlice = createSlice({
  name: "orderListReducer",
  initialState: {
    isFetching: false,
    orderList: {},
  },
  reducers: {
    fetchOrderList: (state) => {
      state.isFetching = true;
    },
    fetchOrderListSuccess: (state, action) => {
      const { payload } = action;
      state.isFetching = false;
      state.orderList = payload;
    },
  },
});

export const { actions: orderListActions, reducer: orderListReducer } = orderListSlice;
