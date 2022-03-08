import axios from "axios";
import { axiosInstance } from "../instance";
export const getCoolTime = async () => {
  try {
    // const lists = await axios.get("../static/dummyData/coolTime.json");
    const lists = await axiosInstance.get("/cooltime/mylist");
    console.log(lists.data);
    return lists.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
