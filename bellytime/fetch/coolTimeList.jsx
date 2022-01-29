import axios from "axios";
export const fetchCoolTime = async () => {
  try {
      const lists = await axios.get("../static/dummyData/coolTime.json");
      console.log(lists.data);
    return lists.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
