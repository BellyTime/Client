import axios from "axios";
export const deleteRecentSearch = async (recentDel) => {
  try {
    // await axios.delete("../static/dummyData/recentSearchList.json",{data:{recentDel}});
    // const lists = await axios.get(
    //   `https://backend.bellytime.kr/searchby/realpop`
    // );
    console.log({ recentDel });
  } catch (e) {
    console.log(e);
    return [];
  }
};

//5분간격 요청.
