import styles from "../styles/Home.module.css";
import "tailwindcss/tailwind.css";
import { DurationModify, Link, Address, Modal, AlertModal } from "components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Gauge from "@/components/Gauge";
import { getCoolTime,getNearShopList } from "@/fetch";
import { CoolTimeList } from "components";
import { v4 as uuidv4 } from "uuid";
import { positionState } from "../state/atom";
import { useRecoilState } from "recoil";
export default function Home() {
  const router = useRouter();
  const [coolTimeList, setCoolTimeList] = useState("");
  const [modal, setModal] = useState(false);
  const [position, setPosition] = useRecoilState(positionState);
  const [alert, setAlert] = useState(false);
  const [nearShopList, setNearShopList] = useState("");
  // useEffect(() => {
  //   if (!document.cookie) router.push("/memberPage");
  // }, []);
  const fetchCoolTime = async () => {
    const fetchList = await getCoolTime();
    setCoolTimeList(fetchList);
  };

  const fetchNearShopList = async () => {
    const fetchList = await getNearShopList();
    setNearShopList(fetchList);
  }
  useEffect(() => {
    fetchCoolTime();
    fetchNearShopList();
  }, []);

  const handleClickGauge = () => {};

  return (
    <div>
      <div>
        {position.address ? `주소: ${position.address}` : "주소를 설정하세요"}
        <button onClick={() => setModal(true)}>주소설정</button>
      </div>
      {modal && (
        <Modal
          subject="주소설정"
          setModal={() => setModal(false)}
          close={() => setModal(false)}
          content={<Address setAlert={setAlert} alert={alert} />}
        />
      )}

      <div className="flex">
        {coolTimeList &&
          coolTimeList.map(({ foodId, foodName, gauge, foodImg }) => (
            <CoolTimeList
              key={uuidv4()}
              content={{ foodId, foodName, gauge, foodImg }}
              handleClickGauge={handleClickGauge}
            />
          ))}
        {alert && (
          <AlertModal
            content="현재 위치를 가져올 수 없습니다"
            setAlert={setAlert}
            func={() => {}}
          />
        )}
      </div>
    </div>
  );
}
//https://blog.naver.com/PostView.naver?blogId=jiwow34&logNo=221770170411&from=search&redirect=Log&widgetTypeCall=true&directAccess=false
//https://postcode.map.daum.net/guide
