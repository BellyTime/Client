import axios from "axios";
import { axiosInstance } from "@/fetch/instance";
export const followShop = async (data) => {
  try {
    await axiosInstance.post("/user/follow/shop", data);
    console.log("followFetch", data);
  } catch (e) {
    console.log(e);
  }
};
