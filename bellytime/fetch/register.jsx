import axios from "axios";

export const register = async ( values ) => {
  const URL = `/join`;
  console.log(values);
  try {
    await axios.post(URL, values, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.log(e);
  }
};
