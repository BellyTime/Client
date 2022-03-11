import axios from "axios";
import { axiosInstance } from "../instance";
export const getShopList = async (name, sortBy) => {
  try {
    // const lists = await axios.get("../static/dummyData/resultList.json");
    const lists = await axiosInstance.post(
      `https://backend.bellytime.kr/searchby/resultlist`,
      { name, sortBy }
    );
    console.log({ name, sortBy });
    return lists.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
