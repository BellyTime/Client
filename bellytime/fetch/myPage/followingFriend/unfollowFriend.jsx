import axios from "axios";
export const unfollowFriend = async (data) => {
  try {
    // const lists = await axios.delete(
    //   "https://backend.bellytime.kr/cooltime/setting",
    //   {data}
    // );
    console.log("unfollowFetch", data);
  } catch (e) {
    console.log(e);
  }
};
