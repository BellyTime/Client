import Gauge from "../components/Gauge";
import { fetchCoolTime } from "../fetch/coolTimeList";
import { useEffect } from "react";
import { useState } from "react";
import { Modal } from "@/components";
import { useRecoilState } from "recoil";
import { modalState } from "../state/atom";
const CoolTime = () => {
  const [coolTimeData, setCoolTimeData] = useState(null);
  const [showModal, setShowModal] = useRecoilState(modalState);
  useEffect(() => {
    fetching();
  }, []);
  const fetching = async () => {
    const fetchList = await fetchCoolTime();
    console.log(fetchList);
    setCoolTimeData(fetchList);
  };

  return (
    <>
      <div className="flex">
        {coolTimeData &&
          coolTimeData.map(
            ({ foodId, name, gauge, foodImg, predictDate, leftDays }) => (
              <div
                key={foodId}
                className="flex-1"
                onClick={() => setShowModal(true)}
              >
                <Gauge
                  value={gauge}
                  label={name}
                  predictDate={predictDate}
                  leftDays={leftDays}
                  foodImg={foodImg}
                />
              </div>
            )
          )}
      </div>
      {showModal && <Modal setShowModal={setShowModal} />}
    </>
  );
};

export default CoolTime;
