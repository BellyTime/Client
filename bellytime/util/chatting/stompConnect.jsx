import { useSetChatRoomState } from "../../useHook/useSetChatRoomState";
export const stompConnect = (
  stompcli,
  roomId,
  setAllContent,
  startChatInfo,
  setStartChatInfo,
  setConneted,
  scrollableTarget
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
      console.log(scrollableTarget.current.scrollTop);
      scrollableTarget.current.scrollTo({
        top: scrollableTarget.current.scrollHeight + 20,
        behavior: "smooth",
      });
    },
    () => setConneted(false)
  );
};
