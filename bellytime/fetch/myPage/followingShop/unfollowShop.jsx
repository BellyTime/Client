import axios from "axios";
import { axiosInstance } from "@/fetch/instance";
export const unfollowShop = async (data) => {
  try {
    await axiosInstance.delete("/user/follow/shop",{data});
    console.log("unfollowFetch", data);
  } catch (e) {
    console.log(e);
  }
};
