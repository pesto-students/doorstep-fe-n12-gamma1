import Axios from "../api/axios";

const auth=()=>Axios.get('/articles?include=author').then((response) => response);

export default auth;