import axios from "axios";
import { axiosInstance } from "../instance";
export const getRecentSearch = async (setRecent) => {
  try {
    // const lists = await axios.get("../static/dummyData/recentSearchList.json");
    const lists = await axiosInstance.get(`/searchby/recent`);
    console.log(lists.data.recent);
    setRecent(lists.data.recent);
    return lists.data.recent;
  } catch (e) {
    console.log(e);
    return [];
  }
};

//5분간격 요청.
