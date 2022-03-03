import axios from "axios";
export const getChatList = async (IsFriend) => {
  try {
    const lists = await axios.get(
      IsFriend && IsFriend == "customer"
        ? "../static/dummyData/chatList.json"
        : "../static/dummyData/chatShopList.json"
    );
    // const lists = await axios.get("https://backend.bellytime.kr/cooltime/mylist");
    console.log(lists.data);
    return lists.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
