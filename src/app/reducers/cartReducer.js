import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartReducer",
  initialState: {
    isFetching: false,
    products: [],
    show_products:false,
    viewProduct:{}
  },
  reducers: {
    addProductToCart: (state,action) => {
      let { payload } = action;
      state.isFetching = true;
      const products = state.products.filter(
        (product) => product._id == payload._id
      );
      let qty=1;
      if(products.length!=0){
        let copy={...products[0]};
        copy.qty++;
        payload=copy
      }else{
        // payload.qty=1;
        payload={...payload,qty}
        
      }
      const data = state.products.filter(
        (product) => product._id !== payload._id
      );
      state.products=[];
        state.products=[...state.products,...data,payload]
      // state.products=[...state.products,payload]
      
    },
    removeProductFromCart: (state,action) => {
        const { payload } = action;
        state.isFetching = true;
        const products = state.products.filter(
          (product) => product._id !== payload._id
        );
        console.log("products",...products)
        state.products=[];
        state.products=[...state.products,...products]
      },
      viewProductDetails:(state, action) => {
        const { payload } = action;
        state.isFetching = false;
        state.viewProduct=payload;
      },
      showCartProducts: (state, action) => {
      state.isFetching = false;
      state.show_products = true;
    },
    hideCartProducts: (state, action) => {
        state.isFetching = false;
        state.show_products = false;
    }
  },
});

export const { actions: cartActions, reducer: cartReducer } = cartSlice;
