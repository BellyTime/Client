import axios from "axios";
export const getSearchWords = async (data, setSearchData) => {
  try {
    const lists = await axios.get("../static/dummyData/searchList.json");
    // const lists = await axios.post(
    //   `https://backend.bellytime.kr/searchby/name/{name}`,data
    // );
    console.log(lists.data);
    setSearchData(lists.data);
    return lists.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
