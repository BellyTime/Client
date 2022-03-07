import axios from "axios";
export const getShopList = async (name, sortBy) => {
  try {
    const lists = await axios.get("../static/dummyData/resultList.json");
    // const lists = await axios.post(
    //   `https://backend.bellytime.kr/searchby/resultlist`,
    //   data
    // );
    console.log({ name, sortBy });
    return lists.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
