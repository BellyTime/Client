import axios from "axios";
export const followingFriendList = async (setFollowingFriends) => {
  try {
    const list = await axios.get("../../static/dummyData/followingFriends.json");
    console.log(list.data);
    setFollowingFriends(list.data);
  } catch (e) {
    console.log(e);
  }
};
