import axios from "axios";
import { axiosInstance } from "../instance";
export const getNearShopList = async () => {
  try {
    const list = await axiosInstance.get("/static/dummyData/calenderlist.json");
   return list.data
    
  } catch (e) {
    console.log(e);
  }
};
