import axios from "axios";
import config from "../../config.json";
// baseURL: process.env.REACT_APP_API_URL,
const Axios = axios.create({
  baseURL:config.result.envDetails.REACT_APP_API_URL
});
export default Axios;