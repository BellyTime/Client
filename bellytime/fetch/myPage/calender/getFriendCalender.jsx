import axios from "axios";
import { axiosInstance } from "@/fetch/instance";
export const getFriendCalender = async (
  friendId,
  setCoolTimeData,
  yearAndMonth
) => {
  try {
    console.log(friendId);
    // const list = await axios.get("/static/dummyData/calenderlist.json");
    const list = await axiosInstance.post("/cooltime/cal", {
      friendId,
      ...yearAndMonth,
    });
    setCoolTimeData(list.data.dateList);
    console.log(list);
  } catch (e) {
    console.log(e);
  }
};
