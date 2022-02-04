import axios from "axios";
export const deleteCoolTime = async (data) => {
  console.log(data);
  try {
    // const lists = await axios.get("../static/dummyData/coolTime.json");

    const lists = await axios.delete(
      "https://backend.bellytime.kr/cooltime/setting",
      { data: data, withCredentials: true }
    );
  } catch (e) {
    console.log(e);
  }
};
