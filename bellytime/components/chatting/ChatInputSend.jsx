import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";
export const ChatInputSend = ({
  stompcli,
  connected,
  roomId,
  sender,
  nickName,
  scrollableTarget,
}) => {
  const inputRef = useRef();

  const sendWithStomp = (content) => {
    let date = new Date(+new Date() + 3240 * 10000).toISOString().split("T")[0];
    let time = new Date().toTimeString().split(" ")[0];
    let msg = {
      roomId,
      sender,
      nickName,
      content,
      sendTime: date + " " + time,
    };

    stompcli.send(`/pub/chat/chatting`, {}, JSON.stringify(msg));
    inputRef.current.value = "";
    inputRef.current.focus();
  };
  return (
    <div className={`flex border w-screen h-[15vh] float`}>
      <form
        key={uuidv4()}
        id="chat-input"
        onSubmit={(e) => {
          e.preventDefault();
          const value = inputRef.current.value;
          // setContent(value);
          if (value && connected) sendWithStomp(value);
              console.log(scrollableTarget.current.scrollTop);
              scrollableTarget.current.scrollTo({
                top: scrollableTarget.current.scrollHeight + 20,
                behavior: "smooth",
              });
        }}
      >
        <input
          key={uuidv4()}
          type="content"
          ref={inputRef}
          className={`border mb-[10vh] h-[5vh] w-[90vw] `}
        />
      </form>
      <button
        key={uuidv4()}
        type="submit"
        form="chat-input"
        className="border  mb-[10vh] w-[10vw]"
      >
        보내기
      </button>
    </div>
  );
};
