import SockJS from "sockjs-client";
import Stomp from "stompjs";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

export default function ChatRoom() {
  const router = useRouter();
  const { id } = router.query;
  let socketJs = new SockJS("http://3.35.179.18:8080/chat/chatting");
  let stompcli = Stomp.over(socketJs);
  const [content, setContent] = useState("");
  const [myContent, setMyContent] = useState(null);

  stompcli.debug = () => {};
  useEffect(() => {
    stompcli.connect({}, () => {
      stompcli.subscribe(`/sub/chatting/room/11`, (data) => {
        const mssg = JSON.parse(data.body);
        console.log("21", mssg);
      });
    });
  }, []);
  const handleContent = (e) => {
    setContent(e.target.value);
  };
  const sendWithStomp = (e) => {
    e.preventDefault();
    let date = new Date(+new Date() + 3240 * 10000).toISOString().split("T")[0];
    let time = new Date().toTimeString().split(" ")[0];
    let msg = {
      roomId: 11,
      sender: 4,
      content,
      sendTime: date + " " + time,
    };
    stompcli.send(`/pub/chat/chatting`, {}, JSON.stringify(msg));
    console.log("send", msg);
    setContent("");
  };

  return (
    <div>
      <form onSubmit={sendWithStomp}>
        <input
          type="content"
          onChange={handleContent}
          className={`border`}
          value={content}
        />
      </form>
      <div></div>
    </div>
  );
}
