import axios from "axios";
import { axiosInstance } from "../instance";
export const getShopWithFood = async (filter, id, lat, lng, setShopList) => {
  try {
    // const lists = await axiosInstance.get(
    //   "../static/dummyData/followingShops.json"
    // );
    let lists;
    if (filter == "follow") {
      lists = await axios.get("../static/dummyData/followingShops.json");
    } else if (filter == "nearby") {
      lists = await axios.get("../static/dummyData/followingShops.json");
    }

    setShopList(lists.data);
    console.log(lists.data);
    return lists.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
