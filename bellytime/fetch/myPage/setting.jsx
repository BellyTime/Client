import axios from "axios";

export const fetchSetting = async (data) => {
  try {
    const { alarm, duration, hi } = data;
    // const lists = await axios.post(
    //   "https://backend.bellytime.kr/cooltime/setting",
    //   data
    // );
    console.log("setting", { alarm, duration });
  } catch (e) {
    console.log(e);
  }
};
