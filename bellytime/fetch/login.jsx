import axios from "axios";

export const login = async ({ values }) => {
  const URL = `/login`;
  try {
    await axios.post(URL, values, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (e) {
    console.log(e);
  }
};
