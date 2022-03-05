import axios from "axios";
import { axiosInstance } from "@/fetch/instance";
export const followingFriendList = async (setFollowingFriends) => {
  try {
    const list = await axiosInstance.get(
      "../../static/dummyData/followingFriends.json"
    );
    console.log(list.data);
    setFollowingFriends(list.data);
    return list.data;
  } catch (e) {
    console.log(e);
  }
};
