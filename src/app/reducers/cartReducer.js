import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartReducer",
  initialState: {
    isFetching: false,
    products: [],
    show_products: false,
    viewProduct: {},
    paymentInfo: {},
  },
  reducers: {
    addProductToCart: (state, action) => {
      debugger;
      let { payload } = action;
      state.isFetching = true;
      const products = state.products.filter(
        (product) => product._id == payload._id
      );
      let copy;
      if (products.length != 0) {
        copy = { ...products[0] };
        copy.qty++;
      } else {
        copy = { ...payload };
        copy.qty = 1;
      }
      copy.total = copy.qty * copy.discounted_price;
      payload = copy;
      const data = state.products.filter(
        (product) => product._id !== payload._id
      );
      state.products = [];
      state.products = [...state.products, ...data, payload];
    },
    removeProductFromCart: (state, action) => {
      let { payload } = action;
      state.isFetching = true;
      const products = state.products.filter(
        (product) => product._id == payload._id
      );

      if (products.length != 0) {
        let copy = { ...products[0] };
        copy.qty--;
        copy.total = copy.qty * copy.discounted_price;
        payload = copy;
      }
      const data = state.products.filter(
        (product) => product._id !== payload._id
      );
      state.products = [];
      state.products = [...state.products, ...data, payload];
    },
    deleteProductEntryFromCart: (state, action) => {
      const { payload } = action;
      state.isFetching = true;
      const products = state.products.filter(
        (product) => product._id !== payload._id
      );
      state.products = [];
      state.products = [...state.products, ...products];
    },
    emptyCart: (state) => {
      state.isFetching = true;
      state.products = [];
    },
    viewProductDetails: (state, action) => {
      const { payload } = action;
      state.isFetching = false;
      state.viewProduct = payload;
    },
    addPaymentInfo: (state, action) => {
      let { payload } = action;
      state.isFetching = true;
      state.paymentInfo = payload;
    },
  },
});

export const { actions: cartActions, reducer: cartReducer } = cartSlice;
