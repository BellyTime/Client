import axios from "axios";
import { axiosInstance } from "../instance";
export const plusChatRoom = async (inviteId, type) => {
  try {
    // const lists = await axios.get("../static/dummyData/chatList.json");
    const lists = await axiosInstance.post("/chat/create", {
      inviteId,
      type,
    });

    console.log("invite", { inviteId, type });
    console.log(lists);
    // setRoomId(lists.data.roomId);
    return lists.data.roomId;
  } catch (e) {
    console.log(e);
    return [];
  }
};
