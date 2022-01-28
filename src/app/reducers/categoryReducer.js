import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categoryReducer",
  initialState: {
    isFetching: false,
    categoryInfo: {},
  },
  reducers: {
    fetchCategory: (state) => {
      state.isFetching = true;
    },
    fetchCategorySuccess: (state, action) => {
      const { payload } = action;
      state.isFetching = false;
      state.categoryInfo = payload;
    },
  },
});

export const { actions: categoryActions, reducer: categoryReducer } = categorySlice;
