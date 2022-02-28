function setInterceptors(instance) {
  instance.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      // 요청 보내기 전에 제어할 부분
      return config;
    },
    function (error) {
      // Do something with request error
      // 요청 시 에러 처리
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      if (response.data.accessToken) {
      }
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

  return instance;
}

function createInstance() {
  const instance = axios.create({});

  return setInterceptors(instance);
}

export const instance = createInstance();
//axios 부분을 axios.create()로 생성한 인스턴스로 대체하는 것이 좋다.
//https://velog.io/@kyh196201/HTTP-%ED%97%A4%EB%8D%94-%ED%86%A0%ED%81%B0-%EC%84%A4%EC%A0%95-axios-%EC%9D%B8%ED%84%B0%EC%85%89%ED%84%B0

//https://dev.to/leoarada/handling-error-with-recoil-and-axios-nmh
