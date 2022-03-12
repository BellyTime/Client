import Lottie from "react-lottie-player";

import { settingState } from "../../state/atom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function Redirect() {
  const router = useRouter();
  const [token, setToken] = useRecoilState(settingState);
  useEffect(() => {
    console.log("token");
    setToken((old) => ({ ...old, token: router.query.accessToken }));

    if (token.token) {
      router.push("/");
    }
  }, [token]);
  return <></>;
}

//https://www.npmjs.com/package/react-lottie-player
