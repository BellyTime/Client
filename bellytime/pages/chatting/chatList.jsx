import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  followingFriendList,
  followingShopList,
  getChatList,
  getPreviousChat,
  plusChatRoom,
} from "../../fetch";
import { ContactList, Modal, ShopList } from "../../components";
import { useResetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import {
  chatImageState,
  startChatState,
  userState,
} from "../../state/atom";

export default function ChatList() {
  const [IsFriend, setIsFriend] = useState("customer");
  const [chatList, setChatList] = useState(""); //채팅리스트
  const [modal, setModal] = useState(false);
  const [contact, setContact] = useState(""); //새로운채팅
  const [inviteId, setInviteId] = useState([]);
  const [contactInfo, setContactInfo] = useRecoilState(chatImageState); //채팅방에 담을 정보
  const [startChatInfo, setStartChatInfo] = useRecoilState(startChatState);
  const { userNickName, userId } = useRecoilValue(userState);

  const router = useRouter();
  const roomNameRef = useRef();

  useEffect(() => {
    setStartChatInfo({ contact: [], roomName: null });
    setContactInfo({ contact: [] });
    getChatList(IsFriend, setChatList);
  }, [IsFriend]);

  const handlePlusChatRoom = async () => {
    if (IsFriend == "customer") {
      followingFriendList(setContact);
    } else if (IsFriend == "shop") {
      followingShopList(setContact);
    }
  };

  const handleContact = (e) => {
    if (inviteId.length) {
      setStartChatInfo({
        contact: contactInfo.contact,
        roomName: roomNameRef.current.value,
      });
      plusChatRoom(inviteId, IsFriend, roomNameRef.current.value).then(
        (res) => {
          if (res) {
            router.push({
              pathname: `/chatting/room/${res}`,
              query: { IsFriend },
            });
          }
        }
      );
    }
    setInviteId([]);
    setContactInfo({
      contact: [],
    });
    setModal(false);
  }; //친구를 inviteId 배열에 담은 후 방으로 이동

  const handleEnter = (contact, roomName, chatRoomId) => {
    // setContactInfo({ contact, roomName });
    setStartChatInfo({ contact, roomName });
    // setInviteId(contact.map(({ contactId }) => contactId));
    router.push({
      pathname: `/chatting/room/${chatRoomId}`,
      query: { IsFriend },
    });
  };

  const handleClose = () => {
    setInviteId("");
    setModal(false);
    setContactInfo({ contact: [] });
  };

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
            onClick={() => handleEnter(contact, roomName, chatRoomId)}
          >
            {contact?.map(({ profileImg }) => (
              <img
                src={profileImg == "null" ? "/icon.png" : profileImg}
                className="inline object-cover w-16 h-16 mr-2 rounded-full"
                key={uuidv4()}
              />
            ))}

            <span>
              {roomName
                ? roomName
                : contact.map(({ nickName }) => nickName).join(",")}
            </span>
            <p>{recentContent}</p>
          </div>
        ))}
      {modal && (
        <Modal
          setModal={handleContact}
          close={handleClose}
          subject={IsFriend == "customer" ? "친구목록" : "가게목록"}
          content={
            IsFriend == "customer"
              ? contact && (
                  <>
                    <ContactList
                      inviteId={inviteId}
                      setInviteId={setInviteId}
                      contact={contact}
                      IsFriend={IsFriend}
                    />
                    <input
                      ref={roomNameRef}
                      placeholder="방이름을 입력하세요"
                    />
                  </>
                )
              : contact &&
                contact.map((content) => (
                  <ShopList key={uuidv4()} content={content} />
                ))
          }
        />
      )}
    </div>
  );
}
//https://jcon.tistory.com/190
