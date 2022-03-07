import { useRouter } from "next/router";
import { useEffect } from "react";
import { mainPageCoolTimeState } from "../../state/atom";
import { CoolTimeList } from "../../components";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
export default function Recommend() {
  const [coolTimeList, setCoolTimeList] = useRecoilState(mainPageCoolTimeState);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    console.log(id);
  }, []);

  const handleClickGauge = (foodId) => {
    router.push(`/recommend/${foodId}`);
  };
  return (
    <div>
      추천페이지입니다{id}
      <div className="flex ">
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
    </div>
  );
}
