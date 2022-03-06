import { useState, useEffect } from "react";
import { ReservedShop } from "../../components/reservation/ReservedShop";
import { getReserveData, getWaitingData, getCanceledData } from "../../fetch";
import { v4 as uuidv4 } from "uuid";
export default function Reservation() {
  const [reserveData, setReserveData] = useState(null);
  useEffect(() => {
    getReserveData(setReserveData);
  }, []);
  useEffect(() => {
    console.log(reserveData);
  }, [reserveData]);
  return (
    <>
      <button onClick={() => getReserveData(setReserveData)}>
        예약완료&nbsp;&nbsp;&nbsp;
      </button>
      <button onClick={() => getWaitingData(setReserveData)}>
        예약대기&nbsp;&nbsp;&nbsp;
      </button>
      <button onClick={() => getCanceledData(setReserveData)}>예약취소</button>
      {reserveData &&
        reserveData.map((content) => (
          <ReservedShop content={content} key={uuidv4()} />
        ))}
    </>
  );
}
//같은 api로 requestbody만 바꿔서 보낼것