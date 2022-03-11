import axios from "axios";
import { axiosInstance } from "../instance";
export const plusChatRoom = async (inviteId, type, roomName) => {
  try {
    // const lists = await axios.get("../static/dummyData/chatList.json");
    const lists = await axiosInstance.post("/chat/create", {
      inviteId,
      type,
      roomName,
    });

    console.log("invite", { inviteId, type, roomName });
    console.log("data", lists);
    // setRoomId(lists.data.roomId);
    return lists.data.roomId;
  } catch (e) {
    console.log(e);
    return [];
  }
};
