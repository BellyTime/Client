import Gauge from "@/components/Gauge";
import { CoolTimeList } from "@/components";
import { getCoolTime } from "@/fetch";
import { useEffect, useState } from "react";
import {
  useRecoilState,
  useSetRecoilState,
  useRecoilValue,
  useResetRecoilState,
} from "recoil";
import {
  modalState,
  modalContentState,
  alertState,
  setCoolTimeState,
} from "../state/atom";
import { CoolTimeModal, AlertModal } from "@/components";
import { ModalButton } from "@/components";
import { deleteCoolTime, setCoolTime } from "@/fetch";
import { v4 as uuidv4 } from "uuid";
const CoolTime = () => {
  const [coolTimeList, setCoolTimeList] = useState(null);
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [alert, setAlert] = useState("");
  const [coolTimeSet, setCoolTimeSet] = useState({
    foodId: "",
    foodName: "",
    startDate: "",
    duration: 0,
  });

  useEffect(() => {
    fetching();
  }, []);
  useEffect(() => {
    console.log(coolTimeSet);
  }, [coolTimeSet]);
  const fetching = async () => {
    const fetchList = await getCoolTime();
    setCoolTimeList(fetchList);
  };
  const alertFunc = async () => {
    if (modal == "수정" || modal == "추가") {
      await setCoolTime(coolTimeSet);
    } else if (modal == "삭제") {
      await deleteCoolTime({ foodId: coolTimeSet.foodId });
    }
  };
  const handleClickPlusButton = () => {
    setModal("추가");
    setModalContent(["쿨타임 추가"]);
    setCoolTimeSet({
      foodId: "",
      foodName: "",
      startDate: "",
      duration: 0,
    });
  };

  const handleClickGauge = (content) => {
    const { predictDate, leftDays, foodId, foodName, startDate, duration } =
      content;
    setModal("열림");
    setModalContent(["쿨타임 예정일", predictDate, `(${leftDays}일남음)`]);
    setCoolTimeSet({
      foodId,
      foodName,
      startDate,
      duration,
    });
  };
  return (
    <>
      <ModalButton onClick={handleClickPlusButton} label={"쿨타임 추가하기"} />
      <div className="flex">
        {coolTimeList &&
          coolTimeList.map((content) => (
            <CoolTimeList
              key={uuidv4()}
              content={content}
              handleClickGauge={() => handleClickGauge(content)}
            />
          ))}
      </div>
      {modal && (
        <CoolTimeModal
          modal={modal}
          setModal={setModal}
          setModalContent={setModalContent}
          subject={modalContent[0]}
          content={modalContent.slice(1)}
          setAlert={setAlert}
          coolTimeSet={coolTimeSet}
          setCoolTimeSet={setCoolTimeSet}
        />
      )}
      {alert && (
        <AlertModal
          content={`${modal} 하시겠습니까?`}
          setAlert={setAlert}
          setModal={setModal}
          func={alertFunc}
        />
      )}
    </>
  );
};

export default CoolTime;
