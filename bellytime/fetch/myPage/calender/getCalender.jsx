import axios from "axios";
export const getCalender = async (setTodayCheck,setCoolTimeData) => {
  try {
    const list = await axios.get("/static/dummyData/calenderlist.json");
    console.log(list);
      setTodayCheck(list.data.flag);
      setCoolTimeData(list.data.dateList);
  } catch (e) {
    console.log(e);
  }
};
