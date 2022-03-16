import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { positionState, mainPageCoolTimeState } from "../../state/atom";
import {
  CoolTimeList,
  ShopList,
  Modal,
  Friend,
  ShopListSection,
} from "../../components";
import Gauge from "../../components/Gauge";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { getFriendWithFood, getShopWithFood } from "../../fetch";
export default function Recommend() {
  const [coolTimeList, setCoolTimeList] = useRecoilState(mainPageCoolTimeState);
  const [position, setPosition] = useRecoilState(positionState);
  const router = useRouter();
  const [friendList, setFriendList] = useState("");
  const [shopList, setShopList] = useState("");
  const [filter, setFilter] = useState("follow");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getFriendWithFood(router.query.id, setFriendList);
  }, [router]);
  const handleClickGauge = (id) => {
    router.push(`/recommend/${id}`);
  };
  const handleClickFeedFilter = (e) => {
    e.preventDefault();
    setFilter(e.target.id);
  };

  return (
    <div>
      <div className="flex">
        {
          // 쿨타임리스트
          coolTimeList &&
            coolTimeList.map(({ foodId, foodName, gauge, foodImg }) => (
              <CoolTimeList
                key={uuidv4()}
                content={{ foodId, foodName, gauge, foodImg }}
                handleClickGauge={(e) => {
                  e.preventDefault();
                  if (foodId !== router.query.id) handleClickGauge(foodId);
                }}
              />
            ))
        }
      </div>
      <div className="flex border" onClick={() => setModal(true)}>
        {
          //음식에따른 친구리스트
          friendList &&
            friendList.map(({ friendId, gauge, name, profileImg }) => (
              <CoolTimeList
                key={uuidv4()}
                content={{
                  foodName: name,
                  foodImg: profileImg,
                  gauge,
                }}
                handleClickGauge={(e) => {}}
              />
            ))
        }
      </div>
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
      <ShopListSection position={position} foodId={router.query.id} />
      {modal && friendList && (
        <Modal
          setModal={() => setModal(false)}
          subject="친구의 쿨타임"
          close={() => setModal(false)}
          content={
            <div>
              {friendList.map(({ friendId, gauge, name, profileImg }) => (
                <Friend
                  key={uuidv4()}
                  nickName={name}
                  profileImg={profileImg}
                  friendId={friendId}
                  handleClickGauge={() => handleClickGauge(foodId)}
                />
              ))}
            </div>
          }
        />
      )}
    </div>
  );
}
