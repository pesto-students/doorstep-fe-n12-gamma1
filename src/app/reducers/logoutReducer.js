import { createSlice } from "@reduxjs/toolkit";

const logoutSlice = createSlice({
  name: "logoutReducer",
  initialState: {
    isFetching: false,
    userInfo: {},
  },
  reducers: {
    fetchLogout: (state) => {
      state.isFetching = true;
    },
    fetchLogoutSuccess: (state, action) => {
      const { payload } = action;
      state.isFetching = false;
      state.userInfo = payload;
    },
    fetchLogoutFailure: (state, action) => {
      const { payload } = action;
      state.isFetching = false;
      state.userInfo = payload;
    },
  },
});

export const { actions: logoutActions, reducer: logoutReducer } = logoutSlice;
