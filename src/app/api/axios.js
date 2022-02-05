import axios from "axios";
import config from "../../config.json"
const Axios = axios.create({
  baseURL: config.result.envDetails.REACT_APP_API_URL,
});
export default Axios;