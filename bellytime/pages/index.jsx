import styles from "../styles/Home.module.css";
import "tailwindcss/tailwind.css";
import { DurationModify, Link } from "components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Gauge from "@/components/Gauge";
import { getCoolTime } from "@/fetch";
import { CoolTimeList } from "components";
import { v4 as uuidv4 } from "uuid";
import { defaultMaxListeners } from "events";
export default function Home() {
  const router = useRouter();
  const [coolTimeList, setCoolTimeList] = useState("");
  // useEffect(() => {
  //   if (!document.cookie) router.push("/memberPage");
  // }, []);
  const fetching = async () => {
    const fetchList = await getCoolTime();
    setCoolTimeList(fetchList);
  };
  const [address, setAddress] = useState("");
  useEffect(() => {
    fetching();
  }, []);

  const handleClickGauge = () => {};
  const handleAddressButton = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setAddress({ long: pos.coords.longitude, lat: pos.coords.latitude });
      });
      new daum.Postcode({
        oncomplete: (data) => {
          console.log(data);
          setAddress((old) => ({ ...old, roadAddress: data.roadAddress }));
        },
        theme: {
          bgColor: "#ECECEC", //바탕 배경색
          searchBgColor: "#FFFFFF", //검색창 배경색
          contentBgColor: "#FFFFFF", //본문 배경색(검색결과,결과없음,첫화면,검색서제스트)
          pageBgColor: "#FFFFFF", //페이지 배경색
          textColor: "#333333", //기본 글자색
          queryTextColor: "#222222", //검색창 글자색
          postcodeTextColor: "#FA4256", //우편번호 글자색
          emphTextColor: "#008BD3", //강조 글자색
          outlineColor: "#E0E0E0", //테두리
        },
      }).open();
    } else {
      alert("주소설정불가!");
    }
  };
  return (
    <div className="flex">
      <div>
        {address ? `주소: ${address.roadAddress}` : "주소를 설정하세요"}
        <button onClick={handleAddressButton}>주소설정</button>
      </div>

      {coolTimeList &&
        coolTimeList.map(({ foodId, foodName, gauge, foodImg }) => (
          <CoolTimeList
            key={uuidv4()}
            content={{ foodId, foodName, gauge, foodImg }}
            handleClickGauge={handleClickGauge}
          />
        ))}
    </div>
  );
}
