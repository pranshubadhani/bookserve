import axios from "axios";
const hostname = "https://bookserve-backend.onrender.com";
axios.defaults.baseURL = hostname;
export default axios;