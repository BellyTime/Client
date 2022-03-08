import { axiosInstance } from "../instance";

export const getPopularShopList = async () => {
  try {
    // const list = await axiosInstance.get(
    //   "/static/dummyData/followingShops.json"
    // );
    const list = await axiosInstance.get("/shop/popular");
    console.log(list.data);
    return list.data;
  } catch (e) {
    console.log(e);
  }
};
