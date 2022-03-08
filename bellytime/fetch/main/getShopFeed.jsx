import axios from "axios";
import { axiosInstance } from "../instance";

export const getShopFeed = async (filter, lng, lat) => {
  try {
    console.log(filter, lng, lat);
    let list;
    if (filter == "follow") {
      list = await axiosInstance.get("/feed/list?filter=follow&page=1");
    } else if (filter == "near") {
      list = await axiosInstance.get(
        `/feed/list?filter=nearby&lat=${lat}&lon=${lng}&page=1`
      );
    }
    console.log(list.data);
    return list.data;
  } catch (e) {
    console.log(e);
  }
};
