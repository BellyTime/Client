import axios from "axios";
export const getCanceledData = async (setReserveData) => {
  try {
    const list = await axios.get("/static/dummyData/canceledData.json");
    console.log(list.data);
    setReserveData(list.data);
  } catch (e) {
    console.log(e);
  }
};
