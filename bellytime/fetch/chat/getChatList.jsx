import axios from "axios";
export const getChatList = async () => {
  try {
    const lists = await axios.get("../static/dummyData/chatList.json");
    // const lists = await axios.get("https://backend.bellytime.kr/cooltime/mylist");
    console.log(lists.data);
    return lists.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
