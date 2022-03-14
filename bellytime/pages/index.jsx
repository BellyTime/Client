import styles from "../styles/Home.module.css";
import "tailwindcss/tailwind.css";
import { Address, Modal, AlertModal } from "components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  getCoolTime,
  getShopFeed,
  getPopularShopList,
  fetchSetting,
} from "@/fetch";
import { CoolTimeList, ShopList, Feed } from "components";
import { v4 as uuidv4 } from "uuid";
import {
  positionState,
  mainPageCoolTimeState,
  settingState,
} from "../state/atom";

import getCookie from "../util/getCookie";
import { useRecoilState } from "recoil";
export default function Home() {
  const router = useRouter();
  const [coolTimeList, setCoolTimeList] = useRecoilState(mainPageCoolTimeState);
  const [modal, setModal] = useState(false);
  const [position, setPosition] = useRecoilState(positionState);
  const [alert, setAlert] = useState(false);
  const [filter, setFilter] = useState("follow");
  const [shopFeed, setShopFeed] = useState("");
  const [popularShopList, setPopularShopList] = useState(null);
  const [setting, setSetting] = useRecoilState(settingState);
  useEffect(() => {
    // if (!setting.token) router.push("/memberPage");
    //https://www.tabnine.com/academy/javascript/how-to-get-cookies/
    //https://www.codegrepper.com/code-examples/javascript/get+cookie+by+name+javascript

    return () => {
      setShopFeed("");
    };
  }, []);
  const fetchCoolTime = async () => {
    const fetchList = await getCoolTime();
    setCoolTimeList(fetchList);
  };

  const fetchShopFeed = async () => {
    const { lng, lat } = position;
    const fetchList = await getShopFeed(filter, lng, lat);
    setShopFeed(fetchList);
  };

  const fetchPopularShopList = async () => {
    const fetchList = await getPopularShopList();
    setPopularShopList(fetchList);
  };

  const handleClickFeedFilter = (e) => {
    e.preventDefault();
    setFilter(e.target.id);
  };
  const handleClickGauge = (foodId) => {
    router.push(`/recommend/${foodId}`);
  };
  useEffect(() => {
    fetchCoolTime();
    fetchPopularShopList();
  }, []);

  useEffect(() => {
    if (filter == "follow" || (filter == "near" && position.lat))
      fetchShopFeed();
  }, [filter]);

  return (
    <div>
      <div>
        {position.address ? `주소: ${position.address}` : "주소를 설정하세요"}
        <button onClick={() => setModal(true)}>주소설정</button>
      </div>
      <button onClick={() => router.push("/mypage/calender")}>
        쿨타임기록하기
      </button>
      {
        //주소설정
        modal && (
          <Modal
            subject="주소설정"
            setModal={() => setModal(false)}
            close={() => setModal(false)}
            content={<Address setAlert={setAlert} alert={alert} />}
          />
        )
      }

      <div className="flex">
        {
          // 쿨타임리스트
          coolTimeList &&
            coolTimeList.map(({ foodId, foodName, gauge, foodImg }) => (
              <CoolTimeList
                key={uuidv4()}
                content={{ foodId, foodName, gauge, foodImg }}
                handleClickGauge={() => handleClickGauge(foodId)}
              />
            ))
        }
      </div>
      {alert && (
        <AlertModal
          content="현재 위치를 가져올 수 없습니다"
          setAlert={setAlert}
          func={() => {}}
        />
      )}
      <p>현재 인기있는 가게</p>
      {
        //인기가게 불러오기
        popularShopList &&
          popularShopList.map((content) => (
            <ShopList content={content} key={uuidv4()} />
          ))
      }
      <div>
        <button id="follow" onClick={handleClickFeedFilter}>
          구독
        </button>
        {position?.lat && (
          <button id="near" onClick={handleClickFeedFilter}>
            근처
          </button>
        )}
      </div>
      <div className="flex">
        {shopFeed &&
          shopFeed?.map((content) => (
            <Feed key={uuidv4()} router={router} feedContent={content} />
          ))}
      </div>
    </div>
  );
}
//https://blog.naver.com/PostView.naver?blogId=jiwow34&logNo=221770170411&from=search&redirect=Log&widgetTypeCall=true&directAccess=false
//https://postcode.map.daum.net/guide
//https://react-kakao-maps-sdk.jaeseokim.dev/docs/sample/overlay/basicInfoWindow
//https://iamawebdeveloper.tistory.com/44

//https://github.com/postcss/autoprefixer/issues/1258
