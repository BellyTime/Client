import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";


const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: typeof window !== "undefined" && window.localStorage,
});
export const settingState = atom({
  key: "settingState", 
  default: {
    duration: 0,
    alarm: false,
    token: "",
  }, 
  effects_UNSTABLE: [persistAtom],
});

export const userState = atom({
  key: "userState",
  default: {
    userId: null,
    userNickName: null,
  },
  effects_UNSTABLE: [persistAtom],
});

export const chatImageState = atom({
  key: "chatImageState",
  default: { contact: [] },
});

export const startChatState = atom({
  key: "startChatState",
  default: {
    contact: [],
    roomName: null,
  },
  effects_UNSTABLE: [persistAtom],
});


export const chatContentState = atom({
  key: "chatContentState",
  default: "",
});

export const positionState = atom({
  key: "positionState",
  default: { lat: null, lng: null, address: null },
  effects_UNSTABLE: [persistAtom],
});

export const mainPageCoolTimeState = atom({
  key: "mainPageCoolTimeState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const previousChatState = atom({
  key: "previousChatState",
  default: "",
});
