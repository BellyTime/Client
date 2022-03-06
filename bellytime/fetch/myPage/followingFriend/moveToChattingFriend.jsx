import axios from "axios";
import { axiosInstance } from "@/fetch/instance";
export const moveToChattingFriend = async (friendId) => {
    try {
        console.log({ friendId });
    const list = await axiosInstance.get(
      "../../static/dummyData/newChatRoomId.json"
    );
    return list.data;
  } catch (e) {
    console.log(e);
  }
};
