import axios from "axios";
import { axiosInstance } from "./instance";
export const register = async ( values ) => {
  const URL = `/join`;
  console.log(values);
  try {
    await axiosInstance.post(URL, values, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (e) {
    console.log(e);
  }
};
