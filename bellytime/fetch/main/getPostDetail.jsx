import { axiosInstance } from "../instance";

export const getPostDetail = async () => {
  try {
    const list = await axiosInstance.get("/static/dummyData/detailFeed.json");
    console.log(list.data);
    return list.data;
  } catch (e) {
    console.log(e);
  }
};
