import axios from "axios";
import { axiosInstance } from "@/fetch/instance";
export const unfollowFriend = async (data) => {
  try {
    axiosInstance.delete("/user/follow/friends", {
      data,
    });
    console.log("unfollowFetch", data);
  } catch (e) {
    console.log(e);
  }
};
