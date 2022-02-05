import Axios from "./axios";
import configUrl from "../../config.json"
const configureAxios = () => {
  Axios.defaults.baseURL = configUrl.result.envDetails.REACT_APP_API_URLL;
  Axios.defaults.headers.get["Accept"] = "application/json";
  Axios.defaults.headers.post["Accept"] = "application/json";
  Axios.defaults.headers.put["Accept"] = "application/json";
  Axios.interceptors.request.use(function (config) {
    let axiosConfig=null;
    if(window.localStorage.getItem("token") !== null){
       axiosConfig = {
        headers: {
          'Content-Type': 'application/json',
          'auth': JSON.parse(window.localStorage.getItem("token"))
        }
      };
    }
    // const token = localStorage.getItem("token");
    // config.headers.auth = token ? `${token}` : "";
    return axiosConfig;
  });
};
export default configureAxios;