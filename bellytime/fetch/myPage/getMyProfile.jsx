import axios from "axios";
import { axiosInstance } from "../instance";
export const getMyProfile = async (setProfileData) => {
  try {
    const list = await axiosInstance.get("/user/myprofile");
    console.log(list.data);
    setProfileData(list.data);
  } catch (e) {
    console.log(e);
  }
};
