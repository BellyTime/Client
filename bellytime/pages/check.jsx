import axios from "axios";
import { useEffect, useState } from "react";

const Check = () => {
  const [accessToken, setToken] = useState("");
  useEffect(() => {
    console.log(
      "access : ",
      window.localStorage.getItem("accessToken"),
      "refresh:",
      document.cookie
    );
    if (window.localStorage.getItem("accessToken")) {
      setToken(window.localStorage.getItem("accessToken"));
    }
  }, []);
  const check = async () => {
    const checkitout = await axios.get("https://backend.bellytime.kr/check")
    //   {
    //   headers: {
    //     Authorization: "Bearer " + accessToken,
    //   },
    //   withCredentials: true,
    // });
    console.log(checkitout);
  };
  return <button onClick={() => check()}>체크버튼</button>;
};

export default Check;
