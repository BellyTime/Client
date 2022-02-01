import Gauge from "../components/Gauge";
import { fetchCoolTime } from "../fetch/coolTimeList";
import { useEffect, useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { modalState, modifyState, modalContentState } from "../state/atom";
import { CoolTimeModal} from "@/components";

const CoolTime = () => {
  const [coolTimeData, setCoolTimeData] = useState(null);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [modify, setModify] = useRecoilState(modifyState);
  const [modalContent, setModalContent] = useRecoilState(modalContentState);
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
                onClick={() => {
                  setShowModal(true);
                  setModalContent(
                    ["쿨타임 예정일",
                    predictDate,
                     `(${leftDays}일남음)`]
                  );
                }}
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
      {showModal && (
        <CoolTimeModal
          setShowModal={setShowModal}
          setModify={setModify}
          setModalContent = {setModalContent}
          subject={modalContent[0]}
          content={modalContent.slice(1)}
          modify={modify}

        />
      )}

    </>
  );
};

export default CoolTime;
