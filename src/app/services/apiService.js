import Axios from "../api/axios";
// import Axios from "../api/configureAxios";

export const auth=(data)=>Axios.post('auth/googlelogin',data).then((response) =>{ 
    console.log("response",response)
    return response
});


export const category=()=>Axios.get('/articles?include=author').then((response) => response);

export const product=()=>Axios.get('/articles?include=author').then((response) => response);

export const payment=()=>Axios.get('/articles?include=author').then((response) => response);

export const orderList=()=>Axios.get('/articles?include=author').then((response) => response);

