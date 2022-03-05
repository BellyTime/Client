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
  const [chatList, setChatList] = useState(""); //채팅리스트
  const [modal, setModal] = useState(false);
  const [contact, setContact] = useState(""); //새로운채팅
  const [inviteId, setInviteId] = useState([]);
  const [contactInfo, setContactInfo] = useRecoilState(chatImageState); //채팅방에 담을 정보
  const router = useRouter();

  useEffect(() => {
    getChatList(IsFriend, setChatList);
  }, [IsFriend]);
  const handlePlusChatRoom = async () => {
    if (IsFriend == "customer") {
      followingFriendList(setContact);
    } else if (IsFriend == "shop") {
      followingShopList(setContact);
    }
  };
  useEffect(() => {
    console.log("inviteId", inviteId);
  }, [inviteId]);

  const handleContact = (inviteId) => {
    plusChatRoom(inviteId, IsFriend).then((res) => {
      if (res) {
        router.push(`/chatting/room/${res}`);
      }
    });
  }; //친구를 inviteId 배열에 담은 후 방으로 이동
  useEffect(() => {
    console.log(contactInfo);
  }, [contactInfo]);
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
        chatList.map(({ roomName, chatRoomId, contact, recentContent }) => (
          <div
            key={uuidv4()}
            onClick={() => {
              setContactInfo({ contact, roomName: [roomName] });
              router.push(`/chatting/room/${chatRoomId}`);
            }}
          >
            {contact?.map(({ profileImg }) => (
              <img
                src={profileImg == "null" ? "/public/icon.png" : profileImg}
                className="inline object-cover w-16 h-16 mr-2 rounded-full"
                key={uuidv4()}
              />
            ))}

            <span>{roomName}</span>
            <p>{recentContent}</p>
          </div>
        ))}
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
                inviteId={inviteId}
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
