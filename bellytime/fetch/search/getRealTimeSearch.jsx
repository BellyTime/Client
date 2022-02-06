import axios from "axios";
export const getRealTimeSearch = async () => {
  try {
    // const lists = await axios.get("../static/dummyData/coolTime.json");
    const lists = await axios.get(
      `https://backend.bellytime.kr/searchby/realpop`
    );
    console.log(lists.data);
    return lists.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

//5분간격 요청.