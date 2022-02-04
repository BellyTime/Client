import axios from "axios";

export const searchFood = async (data, setSearchData) => {
  try {
    // const lists = await axios.get("../static/dummyData/coolTime.json");
    if (data) {
      const res = await axios.post("https://backend.bellytime.kr/searchfood", {
        search: data,
      });

      setSearchData(res.data);
    }
  } catch (e) {
    console.log(e);
  }
};
