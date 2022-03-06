import { useEffect, useRef } from "react";
import { drawCanvas } from "../followingShop/drawCanvas";
import { Link } from "..";
import { plusChatRoom } from "@/fetch";
import { useRecoilState } from "recoil";
import { chatImageState } from "../../state/atom";
import { useRouter } from "next/router";

export const NewFriend = ({ findedFriend, setNewFriendId, newFriendId }) => {
  const canvasRef = useRef();
  const imgRef = useRef();

  const { name, friendId, profileImg, follow } = findedFriend;
  const router = useRouter();
  const [chatState, setChatState] = useRecoilState(chatImageState);
  useEffect(() => {
    drawCanvas(100, 100, canvasRef, imgRef, profileImg);
  }, []);
  const handleChattingButton = async () => {
    setChatState({
      contact: [{ profileImg, contactId: friendId }],
      roomName: [name],
    });
    const { roomId } = await plusChatRoom([friendId], "customer");
    router.push({
      pathname: `/chatting/room/${roomId}`,
      query: { IsFriend: "customer" },
    });
  };
  return (
    <div>
      <img ref={imgRef} />
      <canvas ref={canvasRef} />
      <p>{name}</p>
      <Link href="#">쿨타임</Link>
      <button onClick={handleChattingButton} className="block">
        채팅
      </button>
      <button
        onClick={() => {
          if (newFriendId) {
            setNewFriendId(null);
          } else {
            setNewFriendId(friendId);
          }
        }}
        disabled={follow}
      >
        <span className={follow ? "text-gray-100" : "text-red-600"}>
          팔로우
        </span>
      </button>
    </div>
  );
};
