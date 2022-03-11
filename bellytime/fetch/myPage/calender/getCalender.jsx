import axios from "axios";
import { axiosInstance } from "@/fetch/instance";
export const getCalender = async (
  setTodayCheck,
  setCoolTimeData,
  yearAndMonth,
  setCheckFood
) => {
  try {
    // const list = await axios.get("/static/dummyData/calenderlist.json");
    const list = await axiosInstance.post("/user/cal", yearAndMonth);
    setCoolTimeData(list.data.dateList);
    console.log(list);
    if (
      yearAndMonth.year == new Date().getFullYear() &&
      yearAndMonth.month == new Date().getMonth() + 1 &&
      list.data.today
    ) {
      setTodayCheck(list.data.today);
      console.log("today");
      setCheckFood(list.data.today.map(({ foodId, eat }) => ({ foodId, eat })));
    }
  } catch (e) {
    console.log(e);
  }
};
