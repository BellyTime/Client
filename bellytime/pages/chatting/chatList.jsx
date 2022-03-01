import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { getChatList } from "../../fetch";

export default function ChatList() {
  const [IsFriend, setIsFriend] = useState("friend");
  const [chatList, setChatList] = useState("");

  const router = useRouter();
  useEffect(async () => {
    const cl = await getChatList(IsFriend);
    setChatList(cl);
  }, []);
  const handlePlusFriend = () => {
    
  }
  return (
    <div>
      <button onClick={handlePlusFriend}>친구추가</button>
      <div className="flex justify-evenly">
        <div onClick={() => setIsFriend("friend")}>친구</div>
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
    </div>
  );
}
