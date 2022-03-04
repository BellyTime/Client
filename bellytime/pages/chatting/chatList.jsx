import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  followingFriendList,
  followingShopList,
  getChatList,
  plusChatRoom,
} from "../../fetch";
import { ContactList, Modal } from "../../components";
import { useResetRecoilState, useRecoilState } from "recoil";
import { chatImageState } from "../../state/atom";
export default function ChatList() {
  const [IsFriend, setIsFriend] = useState("customer");
  const [chatList, setChatList] = useState("");
  const [modal, setModal] = useState(false);
  const [contact, setContact] = useState("");
  const [inviteId, setInviteId] = useState([]);
  const [contactInfo, setContactInfo] = useRecoilState(chatImageState);
  const router = useRouter();
  const [contactCheck, setContactCheck] = useState(
    new Array(contact.length).fill(false)
  );
  useEffect(async () => {
    const cl = await getChatList(IsFriend);
    setChatList(cl);
  }, [IsFriend]);
  const handlePlusChatRoom = () => {
    if (IsFriend == "customer") followingFriendList(setContact);
    else if (IsFriend == "shop") followingShopList(setContact);
  };

  const handleContact = (inviteId) => {
    plusChatRoom(inviteId, IsFriend).then((res) => {
      if (res) {
        router.push(`/chatting/room/${res}`);
      }
    });
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
        chatList.map(
          ({
            roomName,
            chatRoomId,
            profileImg,
            customerId,
            shopId,
            recentContent,
          }) => (
            <div
              key={uuidv4()}
              onClick={() => {
                setContactInfo({
                  contactImage: profileImg,
                  roomName,
                  contactId: IsFriend == "customer" ? customerId : shopId,
                });
                router.push(`/chatting/room/${chatRoomId}`);
              }}
            >
              {profileImg.map((el) => (
                <img
                  src={el == "null" ? "/public/icon.png" : el}
                  className="inline object-cover w-16 h-16 mr-2 rounded-full"
                  key={uuidv4()}
                />
              ))}
              <span>{roomName}</span>
              <span>{recentContent}</span>
            </div>
          )
        )}
      {modal && (
        <Modal
          setModal={() => {
            if (inviteId.length) {
              setModal(false);
              handleContact(inviteId);
            }
          }}
          close={() => setModal(false)}
          subject={IsFriend == "customer" ? "친구목록" : "가게목록"}
          content={
            IsFriend &&
            contact && (
              <ContactList
                setInviteId={setInviteId}
                contact={contact}
                IsFriend={IsFriend}
                
              />
            )
          }
        />
      )}
    </div>
  );
}
//https://jcon.tistory.com/190
