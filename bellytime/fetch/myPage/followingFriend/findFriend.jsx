import axios from "axios";
import { axiosInstance } from "@/fetch/instance";
export const findFriend = async (setFindedFriend, value) => {
  try {
    // const list = await axiosInstance.get(
    //   "../../static/dummyData/findFriend.json"
    // );
    const list = await axiosInstance.post("/user/friends/search", {
      email: value,
    });
    console.log(list.data);
    setFindedFriend(list.data);
  } catch (e) {
    console.log(e);
  }
};
