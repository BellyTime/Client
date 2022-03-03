import axios from "axios";
export const getPreviousChat = async (roomId, setAllContent) => {
  try {
    // const lists = await axios.get("../static/dummyData/chatList.json");
    const lists = await axios.post("http://3.35.179.18:8080/chat/chatlog", {
      roomId,
    });
    console.log(lists.data);
    setAllContent(lists.data);
  } catch (e) {
    console.log(e);
    return [];
  }
};
