import axios from "axios";
export const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.baseURL = "http://3.35.179.18:8080";
    config.params = { ...config.params, timestamp: Date.now() };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
