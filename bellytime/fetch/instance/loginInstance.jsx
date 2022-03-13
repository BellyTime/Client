import axios from "axios";
export const loginInstance = axios.create({});

loginInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.baseURL = "https://backend.bellytime.kr/";
    config.params = { ...config.params, timestamp: Date.now() };

    config.withCredentials = true;

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

loginInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // if (response.data.accessToken) {
    //   //리코일에 저장하고,
    //   //요청다시보내고
    //   // loginInstance.defaults.headers = {
    //   //   Authorization: "Bearer " + response.data.accessToken,
    //   // };
    // }
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
