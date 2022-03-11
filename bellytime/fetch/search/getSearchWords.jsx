import axios from "axios";
export const getSearchWords = async (data, setSearchData) => {
  try {
    // const lists = await axios.get("../static/dummyData/searchList.json");\
    console.log(data);
    const lists = await axios.get(
      `https://backend.bellytime.kr/searchby/name/${data}`
    );
    console.log(lists.data);
    setSearchData(lists.data.searchResult);
    return lists.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
