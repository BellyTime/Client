import axios from "axios";
import { axiosInstance } from "./instance";
export const login = async (values) => {
  const URL = `/login`;
  try {
    const response = await axiosInstance.post(URL, values, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    console.log(response);
    console.log(response.data.accessToken);
    window.localStorage.setItem("accessToken", response.data.accessToken);
    return response.data.accessToken;
  } catch (e) {
    console.log(e);
  }
};
