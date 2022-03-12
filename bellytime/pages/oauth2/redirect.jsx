import Lottie from "react-lottie-player";

import { settingState, userState } from "../../state/atom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function Redirect() {
  const router = useRouter();
  const [setting, setSetting] = useRecoilState(settingState);
  const [user, setUser] = useRecoilState(userState);
  useEffect(() => {
    console.log("token");
    setSetting((old) => ({ ...old, token: router.query.accessToken }));
    setUser((old) => ({
      ...old,
      userId: router.query.userId,
      userNickName: router.query.userNickName,
    }));
    if (router.query.accessToken) {
      router.push("/");
    }
  }, []);
  return <></>;
}

//https://www.npmjs.com/package/react-lottie-player
