import Axios from "../api/axios";

// const auth=()=>Axios.get('/articles?include=author').then((response) => response);
export const login=(creds)=>Axios.post('auth/googlelogin',creds).then((response) => response);

// export default user;