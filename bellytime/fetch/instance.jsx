import axios from "axios";
import { settingState } from "@/state/atom";
import { getRecoil } from "recoil-nexus";
export const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use(
  function (config) {
    const setting = getRecoil(settingState);
    // Do something before request is sent
    config.baseURL = "https://backend.bellytime.kr/";
    config.params = { ...config.params, timestamp: Date.now() };
    // config.headers = { Authorization: "Bearer " + setting.token };
    config.withCredentials = true;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // if (response.data.accessToken) {
    //   //리코일에 저장하고,
    //   //요청다시보내고
    //   axiosInstance.defaults.headers = {
    //     Authorization: "Bearer " + response.data.accessToken,
    //   };
    //   return axiosInstance.request(config);
    // }
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

//https://stackoverflow.com/questions/51563821/axios-interceptors-retry-original-request-and-access-original-promise
