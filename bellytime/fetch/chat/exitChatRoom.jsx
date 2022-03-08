import axios from "axios";
export const exitChatRoom = async (chatRoomId) => {
  try {
    // const lists = await axios.delete("/chat/exit", { data: { chatRoomId } });
    
    console.log({ chatRoomId });
    // return lists.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
