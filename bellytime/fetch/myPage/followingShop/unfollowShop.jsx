import axios from "axios";
import { axiosInstance } from "@/fetch/instance";
export const unfollowShop = async (data) => {
  try {
    await axiosInstance.post(
      "https://backend.bellytime.kr/cooltime/setting",
      data
    );
    console.log("unfollowFetch", data);
  } catch (e) {
    console.log(e);
  }
};
