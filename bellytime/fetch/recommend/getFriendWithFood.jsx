import axios from "axios";
import { axiosInstance } from "../instance";
export const getFriendWithFood = async (id, setFriendList) => {
  try {
    // const lists = await axios.get(
    //   "../static/dummyData/friendCoolTimeWithFriend.json"
    // );
    const lists = await axiosInstance.get(`/cooltime/followList?foodId=${id}`);
    console.log(lists.data);
    setFriendList(lists.data);
    return lists.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
