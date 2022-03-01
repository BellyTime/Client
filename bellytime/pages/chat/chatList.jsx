import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { getChatList } from "../../fetch";

export default function ChatList() {
  const [chatList, setChatList] = useState("");
  const router = useRouter();
  useEffect(async () => {
    const cl = await getChatList();
    setChatList(cl);
  }, []);
  return (
    <div>
      {chatList &&
        chatList.map(({ roomName, chatRoomId }) => (
          <div
            key={uuidv4}
            onClick={() => {
              router.push(`/chatroom/${chatRoomId}`);
            }}
          >
            <span>{roomName}</span>
          </div>
        ))}
    </div>
  );
}
