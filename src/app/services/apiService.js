import Axios from "../api/axios";

export const auth=()=>Axios.get('vendor/vendorDetails').then((response) => response);

export const category=()=>Axios.get('/articles?include=author').then((response) => response);

export const product=()=>Axios.get('/articles?include=author').then((response) => response);

export const payment=()=>Axios.get('/articles?include=author').then((response) => response);

export const orderList=()=>Axios.get('/articles?include=author').then((response) => response);

