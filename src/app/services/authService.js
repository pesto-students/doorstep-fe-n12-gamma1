import Axios from "../api/axios";
import config from "../../config.json"

// const auth=()=>Axios.get('/articles?include=author').then((response) => response);
export const auth=(data)=>Axios.post('auth/googlelogin',data).then((response) => response);

export const fileUpload=(data)=>Axios.post('admin/uploadFile',data,getHeader()).then((response) => response);

export const category=(data)=>Axios.get(`user/categoryList?prefix=${config.result.prefix}`,getHeader()).then((response) => response);

export const product=(data)=>Axios.get(`user/productList?prefix=${config.result.prefix}`,getHeader()).then((response) => response);

export const payment=(data)=>Axios.post(`user/payment?prefix=${config.result.prefix}`,data,getHeader()).then((response) => response);

export const order=(data)=>Axios.get(`user/order?prefix=${config.result.prefix}`,data,getHeader()).then((response) => response);

export const logout = () => localStorage.removeItem('user')

export const checkUser = () => JSON.parse(localStorage.getItem('user'));

const getHeader=()=>{
    let axiosConfig=null;
    if(window.localStorage.getItem("token") !== null){
       axiosConfig = {
        headers: {
          'Content-Type': 'application/json',
          'auth': JSON.parse(window.localStorage.getItem("token"))
        }
      };
    }
    return axiosConfig;
}

// export default auth;