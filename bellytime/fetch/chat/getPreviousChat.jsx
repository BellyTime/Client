import axios from "axios";
import { axiosInstance } from "../instance";
export const getPreviousChat = async (roomId, setAllContent) => {
  try {
    // const lists = await axios.get("../static/dummyData/chatList.json");
    const lists = await axiosInstance.post("/chat/chatlog", {
      roomId,
    });
    console.log("previous", lists.data);
    setAllContent(lists.data);
  } catch (e) {
    console.log(e);
    return [];
  }
};
