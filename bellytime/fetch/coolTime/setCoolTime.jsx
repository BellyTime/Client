import axios from "axios";
import { axiosInstance } from "../instance";
export const setCoolTime = async (data) => {
  try {
    // const lists = await axios.post(
    //   "https://backend.bellytime.kr/cooltime/setting",data
    // );
    console.log(data);
    const lists = await axiosInstance.post("/cooltime/setting", data);
    console.log(lists.data);
  } catch (e) {
    console.log(e);
  }
};
