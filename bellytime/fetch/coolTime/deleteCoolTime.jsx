import axios from "axios";
import { axiosInstance } from "../instance";
export const deleteCoolTime = async (data) => {
  // console.log(data);
  console.log(data);
  try {
    // const lists = await axios.get("../static/dummyData/coolTime.json");
    axiosInstance.delete("/cooltime/setting", {
      data: data,
      withCredentials: true,
    });
  } catch (e) {
    console.log(e);
  }
};
