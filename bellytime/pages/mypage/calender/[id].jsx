import { useEffect, useState, useRef } from "react";
import { CooltimeCalender } from "../../../components";
import { getCalender, postTodayCheck, getFriendCalender } from "../../../fetch";
import { v4 as uuidv4 } from "uuid";
import { Link } from "../../../components";
import { useRouter } from "next/router";
export default function FriendCalender() {
  const [coolTimeDate, setCoolTimeDate] = useState(new Date().getDate()); //쿨타임 날짜에 대한 음식표시
  const [yearAndMonth, setYearAndMonth] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  }); //갖고올 연도와 월 설정
  const [coolTimeData, setCoolTimeData] = useState(null);
  const [coolTimeOfDay, setCoolTimeOfDay] = useState(null);
  const [isToday, setIsToday] = useState(true);
  const router = useRouter();


  useEffect(() => {
    getFriendCalender(router.query.id, setCoolTimeData, yearAndMonth); //오늘데이터, 쿨타임데이터, 쿼리로 보낼 연월
  }, [router]);

  useEffect(() => {
    if (coolTimeData)
      setCoolTimeOfDay(coolTimeData.filter((i) => i.day === coolTimeDate));
    //쿨타임데이터가 있으면, coolTime데이터 중 day가 선택한 coolTimeDate과 같은 데이터를 coolTimeofDay로 지정.
  }, [coolTimeData, coolTimeDate]);

  return (
    <>
      <CooltimeCalender
        setCoolTimeDate={setCoolTimeDate}
        setYearAndMonth={setYearAndMonth}
        yearAndMonth={yearAndMonth}
        setIsToday={setIsToday}
      />
      {coolTimeOfDay?.length
        ? coolTimeOfDay[0].data.map(({ foodName, foodId, foodImg }) => (
            <div key={uuidv4()}>
              <p>{foodName}</p>
              <img src={foodImg} className="h-20 w-20" />
            </div>
          ))
        : null}
    </>
  );
}
