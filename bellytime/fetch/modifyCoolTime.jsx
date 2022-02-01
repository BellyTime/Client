import axios from "axios";
export const modifyCoolTime = async () => {
  try {
    const lists = await axios.post("../static/dummyData/coolTime.json");
    console.log(lists.data);
    return lists.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
