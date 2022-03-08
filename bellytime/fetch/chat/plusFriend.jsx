import axios from "axios";
import { axiosInstance } from "../instance";
export const plusFriend = async (inviteId, roomId) => {
  try {
    const lists = await axiosInstance.post("/chat/add/friend", {
      inviteId,
      roomId,
    });
    console.log({ inviteId, roomId });
    return { inviteId, roomId };
  } catch (e) {
    console.log(e);
    return [];
  }
};
