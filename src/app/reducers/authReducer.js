import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authReducer",
  initialState: {
    isFetching: false,
    userInfo: {},
  },
  reducers: {
    
    fetchAuth: (state, action) => {
      debugger;
      const { payload } = action;
      state.isFetching = true;
      state.userInfo = payload;
    },
    fetchAuthSuccess: (state, action) => {
      const { payload } = action;
      state.isFetching = false;
      state.userInfo = payload;
    },
  },
});

export const { actions: authActions, reducer: authReducer } = authSlice;
