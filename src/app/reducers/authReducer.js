import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authReducer",
  initialState: {
    isFetching: false,
    userInfo: {},
  },
  reducers: {
    fetchAuth: (state) => {
      state.isFetching = true;
    },
    fetchAuthSuccess: (state, action) => {
      const { payload } = action;
      state.isFetching = false;
      state.userInfo = payload;
    },
    fetchAuthFailure: (state, action) => {
      const { payload } = action;
      state.isFetching = false;
      state.userInfo = payload;
    },
  },
});

export const { actions: authActions, reducer: authReducer } = authSlice;
