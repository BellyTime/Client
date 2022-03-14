import { useEffect, useRef } from "react";
import { drawCanvas } from "../followingShop/drawCanvas";
import { Link } from "..";
import { plusChatRoom, getPreviousChat } from "@/fetch";
import { useRecoilState } from "recoil";
import { startChatState } from "../../state/atom";
import { useRouter } from "next/router";
import { ProfileImg } from "../common/ProfileImg";

export const NewFriend = ({ findedFriend, setNewFriendId, newFriendId }) => {
  const canvasRef = useRef();
  const imgRef = useRef();

  const { nickName, id, profileImg, follow } = findedFriend;
  const router = useRouter();
  const [chatState, setChatState] = useRecoilState(startChatState);
  // useEffect(() => {
  //   drawCanvas(100, 100, canvasRef, imgRef, profileImg);
  // }, []);
  const handleChattingButton = async () => {
    setChatState({
      contact: [{ profileImg, contactId: id }],
      roomName: nickName,
    });
    const { roomId } = await plusChatRoom([id], "customer");
    router.push({
      pathname: `/chatting/room/${roomId}`,
      query: { IsFriend: "customer" },
    });
  };
  return (
    <div>
      <ProfileImg src={profileImg} />
      {/* <canvas ref={canvasRef} /> */}
      <p>{nickName}</p>
      <Link href="#">쿨타임</Link>
      <button onClick={handleChattingButton} className="block">
        채팅
      </button>
      <button
        onClick={() => {
          console.log(id);
          if (newFriendId) {
            setNewFriendId(null);
          } else {
            setNewFriendId(id);
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
