import axios from "axios";
import { axiosInstance } from "../instance";
export const deleteRecentSearch = async (recentDel) => {
  try {
    await axiosInstance.delete("/searchby/recent", { data: { recentDel } });
    // const lists = await axios.get(
    //   `https://backend.bellytime.kr/searchby/realpop`
    // );
    console.log({ recentDel });
  } catch (e) {
    console.log(e);
    return [];
  }
};

//5분간격 요청.
