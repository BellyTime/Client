import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  followingFriendList,
  followingShopList,
  getChatList,
} from "../../fetch";
import { ContactList, Modal } from "../../components";

export default function ChatList() {
  const [IsFriend, setIsFriend] = useState("customer");
  const [chatList, setChatList] = useState("");
  const [modal, setModal] = useState(false);
  const [contact, setContact] = useState("");
  const router = useRouter();

  useEffect(async () => {
    const cl = await getChatList(IsFriend);
    setChatList(cl);
  }, [IsFriend]);
  const handlePlusChatRoom = () => {
    if (IsFriend == "customer") followingFriendList(setContact);
    else if (IsFriend == "shop") followingShopList(setContact);
  };
  return (
    <div>
      <button
        onClick={() => {
          handlePlusChatRoom();
          setModal(true);
        }}
      >
        새로운 채팅
      </button>
      <div className="flex justify-evenly">
        <div onClick={() => setIsFriend("customer")}>친구</div>
        <div onClick={() => setIsFriend("shop")}>가게</div>
      </div>
      {chatList &&
        chatList.map(({ roomName, chatRoomId, profileImg }) => (
          <div
            key={uuidv4()}
            onClick={() => {
              router.push(`/chatting/room/${chatRoomId}`);
            }}
          >
            <img
              src={profileImg}
              className="inline object-cover w-16 h-16 mr-2 rounded-full"
            />
            <span>{roomName}</span>
          </div>
        ))}
      {modal && (
        <Modal
          setModal={setModal}
          subject={IsFriend == "customer" ? "친구목록" : "가게목록"}
          content={
            IsFriend &&
            contact && <ContactList contact={contact} IsFriend={IsFriend} />
          }
        />
      )}
    </div>
  );
}
//https://jcon.tistory.com/190
