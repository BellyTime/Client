import axios from "axios";
export const getMyProfile = async (setProfileData) => {
  try {
    const list = await axios.get("/static/dummyData/myprofile.json");
    console.log(list.data);
    setProfileData(list.data);
  } catch (e) {
    console.log(e);
  }
};
