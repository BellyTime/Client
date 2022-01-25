import axios from "axios";

export const login = async (values) => {
  const URL = `/login`;
  try {
    const response = await axios.post(URL, values, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    console.log(response.data.accessToken);
    window.localStorage.setItem("accessToken", response.data.accessToken);
  } catch (e) {
    console.log(e);
  }
};
