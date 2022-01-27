import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "paymentReducer",
  initialState: {
    isFetching: false,
    userInfo: {},
  },
  reducers: {
    fetchPayment: (state) => {
      state.isFetching = true;
    },
    fetchPaymentSuccess: (state, action) => {
      const { payload } = action;
      state.isFetching = false;
      state.paymentInfo = payload;
    },
  },
});

export const { actions: paymentActions, reducer: paymentReducer } = paymentSlice;
