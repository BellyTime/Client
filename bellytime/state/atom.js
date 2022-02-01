import { atom } from "recoil";
export const modalState = atom({
  key: "modalState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const modifyState = atom({
  key: "modifyState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const modalContentState = atom({
  key: "modalContentState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
