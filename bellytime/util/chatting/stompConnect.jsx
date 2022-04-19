import { useSetChatRoomState } from "../../useHook/useSetChatRoomState";
export const stompConnect = (
  stompcli,
  roomId,
  setAllContent,
  startChatInfo,
  setStartChatInfo,
  setConneted
) => {
  stompcli.connect(
    {},
    () => {
      stompcli.subscribe(`/sub/chatting/room/${roomId}`, (data) => {
        const mssg = JSON.parse(data.body);
        // console.log(mssg);
        useSetChatRoomState(
          setAllContent,
          mssg,
          startChatInfo,
          setStartChatInfo
        );
      });
      setConneted(true);
    },
    () => setConneted(false)
  );
};
