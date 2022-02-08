import axios from "axios";
export const getWaitingData = async (setReserveData) => {
  try {
    const list = await axios.get("/static/dummyData/waitingData.json");
    console.log(list.data);
    setReserveData(list.data);
  } catch (e) {
    console.log(e);
  }
};
