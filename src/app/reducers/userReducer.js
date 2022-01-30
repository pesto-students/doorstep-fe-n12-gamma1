import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userReducer",
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
    }
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
