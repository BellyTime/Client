import Gauge from "@/components/Gauge";
import { getCoolTime } from "../fetch/coolTime/coolTimeList";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  modalState,
  modalContentState,
  alertState,
  setCoolTimeState,
} from "../state/atom";
import { CoolTimeModal, AlertModal, Calender } from "@/components";
import { ModalButton } from "@/components";

const CoolTime = () => {
  const [coolTimeList, setCoolTimeList] = useState(null);
  const [modal, setModal] = useRecoilState(modalState);
  const [modalContent, setModalContent] = useRecoilState(modalContentState);
  const [alert, setAlert] = useRecoilState(alertState);
  const setCoolTimeSet = useSetRecoilState(setCoolTimeState);
  useEffect(() => {
    fetching();
  }, []);
  const fetching = async () => {
    const fetchList = await getCoolTime();
    console.log(fetchList);
    setCoolTimeList(fetchList);
  };

  return (
    <>
      <ModalButton
        onClick={() => {
          setModal("추가");
          setModalContent(["쿨타임 추가"]);
        }}
        label={"쿨타임 추가하기"}
      />
      <div className="flex">
        {coolTimeList &&
          coolTimeList.map(
            ({
              foodId,
              foodName,
              gauge,
              foodImg,
              predictDate,
              leftDays,
              startDate,
              duration,
            }) => (
              <div
                key={foodId}
                className="flex-1"
                onClick={() => {
                  setModal("열림");
                  setModalContent([
                    "쿨타임 예정일",
                    predictDate,
                    `(${leftDays}일남음)`,
                  ]);
                  setCoolTimeSet({
                    foodId,
                    foodName,
                    startDate,
                    duration,
                  });
                }}
              >
                <Gauge
                  value={gauge}
                  label={foodName}
                  predictDate={predictDate}
                  leftDays={leftDays}
                  foodImg={foodImg}
                />
              </div>
            )
          )}
      </div>
      {modal && (
        <CoolTimeModal
          modal={modal}
          setModal={setModal}
          setModalContent={setModalContent}
          subject={modalContent[0]}
          content={modalContent.slice(1)}
          setAlert={setAlert}
        />
      )}
      {alert && (
        <AlertModal
          content={`${modal} 하시겠습니까?`}
          setAlert={setAlert}
          setModal={setModal}
        />
      )}
    </>
  );
};

export default CoolTime;
