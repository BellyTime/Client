import axios from "axios";
import { axiosInstance } from "../instance";
export const exitChatRoom = async (chatRoomId) => {
  console.log("chatRoomId", chatRoomId);
  try {
    await axiosInstance.post("/chat/exit", { chatRoomId });
    console.log({ chatRoomId });
  } catch (e) {
    console.log(e);
    return [];
  }
};
