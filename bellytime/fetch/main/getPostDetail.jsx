import { axiosInstance } from "../instance";

export const getPostDetail = async (postId) => {
  try {
    // const list = await axiosInstance.get("/static/dummyData/detailFeed.json");
    const list = await axiosInstance.get(`/feed/post?postId=${postId}`);
    console.log(list.data);
    return list.data;
  } catch (e) {
    console.log(e);
  }
};
