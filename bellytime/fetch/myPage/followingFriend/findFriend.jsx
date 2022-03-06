import axios from "axios";
import { axiosInstance } from "@/fetch/instance";
export const findFriend = async (setFindedFriend) => {
  try {
    const list = await axiosInstance.get(
      "../../static/dummyData/findFriend.json"
    );
    console.log(list.data);
    setFindedFriend(list.data);
  } catch (e) {
    console.log(e);
  }
};
