import axios from "axios";
export const followingShopList = async (setFollowingShops) => {
  try {
    const list = await axios.get("../../static/dummyData/followingShops.json");
    console.log(list.data);
    setFollowingShops(list.data);
  } catch (e) {
    console.log(e);
  }
};
