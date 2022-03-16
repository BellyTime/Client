import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";
export const ChatInputSend = ({
  stompcli,
  connected,
  roomId,
  sender,
  nickName,
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
    console.log("send", msg);
    // setContent("");
    inputRef.current.value = "";
  };
  return (
    <div className={`flex border fixed w-screen h-[15vh] float`}>
      <form
        key={uuidv4()}
        id="chat-input"
        onSubmit={(e) => {
          e.preventDefault();
          const value = inputRef.current.value;
          // setContent(value);
          if (value && connected) sendWithStomp(value);
        }}
      >
        <input
          key={uuidv4()}
          type="content"
          ref={inputRef}
          // onChange={handleContent}
          // value={content}
          className={`border mb-[10vh] h-[5vh] w-[90vw]`}
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
