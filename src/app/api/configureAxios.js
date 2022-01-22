import Axios from "./axios";
const configureAxios = () => {
  Axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  Axios.defaults.headers.get["Accept"] = "application/json";
  Axios.defaults.headers.post["Accept"] = "application/json";
  Axios.defaults.headers.put["Accept"] = "application/json";
  Axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });
};
export default configureAxios;