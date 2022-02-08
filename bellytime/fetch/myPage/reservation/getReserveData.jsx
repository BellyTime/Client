import axios from "axios";
export const getReserveData = async (setReserveData) => {
  try {
    const list = await axios.get("/static/dummyData/reservationData.json");
    console.log(list.data);
    setReserveData(list.data);
  } catch (e) {
    console.log(e);
  }
};
