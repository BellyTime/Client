import axios from "axios";
import { loginInstance } from "./instance/loginInstance";
export const register = async (values) => {
  const URL = `/join`;
  console.log(values);
  try {
    await loginInstance.post(URL, values);
  } catch (e) {
    console.log(e);
  }
};
