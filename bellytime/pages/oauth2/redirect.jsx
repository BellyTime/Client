import Lottie from "react-lottie-player";

import { settingState, userState } from "../../state/atom";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function Redirect() {
  const router = useRouter();
  const [setting, setSetting] = useRecoilState(settingState);
  const [user, setUser] = useRecoilState(userState);
  // const [query, setQuery] = useState({
  //   accessToken: null,
  //   userId: null,
  //   userNickName: null,
  // });
  // useEffect(() => {
  //   setQuery({accessToken:})
  // }, []);
  useEffect(() => {
    console.log("token");
    console.log(
      router.query.accessToken,
      router.query.userId,
      router.query.userNickName
    );
    setSetting((old) => ({ ...old, token: router.query.accessToken }));
    setUser((old) => ({
      ...old,
      userId: router.query.userId,
      userNickName: router.query.userNickName,
    }));
    if (router.query.accessToken) {
      router.push("/");
    }
  }, [router]);

  return <></>;
}

//https://www.npmjs.com/package/react-lottie-player
