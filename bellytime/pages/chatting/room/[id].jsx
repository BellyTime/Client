import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState, useRef } from "react";
import {
  ChatDrawerNModal,
  ChatInputSend,
  ChatNavbar,
  ChatSection,
} from "../../../components";
import { startChatState, userState } from "../../../state/atom";
import { useRecoilState } from "recoil";
import { stompConnect, stompClient } from "../../../util";
import { ButtonToBottom } from "../../../components";
import { throttle } from "lodash";
export default function ChatRoom() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [startChatInfo, setStartChatInfo] = useRecoilState(startChatState);
  const userNickName = "피피";
  const userId = "26";
  const [allContent, setAllContent] = useState("");
  const [connected, setConneted] = useState(false);
  const [scrollFlag, setScrollFlag] = useState(true);
  const stompcli = stompClient("https://backend.bellytime.kr/chat/chatting");
  stompcli.debug = () => {};
  const scrollableTarget = useRef();
  //https://stackoverflow.com/questions/25683022/how-to-disable-debug-messages-on-sockjs-stomp
  useEffect(() => {
    stompConnect(
      stompcli,
      router.query.id,
      setAllContent,
      startChatInfo,
      setStartChatInfo,
      setConneted,
      scrollableTarget
    );
    //https://stackoverflow.com/questions/54954385/react-useeffect-causing-cant-perform-a-react-state-update-on-an-unmounted-comp
  }, [router]);

  const updateScroll = () => {
    const { scrollTop, scrollHeight } = scrollableTarget.current;
    const { offsetHeight } = scrollableTarget.current;
    if (scrollTop >= 0) {
      setScrollFlag(true);
    } else {
      setScrollFlag(false);
    }
  };
  const handleScroll = throttle(updateScroll, 100);

  useEffect(() => {
    const targetCurrent = scrollableTarget.current;
    targetCurrent.addEventListener("scroll", handleScroll);
    return () => {
      targetCurrent.removeEventListener("scroll", handleScroll);
    };
  }, [scrollableTarget]);
  //https://stackoverflow.com/questions/66022475/how-to-get-over-cannot-read-property-removeeventlistener-of-null-in-react
  //try catch문으로 안됐을때 에러메시지 띄우기. content가 비워지지 않았을때로 확인?
  return (
    <div className="h-screen w-screen fixed">
      <ChatNavbar setIsOpen={setIsOpen} startChatInfo={startChatInfo} />
      <ChatSection
        scrollableTarget={scrollableTarget}
        roomId={router.query.id}
        allContent={allContent}
      />
      <div className={scrollFlag ? "hidden" : "block"}>
        <ButtonToBottom scrollableTarget={scrollableTarget} />
      </div>
      <ChatInputSend
        connected={connected}
        roomId={router.query.id}
        sender={userId}
        nickName={userNickName}
        stompcli={stompcli}
        scrollableTarget={scrollableTarget}
      />
      <div className="h-30" />
      <ChatDrawerNModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        roomId={router.query.id}
        router={router}
      />
    </div>
  );
}

//프로필사진
//사람 바뀔때만 별명 표시 https://nextjs.org/docs/api-reference/next/router
//https://heroicons.com/
//https://stackoverflow.com/questions/52577141/how-to-submit-form-from-a-button-outside-that-component-in-react
//https://velog.io/@dev_hikun/React-%EB%A0%8C%EB%8D%94%EC%8B%9C-%EA%B9%9C%EB%B9%A1%EA%B1%B0%EB%A6%BC-%ED%95%B4%EA%B2%B0-Trouble-shooting
//https://ui.toast.com/weekly-pick/ko_20190731
//https://stackoverflow.com/questions/57843103/preact-avoid-unnecessary-rerender-on-submit
