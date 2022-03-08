import axios from "axios";
import { axiosInstance } from "@/fetch/instance";
export const newFriend = async (id) => {
  try {
    console.log([{ friendId: id }]);
    axiosInstance.post("/user/follow/friends", [{ friendId: id }]);
  } catch (e) {
    console.log(e);
  }
};
