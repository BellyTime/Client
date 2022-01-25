import axios from "axios";
import { useEffect } from "react";
const headers = new Headers({
  "Content-Type": "application/json",
});
const Check = () => {
  useEffect(() => {
    console.log(
      "access : ",
      window.localStorage.getItem("accessToken"),
      "refresh:",
      document.cookie
    );
    if (window.localStorage.getItem("accessToken")) {
      headers.append(
        "Authorization",
        "Bearer " + window.localStorage.getItem("accessToken")
      );
    }
  }, []);
  const check = async () => {
    const checkitout = await axios.get("/check", {
      headers: headers,
      withCredentials: true,
    });
    console.log(checkitout);
  };
  return <button onClick={() => check()}>체크버튼</button>;
};

export default Check;
