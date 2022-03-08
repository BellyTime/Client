import axios from "axios";
import { axiosInstance } from "../instance";
export const getChatList = async (IsFriend, setChatList) => {
  try {
    // const lists = await axiosInstance.get(
    //   IsFriend && IsFriend == "customer"
    //     ? "../static/dummyData/chatList.json"
    //     : "../static/dummyData/chatShopList.json"
    // );
    const lists = await axiosInstance.get(
      IsFriend && IsFriend == "customer"
        ? "/chat/list/friend"
        : "/chat/list/shop"
    );
    console.log(lists.data);
    setChatList(lists.data);
    return lists.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
