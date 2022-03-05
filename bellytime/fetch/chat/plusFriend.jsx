import axios from "axios";
export const plusFriend = async (inviteId,roomId) => {
  try {
    // const lists = await axios.delete("/chat/exit", { data: { inviteId } });
    console.log({ inviteId, roomId });
    return { inviteId, roomId };
  } catch (e) {
    console.log(e);
    return [];
  }
};
