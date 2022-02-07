import { useEffect, useState } from "react";
import { CooltimeCalender } from "../../components";
import { getCalender, postTodayCheck } from "../../fetch";
export default function CoolTimeCalender() {
  const [todayCheck, setTodayCheck] = useState(null); // 쿨타임음식 체크
  const [coolTimeDate, setCoolTimeDate] = useState(new Date().getDate()); //쿨타임 날짜에 대한 음식표시
  const [yearAndMonth, setYearAndMonth] = useState({ year: "", month: "" }); //갖고올 연도와 월 설정
  const [coolTimeData, setCoolTimeData] = useState(null);
  const [coolTimeOfDay, setCoolTimeOfDay] = useState(null);
  useEffect(() => {
    getCalender(setTodayCheck, setCoolTimeData);
    return () => {
      postTodayCheck(todayCheck);
    };
  }, []);
  useEffect(() => {
    console.log(coolTimeData, coolTimeDate);
    if (coolTimeData)
      setCoolTimeOfDay(coolTimeData.filter((i) => i.day === coolTimeDate));
  }, [coolTimeData, coolTimeDate]);
  useEffect(() => {
    console.log(coolTimeOfDay);
  }, [coolTimeOfDay]);
  return (
    <>
      <CooltimeCalender
        setCoolTimeDate={setCoolTimeDate}
        setYearAndMonth={setYearAndMonth}
        yearAndMonth={yearAndMonth}
      />
      {
        // coolTimeOfDay?.length && JSON.stringify(coolTimeOfDay.data, 0, 4)
        coolTimeOfDay?.length ? JSON.stringify(coolTimeOfDay.data, 0, 4) : "없음"
        //     coolTimeOfDay.data?.map(({ foodName, foodId, foodImg }) => (
        //       <div key={foodId}>
        //             <p>{foodName}</p>
        //             <img src={ foodImg}/>
        //       </div>
        //     ))}
        //   <div>안녕</div>
      }
    </>
  );
}
