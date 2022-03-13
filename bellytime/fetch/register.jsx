import axios from "axios";
import { loginInstance } from "./instance/loginInstance";
export const register = async ({
  name,
  email,
  password,
  nickname,
  phoneNumber,
  profileImg,
}) => {
  const URL = `/join`;

  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("nickname", nickname);
  formData.append("phoneNumber", phoneNumber);
  formData.append("profileImg", profileImg);

  try {
    await loginInstance.post(URL, formData, {
      "content-type": "multipart/form-data",
    });
  } catch (e) {
    console.log(e);
  }
};
