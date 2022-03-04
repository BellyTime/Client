import axios from "axios";
export const plusChatRoom = async (inviteId, type) => {
  try {
    // const lists = await axios.get("../static/dummyData/chatList.json");
    // const lists = await axios.post("http://3.35.179.18:8080/chat/create", {
    //   inviteId,type
    // });
    console.log({ inviteId, type });
    // setRoomId(lists.data.roomId);
    return "11";
  } catch (e) {
    console.log(e);
    return [];
  }
};
