import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categoryReducer",
  initialState: {
    isFetching: false,
    categoryList: {},
  },
  reducers: {
    fetchCategory: (state) => {
      state.isFetching = true;
    },
    fetchCategorySuccess: (state, action) => {
      const { payload } = action;
      state.isFetching = false;
      state.categoryList = payload;
    },
    fetchCategoryFailure: (state, action) => {
      const { payload } = action;
      state.isFetching = false;
      state.categoryList = payload;
    }
  },
});

export const { actions: categoryActions, reducer: categoryReducer } = categorySlice;
