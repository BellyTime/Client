import axios from "axios";
import { axiosInstance } from "../instance";
export const getPreviousChat = async (roomId, page) => {
  try {
    console.log(roomId, page);
    // const lists = await axios.get("../static/dummyData/chatList.json");
    const lists = await axiosInstance.post(`/chat/chatlog?page=${page}`, {
      roomId,
    });
    console.log("previous", lists.data);
    return lists.data
  } catch (e) {
    console.log(e);
    return [];
  }
};
