import axios from "axios";
import { axiosInstance } from "../instance";
export const getShopWithFood = async (filter, id, setShopList) => {
  try {
    const lists = await axiosInstance.get(
      "../static/dummyData/followingShops.json"
    );
    // const lists = await axios.post(
    //   `https://backend.bellytime.kr/searchby/resultlist`,
    //   data
    // );
    setShopList(lists.data);
    console.log(lists.data);
    return lists.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
