import axios from "axios";
export const getFriendWithFood = async (id, setFriendList) => {
  try {
    const lists = await axios.get(
      "../static/dummyData/friendCoolTimeWithFriend.json"
    );
    // const lists = await axios.post(
    //   `https://backend.bellytime.kr/searchby/resultlist`,
    //   data
    // );
    console.log(lists.data);
    setFriendList(lists.data);
    return lists.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
