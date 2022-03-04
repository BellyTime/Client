import SockJS from "sockjs-client";
import Stomp from "stompjs";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { getPreviousChat } from "../../../fetch";
import { v4 as uuidv4 } from "uuid";
import { set } from "lodash";
import { Drawer } from "../../../components";
import { chatImageState } from "../../../state/atom";
import { useRecoilState } from "recoil";
export default function ChatRoom() {
  const router = useRouter();
  const { id } = router.query;
  const [contactInfo, setContactInfo] = useRecoilState(chatImageState);
  const [content, setContent] = useState("");
  const [allContent, setAllContent] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  // useEffect(() => {
  //   console.log("useEffect");
  //   getPreviousChat(id, setAllContent);
  // }, [id]);
  // const socketJs = new SockJS("http://3.35.179.18:8080/chat/chatting");
  // const stompcli = Stomp.over(socketJs);
  // stompcli.debug = () => {};
  // useEffect(() => {
  //   stompcli.connect({}, () => {
  //     stompcli.subscribe(`/sub/chatting/room/11`, (data) => {
  //       const mssg = JSON.parse(data.body);
  //       console.log(mssg);
  //       setAllContent((old) => [...old, mssg]);
  //     });
  //   });
  // }, []);
  const handleContent = (e) => {
    setContent(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date(+new Date() + 3240 * 10000).toISOString().split("T")[0];
    let time = new Date().toTimeString().split(" ")[0];
    let msg = {
      roomId: "11",
      sender: 4,
      nickName: "eunsun",
      content,
      sendTime: time,
    };
    setAllContent((old) => [...old, msg]);
  };

  // const sendWithStomp = (e) => {
  //   e.preventDefault();
  //   let date = new Date(+new Date() + 3240 * 10000).toISOString().split("T")[0];
  //   let time = new Date().toTimeString().split(" ")[0];
  //   let msg = {
  //     roomId: "11",
  //     sender: 4,
  //     nickName: "eunsun",
  //     content,
  //     sendTime: date + " " + time,
  //   };

  //   stompcli.send(`/pub/chat/chatting`, {}, JSON.stringify(msg));
  //   console.log("send", msg);
  //   setContent("");
  // };

  return (
    <div className="h-screen">
      <nav className="w-full h-10 bg-gray-900 rounded-tr rounded-tl flex justify-between items-center">
        <div className="flex justify-center items-center">
          {" "}
          <i className="mdi mdi-arrow-left font-normal text-gray-300 ml-1"></i>{" "}
          <img
            src={contactInfo?.contactImage}
            className="rounded-full ml-1"
            width="25"
            height="25"
          />{" "}
          <span className="text-xs font-medium text-gray-300 ml-1">
            {contactInfo?.contactName}
          </span>{" "}
        </div>
        <div className="flex items-center" onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </nav>
      <div className="bg-gray-300 h-4/5  overflow-scroll scrollbar-hide">
        {allContent &&
          allContent.map(({ nickName, content, sendTime }) => (
            <div
              key={uuidv4()}
              className={`${
                nickName !== "eunsun" ? "text-left" : "text-right"
              } px-1 py-1 w-full`}
            >
              <p className="text-blue-600 ">
                {nickName == "eunsun"
                  ? null
                  : nickName
                  ? nickName
                  : "undefined"}
              </p>
              <div>
                <span className="w-40 bg-yellow-300">{content}</span>
              </div>

              <p>{sendTime}</p>
            </div>
          ))}
      </div>
      <div className={`border fixed bottom-14 w-full float`}>
        <form onSubmit={handleSubmit}>
          <input
            type="content"
            onChange={handleContent}
            value={content}
            className={`border w-full`}
          />
        </form>
      </div>
      <div className="h-30" />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
//프로필사진
//사람 바뀔때만 별명 표시 https://nextjs.org/docs/api-reference/next/router
//https://heroicons.com/
