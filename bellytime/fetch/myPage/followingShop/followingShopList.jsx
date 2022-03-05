import axios from "axios";
import { axiosInstance } from "@/fetch/instance";
export const followingShopList = async (setFollowingShops) => {
  try {
    const list = await axiosInstance.get(
      "../../static/dummyData/followingShops.json"
    );
    console.log(list.data);
    setFollowingShops(list.data);
  } catch (e) {
    console.log(e);
  }
};
