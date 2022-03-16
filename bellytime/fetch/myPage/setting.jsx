import axios from "axios";
import { axiosInstance } from "../instance";
export const fetchSetting = async (data) => {
  try {
    const { alarm, duration } = data;
    // const lists = await axios.post(
    //   "https://backend.bellytime.kr/cooltime/setting",
    //   data
    // );
    await axiosInstance.post("/user/setting", {
      alarm,
      duration,
    });
    console.log("setting", data);
  } catch (e) {
    console.log(e);
  }
};
