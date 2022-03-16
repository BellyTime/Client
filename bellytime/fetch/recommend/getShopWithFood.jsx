import axios from "axios";
import { axiosInstance } from "../instance";
export const getShopWithFood = async (filter, foodId, lat, lng, page) => {
  console.log(filter, foodId, lat, lng, page);
  try {
    let lists;
    if (filter == "follow") {
      lists = await axiosInstance.get(
        `/cooltime/shopList?foodId=${foodId}&filter=${filter}&page=${page}`
      );
    } else if (filter == "nearby") {
      lists = await axiosInstance.get(
        `/cooltime/shopList?foodId=${foodId}&filter=${filter}&lat=${lat}&lon=${lng}&page=${page}`
      );
    }

    return lists.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
