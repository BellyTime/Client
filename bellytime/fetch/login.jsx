import axios from "axios";
import { loginInstance } from "./instance/loginInstance";
export const login = async (values) => {
  const URL = `/login`;
  try {
    const response = await loginInstance.post(URL, values);
    console.log("response", response.data);
    // console.log(response.data.accessToken);
    // window.localStorage.setItem("accessToken", response.data.accessToken);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
