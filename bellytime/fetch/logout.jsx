import axios from "axios";
import { axiosInstance } from "./instance";

export const logout = async () => {
  const URL = `/log-out`;
  try {
    await axiosInstance.delete(URL);
    // console.log(response.data.accessToken);
    // window.localStorage.setItem("accessToken", response.data.accessToken);
  } catch (e) {
    console.log(e);
  }
};
