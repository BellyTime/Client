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
    config.headers = { Authorization: "Bearer " + setting.token };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
