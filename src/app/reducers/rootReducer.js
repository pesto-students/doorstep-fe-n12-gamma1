import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { categoryReducer } from "./categoryReducer";
import { orderListReducer } from "./orderListReducer";
import { paymentReducer } from "./paymentReducer";
import { productReducer } from "./productReducer";

export const rootReducer = combineReducers({ 
    authReducer,
    categoryReducer,
    orderListReducer,
    paymentReducer,
    productReducer
})