import { createSlice } from "@reduxjs/toolkit";

const fileUploadSlice = createSlice({
  name: "fileUploadReducer",
  initialState: {
    isFetching: false,
    fileInfo: {},
  },
  reducers: {
    fileUpload: (state) => {
      state.isFetching = true;
    },
    fileUploadSuccess: (state, action) => {
      const { payload } = action;
      state.isFetching = false;
      state.fileInfo = payload;
    },
    fileUploadFailure: (state, action) => {
      const { payload } = action;
      state.isFetching = false;
      state.fileInfo = payload;
    },
  },
});

export const { actions: fileUploadActions, reducer: fileUploadReducer } =
  fileUploadSlice;
