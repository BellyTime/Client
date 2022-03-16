import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import {
  ChatDrawerNModal,
  ChatInputSend,
  ChatNavbar,
  ChatSection,
} from "../../../components";
import {
  startChatState,
  userState,
} from "../../../state/atom";
import { useRecoilState } from "recoil";
import { stompConnect, stompClient } from "../../../util";
export default function ChatRoom() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [startChatInfo, setStartChatInfo] = useRecoilState(startChatState);
  const userNickName = "피피";
  const userId = "26";
  const [allContent, setAllContent] = useState("");
  const [connected, setConneted] = useState(false);
  const stompcli = stompClient("https://backend.bellytime.kr/chat/chatting");
  stompcli.debug = () => {};

  //https://stackoverflow.com/questions/25683022/how-to-disable-debug-messages-on-sockjs-stomp
  useEffect(() => {
    const objDiv = document.getElementById("scrollableDiv");
    objDiv.scrollTop = objDiv.scrollHeight;
    stompConnect(
      stompcli,
      router.query.id,
      setAllContent,
      startChatInfo,
      setStartChatInfo,
      setConneted
    );
    //https://stackoverflow.com/questions/54954385/react-useeffect-causing-cant-perform-a-react-state-update-on-an-unmounted-comp
  }, [router]);

  //try catch문으로 안됐을때 에러메시지 띄우기. content가 비워지지 않았을때로 확인?
  return (
    <div className="h-screen">
      <ChatNavbar setIsOpen={setIsOpen} startChatInfo={startChatInfo} />
      <ChatSection roomId={router.query.id} allContent={allContent} />
      <ChatInputSend
        connected={connected}
        roomId={router.query.id}
        sender={userId}
        nickName={userNickName}
        stompcli={stompcli}
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
