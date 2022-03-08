import axios from "axios";
import { axiosInstance } from "../instance";
export const searchFood = async (data, setSearchData) => {
  try {
    // const lists = await axios.get("../static/dummyData/coolTime.json");
    // setSearchData([{foodId:2,foodName:"바나나"}]);
    if (data) {

      const res = await axiosInstance.post("/searchfood", {
        search: data,
      });
      setSearchData(res.data);
    }
  } catch (e) {
    console.log(e);
  }
};
