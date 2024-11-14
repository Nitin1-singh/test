import axios from "axios";
import { API_URL } from "./constant";
import Cookies from "js-cookie";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Add a request interceptor to include the token in every request
axiosInstance.interceptors.request.use(
  (config) => {
    // Get the token from localStorage (or wherever you store it)
    const token = Cookies.get("auth"); // or use a cookie, Redux, etc.

    // If token exists, set the Authorization header
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
