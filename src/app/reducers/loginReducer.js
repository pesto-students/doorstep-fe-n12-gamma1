import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "loginReducer",
  initialState: {
    isFetching: false,
    userInfo: {},
  },
  reducers: {
    usersSuccess: (state, action) => {
        const { payload } = action;
      state.isFetching = false;
      state.userInfo = payload;
    },
    fetchAuth: (state) => {
      state.isFetching = true;
    },
    fetchAuthSuccess: (state, action) => {
      const { payload } = action;
      state.isFetching = false;
      state.userInfo = payload;
    },
  },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
