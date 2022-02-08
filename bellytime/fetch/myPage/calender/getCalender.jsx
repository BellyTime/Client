import axios from "axios";
export const getCalender = async (
  setTodayCheck,
  setCoolTimeData,
  yearAndMonth,
  setCheckFood
) => {
  try {
    const list = await axios.get("/static/dummyData/calenderlist.json");
    setCoolTimeData(list.data.dateList);

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
