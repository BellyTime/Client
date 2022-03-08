import SockJS from "sockjs-client";
import Stomp from "stompjs";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState, useRef } from "react";
import {
  exitChatRoom,
  getPreviousChat,
  plusFriend,
  followingFriendList,
} from "../../../fetch";
import { v4 as uuidv4 } from "uuid";
import { set } from "lodash";
import { Drawer, Modal } from "../../../components";
import { chatImageState } from "../../../state/atom";
import { useRecoilState, useResetRecoilState } from "recoil";
import { ContactList } from "../../../components";
export default function ChatRoom() {
  const router = useRouter();
  // const [id, setId] = useState("");
  // const [IsFriend, setIsFriend] = useState("");
  const [contactInfo, setContactInfo] = useRecoilState(chatImageState);
  const [content, setContent] = useState("");
  const [allContent, setAllContent] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [inviteId, setInviteId] = useState([]);
  const [contact, setContact] = useState("");
  const [connected, setConneted] = useState(false);
  const componentWillUnmount = useRef(false);
  const reset = useResetRecoilState(chatImageState);
  const socketJs = new SockJS("https://backend.bellytime.kr/chat/chatting");
  let stompcli = Stomp.over(socketJs);
  stompcli.debug = () => {};
  //https://stackoverflow.com/questions/25683022/how-to-disable-debug-messages-on-sockjs-stomp
  useEffect(() => {
    stompcli.connect(
      {},
      () => {
        stompcli.subscribe(`/sub/chatting/room/${router.query.id}`, (data) => {
          const mssg = JSON.parse(data.body);
          console.log(mssg);
          setAllContent((old) => [...old, mssg]);
          setConneted(true);
        });
      },
      () => setConneted(false)
    );
  }, []);
  useEffect(() => {
    return () => {
      componentWillUnmount.current = true;
    };
  }, []);

  useEffect(() => {
    return () => {
      if (componentWillUnmount.current) reset();
    };
  }, []);

  // useEffect(() => {
  //   setId(router.query.id);
  //   setIsFriend(router.query.IsFriend);
  // }, []);

  useEffect(() => {
    console.log(inviteId);
  }, [inviteId]);

  useEffect(() => {
    console.log(connected);
  }, [connected]);

  useEffect(() => {
    console.log(contactInfo);
  }, [contactInfo]);
  const handleContent = (e) => {
    setContent(e.target.value);
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (content) {
  //     let date = new Date(+new Date() + 3240 * 10000)
  //       .toISOString()
  //       .split("T")[0];
  //     let time = new Date().toTimeString().split(" ")[0];
  //     let msg = {
  //       roomId: "11",
  //       sender: 4,
  //       nickName: "eunsun",
  //       content,
  //       sendTime: time,
  //     };
  //     // setAllContent((old) => [...old, msg]);
  //     setContent("");
  //   }
  // };
  const handleExitButton = (e) => {
    exitChatRoom(router.query.id).then(() => {
      router.push("/chatting/chatList");
    });
  };
  const handlePlusFriend = () => {
    setModal(true);
    followingFriendList(setContact);
  };

  const handleSetModal = () => {
    setModal(false);
    inviteId.length && plusFriend(inviteId, router.query.id);
    setIsOpen(false);
  };
  const handleGoReserve = () => {
    router.push(`/shop/${contactInfo.contact[0].contactId}`);
  };
  const sendWithStomp = (e) => {
    e.preventDefault();
    if (content && connected) {
    let date = new Date(+new Date() + 3240 * 10000).toISOString().split("T")[0];
    let time = new Date().toTimeString().split(" ")[0];
    let msg = {
      roomId: router.query.id,
      sender: 4,
      nickName: "eunsun",
      content,
      sendTime: date + " " + time,
    };

    stompcli.send(`/pub/chat/chatting`, {}, JSON.stringify(msg));
    console.log("send", msg);
    setContent("");
    }
  };
  //try catch문으로 안됐을때 에러메시지 띄우기. content가 비워지지 않았을때로 확인?
  return (
    <div className="h-screen">
      <nav className="w-full h-[5vh] bg-gray-900 rounded-tr rounded-tl flex justify-between items-center">
        <div className="flex justify-center items-center">
          {" "}
          <i className="mdi mdi-arrow-left font-normal text-gray-300 ml-1"></i>{" "}
          {contactInfo?.contact &&
            contactInfo.contact.map(({ profileImg, contactId }) => (
              <img
                key={uuidv4()}
                src={profileImg}
                className="rounded-full ml-1"
                width="25"
                height="25"
              />
            ))}
          {contactInfo?.roomName && (
            <span
              key={uuidv4()}
              className="text-xs font-medium text-gray-300 ml-1"
            >
              {contactInfo.roomName.join(",")}
            </span>
          )}
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
      <div className="bg-gray-300 h-[80vh]  overflow-scroll scrollbar-hide">
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
      <div className={`flex border fixed w-screen h-[15vh] float`}>
        <form id="chat-input" onSubmit={sendWithStomp}>
          <input
            type="content"
            onChange={handleContent}
            value={content}
            className={`border mb-[10vh] h-[5vh] w-[90vw]`}
          />
        </form>
        <button
          type="submit"
          form="chat-input"
          className="border  mb-[10vh] w-[10vw]"
        >
          보내기
        </button>
      </div>
      <div className="h-30" />
      <Drawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        children={
          <div>
            <button onClick={handleExitButton} className="block">
              방나가기
            </button>

            {router.query.IsFriend == "customer" ? (
              <button onClick={handlePlusFriend} className="block">
                친구초대하기
              </button>
            ) : (
              <button onClick={handleGoReserve} className="block">
                예약하기
              </button>
            )}
          </div>
        }
      />
      {modal && (
        <Modal
          setModal={handleSetModal}
          subject="친구추가"
          content={
            <ContactList
              inviteId={inviteId}
              setInviteId={setInviteId}
              contact={contact}
              IsFriend="customer"
            />
          }
          close={() => setModal(false)}
        />
      )}
    </div>
  );
}
//프로필사진
//사람 바뀔때만 별명 표시 https://nextjs.org/docs/api-reference/next/router
//https://heroicons.com/
//https://stackoverflow.com/questions/52577141/how-to-submit-form-from-a-button-outside-that-component-in-react
