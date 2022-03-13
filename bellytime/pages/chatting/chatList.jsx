import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  followingFriendList,
  followingShopList,
  getChatList,
  plusChatRoom,
} from "../../fetch";
import { ContactList, Modal, ShopList } from "../../components";
import { useResetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import { chatImageState, userState } from "../../state/atom";
export default function ChatList() {
  const [IsFriend, setIsFriend] = useState("customer");
  const [chatList, setChatList] = useState(""); //채팅리스트
  const [modal, setModal] = useState(false);
  const [contact, setContact] = useState(""); //새로운채팅
  const [inviteId, setInviteId] = useState([]);
  const [contactInfo, setContactInfo] = useRecoilState(chatImageState); //채팅방에 담을 정보
  const { userNickName, userId } = useRecoilValue(userState);
  const router = useRouter();
  const roomNameRef = useRef();

  useEffect(() => {
    console.log("user", userNickName, userId);
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
    plusChatRoom(inviteId, IsFriend, roomNameRef.current.value).then((res) => {
      if (res) {
        router.push({ pathname: `/chatting/room/${res}`, query: { IsFriend } });
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
              setContactInfo({ contact, roomName: roomName });
              //contact :  [{”contactId”:””,profileImg:””,nickName:””},{}]
              router.push({
                pathname: `/chatting/room/${chatRoomId}`,
                query: { IsFriend },
              });
            }}
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
          setModal={() => {
            if (inviteId.length) {
              setModal(false);
              handleContact(inviteId);

              setContactInfo((old) => ({
                ...old,
                roomName: roomNameRef.current.value,
              }));
            }
          }}
          close={() => {
            setModal(false);
          }}
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
