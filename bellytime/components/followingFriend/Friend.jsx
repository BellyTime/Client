import { useEffect, useRef, useState } from "react";
import { drawCanvas } from "../followingShop/drawCanvas";
import {
  plusChatRoom,
  getPreviousChat,
  unfollowFriend,
  newFriend,
} from "@/fetch";
import { Link } from "..";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import {
  chatContentState,
  chatImageState,
  startChatState,
} from "../../state/atom";
import { ProfileImg } from "../common/ProfileImg";
export const Friend = ({ nickName, profileImg, friendId }) => {
  const canvasRef = useRef();
  const imgRef = useRef();
  const router = useRouter();
  const [chatState, setChatState] = useRecoilState(startChatState);
  const [chatContent, setChatContent] = useRecoilState(chatContentState);
  const [unfollowCheck, setUnfollowCheck] = useState(false);
  // useEffect(() => {
  //   drawCanvas(100, 100, canvasRef, imgRef, profileImg);
  // }, []);
  const handleChattingButton = async () => {
    setChatState({
      contact: [{ profileImg, contactId: friendId }],
      roomName: nickName,
    });
    const roomId = await plusChatRoom([friendId], "customer");
    console.log(roomId);
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
      <Link href={`/mypage/calender/${friendId}`}>쿨타임</Link>
      <button onClick={handleChattingButton} className="block">
        채팅
      </button>

      <button
        onClick={() => {
          if (unfollowCheck) {
            newFriend(friendId);
          } else {
            unfollowFriend([{ friendId }]);
          }
          setUnfollowCheck((old) => !old);
        }}
      >
        {unfollowCheck ? "팔로우" : "언팔로우"}
      </button>
    </div>
  );
};
