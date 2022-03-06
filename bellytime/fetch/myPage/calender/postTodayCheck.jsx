import axios from "axios";
export const postTodayCheck = async (data) => {
  try {
    // const lists = await axios.post(
    //   "https://backend.bellytime.kr/cooltime/setting",
    //   data
    // );
    console.log("postToday", data);
  } catch (e) {
    console.log(e);
  }
};
