import { atom } from "recoil";
export const modalState = atom({
  key: "modalState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
//모달상태 : 닫힌상태, 열린상태, 삭제, 수정, 등록

export const modalContentState = atom({
  key: "modalContentState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const alertState = atom({
  key: "alertModalState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const setCoolTimeState = atom({
  key: "setCoolTimeState", // unique ID (with respect to other atoms/selectors)
  default: {
    foodId: "",
    foodName: "",
    startDate: "",
    duration: 0
  }, // default value (aka initial value)
});
