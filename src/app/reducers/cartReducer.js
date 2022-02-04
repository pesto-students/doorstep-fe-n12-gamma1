import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartReducer",
  initialState: {
    isFetching: false,
    products: [],
    show_products:false,
    viewProduct:{},
    subTotal:0
  },
  reducers: {
    addProductToCart: (state,action) => {
      debugger;
      let { payload } = action;
      state.isFetching = true;
      const products = state.products.filter(
        (product) => product._id == payload._id
      );
      let qty=1;
      let copy;
      if(products.length!=0){
        copy={...products[0]};
        copy.qty++;
        // copy.total=copy.qty*copy.discounted_price;
        // payload=copy
      }else{
        // payload.qty=1;
        copy={...payload};
        copy.qty=1;
        // copy.total=copy.qty*copy.discounted_price;
        // // payload={...payload,qty,total}
        // payload=copy
      }
      copy.total=copy.qty*copy.discounted_price;
      payload=copy
      const data = state.products.filter(
        (product) => product._id !== payload._id
      );
      state.products=[];
        state.products=[...state.products,...data,payload]
      // state.products=[...state.products,payload]
      
    },
    removeProductFromCart: (state,action) => {
      debugger;
        let { payload } = action;
        state.isFetching = true;
        // const products = state.products.filter(
        //   (product) => product._id !== payload._id
        // );
        // console.log("products1",products.length)
        // state.products=[];
        // console.log("products2",products.length)
        // state.products=[...state.products,...products]
        // console.log("products3",products.length)
        const products = state.products.filter(
          (product) => product._id == payload._id
        );
        
        if(products.length!=0){
          let copy={...products[0]};
          copy.qty--;
          copy.total=copy.qty*copy.discounted_price;
          payload=copy
        }
        const data = state.products.filter(
          (product) => product._id !== payload._id
        );
        state.products=[];
          state.products=[...state.products,...data,payload]
      },
      deleteProductEntryFromCart:(state,action)=>{
        debugger;
        const { payload } = action;
        state.isFetching = true;
        const products = state.products.filter(
          (product) => product._id !== payload._id
        );
        state.products=[];
        state.products=[...state.products,...products]
      },
      viewProductDetails:(state, action) => {
        const { payload } = action;
        state.isFetching = false;
        state.viewProduct=payload;
      },
      addSubTotal: (state, action) => {
        let { payload } = action;
        state.isFetching = true;
      state.subTotal=payload;
    }
  },
});

export const { actions: cartActions, reducer: cartReducer } = cartSlice;
