import axios from "axios";
import { axiosInstance } from "../instance";

export const getShopFeed = async (filter, lng, lat) => {
  try {
    console.log(filter, lng, lat);
    const list = await axiosInstance.get("/static/dummyData/feedList.json");
    console.log(list.data);
    return list.data;
  } catch (e) {
    console.log(e);
  }
};
