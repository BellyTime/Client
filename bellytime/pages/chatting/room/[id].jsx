import SockJS from "sockjs-client";
import Stomp from "stompjs";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { getPreviousChat } from "../../../fetch";
import { v4 as uuidv4 } from "uuid";

export default function ChatRoom() {
  const router = useRouter();
  const { id } = router.query;

  const [content, setContent] = useState("");
  const [allContent, setAllContent] = useState([]);
  useEffect(async () => {
    const prec = await getPreviousChat(String(id));
    setAllContent([...prec]);
  }, []);
  const socketJs = new SockJS("http://3.35.179.18:8080/chat/chatting");
  const stompcli = Stomp.over(socketJs);
  stompcli.debug = () => {};
  useEffect(() => {
    stompcli.connect({}, () => {
      stompcli.subscribe(`/sub/chatting/room/11`, (data) => {
        const mssg = JSON.parse(data.body);
        console.log(mssg);
        setAllContent((old) => [...old, mssg]);
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
      roomId: "11",
      sender: 4,
      nickName: "eunsun",
      content,
      sendTime: date + " " + time,
    };
    stompcli.send(`/pub/chat/chatting`, {}, JSON.stringify(msg));
    console.log("send", msg);
    setContent("");
  };

  return (
    <div>
      <div className={`border fixed bottom-14 w-full float`}>
        <form onSubmit={sendWithStomp}>
          <input
            type="content"
            onChange={handleContent}
            value={content}
            className={`border w-full`}
          />
        </form>
      </div>
      <div>
        {allContent &&
          allContent.map(({ nickName, content, sendTime }) => (
            <div
              key={uuidv4()}
              className={`${
                nickName !== "eunsun" ? "text-left" : "text-right"
              } w-full`}
            >
              <p className="text-blue-600 clear">
                {nickName == "eunsun"
                  ? null
                  : nickName
                  ? nickName
                  : "undefined"}
              </p>
              <div >
                <span className="w-40 bg-yellow-300">{content}</span>
              </div>
              <p>{sendTime}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
