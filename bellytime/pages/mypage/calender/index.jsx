import { useEffect, useState, useRef } from "react";

import { CooltimeCalender } from "../../../components";
import { getCalender, postTodayCheck } from "../../../fetch";
import { v4 as uuidv4 } from "uuid";
import { Link } from "../../../components";
export default function CoolTimeCalender() {
  const [todayCheck, setTodayCheck] = useState(null); // 쿨타임음식 체크
  const [checkFood, setCheckFood] = useState([]);
  const [changed, setChanged] = useState([]);
  const [coolTimeDate, setCoolTimeDate] = useState(new Date().getDate()); //쿨타임 날짜에 대한 음식표시
  const [yearAndMonth, setYearAndMonth] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  }); //갖고올 연도와 월 설정
  const [coolTimeData, setCoolTimeData] = useState(null);
  const [coolTimeOfDay, setCoolTimeOfDay] = useState(null);
  const [isToday, setIsToday] = useState(true);
  const componentWillUnmount = useRef(false);

  useEffect(() => {
    return () => {
      componentWillUnmount.current = true;
    };
  }, []);

  useEffect(() => {
    // console.log(checkFood);
    console.log("changed", changed);
    return () => {
      if (componentWillUnmount.current == true && changed.length)
        postTodayCheck(checkFood);
    }; //형태 변환할것 [{foodId,eat}]
  }, [changed]);

  useEffect(() => {
    getCalender(setTodayCheck, setCoolTimeData, yearAndMonth, setCheckFood); //오늘데이터, 쿨타임데이터, 쿼리로 보낼 연월
  }, []);

  useEffect(() => {
    if (coolTimeData)
      setCoolTimeOfDay(coolTimeData.filter((i) => i.day === coolTimeDate));
    //쿨타임데이터가 있으면, coolTime데이터 중 day가 선택한 coolTimeDate과 같은 데이터를 coolTimeofDay로 지정.
  }, [coolTimeData, coolTimeDate]);

  return (
    <>
      <Link href="/coolTime">쿨타임 설정하러가기</Link>
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

      {isToday &&
        todayCheck &&
        todayCheck.map(({ foodName, foodId, foodImg, eat }) => (
          <div key={uuidv4()}>
            <p>{foodName}</p>
            <img src={foodImg} className="h-20 w-20" />
            <button
              onClick={() => {
                if (eat == true) {
                  setChanged(changed.filter((val, idx) => val !== foodId));
                } else if (eat == false) {
                  setChanged([...changed, foodId]);
                }
                setCheckFood(
                  checkFood.map((item) =>
                    item.foodId == foodId ? { ...item, eat: true } : item
                  )
                );
              }}
              className={`${
                checkFood &&
                checkFood.filter((item) => item.foodId == foodId)[0]?.eat &&
                "text-red-300"
              }`}
            >
              먹음
            </button>
            <button
              onClick={() => {
                if (eat == false) {
                  setChanged(changed.filter((val, idx) => val !== foodId));
                } else if (eat == true) {
                  setChanged([...changed, foodId]);
                }
                setCheckFood(
                  checkFood.map((item) =>
                    item.foodId == foodId ? { ...item, eat: false } : item
                  )
                );
              }}
              className={`${
                checkFood &&
                !checkFood.filter((item) => item.foodId == foodId)[0]?.eat &&
                "text-red-300"
              }`}
            >
              먹지않음
            </button>
          </div>
        ))}
    </>
  );
}
