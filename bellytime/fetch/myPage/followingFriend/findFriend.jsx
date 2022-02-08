import axios from "axios";
export const findFriend = async (setFindedFriend) => {
  try {
    const list = await axios.get(
      "../../static/dummyData/findFriend.json"
    );
    console.log(list.data);
      setFindedFriend(list.data);
  } catch (e) {
    console.log(e);
  }
};
