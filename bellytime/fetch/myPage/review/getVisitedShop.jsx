import axios from "axios";
export const getVisitedShop = async (setVisitedShop) => {
  try {
    const list = await axios.get("../../static/dummyData/visitedShop.json");
    console.log(list.data);
    setVisitedShop(list.data);
  } catch (e) {
    console.log(e);
  }
};
