import axios from "axios";
export const getShopList = async (data) => {
  try {
    // const lists = await axios.get("../static/dummyData/coolTime.json");
    const lists = await axios.post(
      `https://backend.bellytime.kr/searchby/resultlist`,
      data
    );
    console.log(lists.data);
    return lists.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
