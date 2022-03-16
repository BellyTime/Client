import { useEffect, useRef, useState } from "react";
import { drawCanvas } from "../followingShop/drawCanvas";
import { Link } from "..";
import {
  plusChatRoom,
  getPreviousChat,
  unfollowFriend,
  newFriend,
} from "@/fetch";
import { useRecoilState } from "recoil";
import { startChatState } from "../../state/atom";
import { useRouter } from "next/router";
import { ProfileImg } from "../common/ProfileImg";

export const NewFriend = ({ findedFriend}) => {
  const canvasRef = useRef();
  const imgRef = useRef();

  const { nickName, id, profileImg, follow } = findedFriend;
  const router = useRouter();
  const [chatState, setChatState] = useRecoilState(startChatState);
  const [followCheck, setFollowCheck] = useState(follow);
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
          if (followCheck) {
            unfollowFriend([{ friendId: id }]);
          } else {
            newFriend(id);
          }
          setFollowCheck((old) => !old);
        }}
      >
        <span>{followCheck ? "언팔로우" : "팔로우"}</span>
      </button>
    </div>
  );
};
