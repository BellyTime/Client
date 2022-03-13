import axios from "axios";
import { axiosInstance } from "./instance";

export const logout = async () => {
  const URL = `/logout`;
  try {
    await axios.get(URL);
    // console.log(response.data.accessToken);
    // window.localStorage.setItem("accessToken", response.data.accessToken);
  } catch (e) {
    console.log(e);
  }
};
