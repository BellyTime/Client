import axios from "axios";
import { axiosInstance } from "../instance";

export const getShopFeed = async (filter, lng, lat, page) => {
  try {
    console.log(filter, lng, lat, page);
    let list;
    if (filter == "follow") {
      list = await axiosInstance.get(`/feed/list?filter=follow&page=${page}`);
    } else if (filter == "near") {
      list = await axiosInstance.get(
        `/feed/list?filter=nearby&lat=${lat}&lon=${lng}&page=${page}`
      );
    }
    console.log(list.data);
    return list.data;
  } catch (e) {
    console.log(e);
  }
};
