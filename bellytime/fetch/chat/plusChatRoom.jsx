import axios from "axios";
import { axiosInstance } from "../instance";
export const plusChatRoom = async (inviteId, type) => {
  try {
    // const lists = await axios.get("../static/dummyData/chatList.json");
    const lists = await axiosInstance.post("/chat/create", {
      inviteId,
      type,
    });

    console.log({ inviteId, type });
    // setRoomId(lists.data.roomId);
    return "11";
  } catch (e) {
    console.log(e);
    return [];
  }
};
