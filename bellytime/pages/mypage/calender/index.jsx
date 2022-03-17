import { useEffect, useState, useRef } from "react";
import { CooltimeCalender, NotTodayFood, TodayFood } from "../../../components";
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

  const handleSaveButton = (e) => {
    if (changed.length) postTodayCheck(checkFood);
  };

  useEffect(() => {
    getCalender(setTodayCheck, setCoolTimeData, yearAndMonth, setCheckFood); //오늘데이터, 쿨타임데이터, 쿼리로 보낼 연월
  }, [yearAndMonth]);

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

      <TodayFood
        isToday={isToday}
        todayCheck={todayCheck}
        setChanged={setChanged}
        setCheckFood={setCheckFood}
        changed={changed}
        checkFood={checkFood}
      />
      <NotTodayFood coolTimeOfDay={coolTimeOfDay} />
      {isToday && <button onClick={handleSaveButton}>저장하기</button>}
    </>
  );
}
