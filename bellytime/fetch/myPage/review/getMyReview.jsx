import axios from "axios";
export const getMyReview = async (reservationId) => {
  try {
    const list = await axios.get("../../static/dummyData/myReview.json");
    console.log(list.data);
    return list.data;
  } catch (e) {
    console.log(e);
  }
};
