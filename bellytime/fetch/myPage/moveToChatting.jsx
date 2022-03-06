import axios from "axios";
import { axiosInstance } from "@/fetch/instance";
export const moveToChatting = async (contactId, type) => {
  try {
    console.log({ contactId, type });
    const list = await axiosInstance.get(
      "../../static/dummyData/newChatRoomId.json"
    );
    return list.data;
  } catch (e) {
    console.log(e);
  }
};
