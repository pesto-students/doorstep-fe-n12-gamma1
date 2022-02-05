import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filterReducer",
  initialState: {
    isFetching: false,
    selectedCategory:null,
    searchField:null
  },
  reducers: {
    filterByCategory:(state,action)=>{
        const{payload}=action
        state.isFetching = true;
        state.selectedCategory=payload;
      },
      filterBySearchField:(state,action)=>{
        const{payload}=action
        state.isFetching = true;
        state.searchField=payload;
      },
      resetfilter:(state,action)=>{
        const{payload}=action
        state.isFetching = true;
        state.selectedCategory=null;
        state.searchField=null;
      }
  },
});

export const { actions: filterActions, reducer: filterReducer } = filterSlice;
