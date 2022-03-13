import axios from "axios";
import { axiosInstance } from "./instance";
import { loginInstance } from "./instance/loginInstance";
export const logout = async () => {
  const URL = `/logout`;
  try {
    await loginInstance.get(URL, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    // console.log(response.data.accessToken);
    // window.localStorage.setItem("accessToken", response.data.accessToken);
  } catch (e) {
    console.log(e);
  }
};
