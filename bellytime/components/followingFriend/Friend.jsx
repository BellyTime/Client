import { useEffect, useRef } from "react";
import { drawCanvas } from "../followingShop/drawCanvas";
import { plusChatRoom, getPreviousChat } from "@/fetch";
import { Link } from "..";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import {
  chatContentState,
  chatImageState,
  startChatState,
} from "../../state/atom";
import { ProfileImg } from "../common/ProfileImg";
export const Friend = ({
  nickName,
  profileImg,
  friendId,
  setUnfollow,
  unfollow,
}) => {
  const canvasRef = useRef();
  const imgRef = useRef();
  const router = useRouter();
  const [chatState, setChatState] = useRecoilState(startChatState);
  const [chatContent, setChatContent] = useRecoilState(chatContentState);
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
      <Link href="#">쿨타임</Link>
      <button onClick={handleChattingButton} className="block">
        채팅
      </button>
      {unfollow && setUnfollow && (
        <button
          onClick={() => {
            if (unfollow.filter((e) => e.friendId == friendId).length > 0) {
              setUnfollow((unfollow) =>
                unfollow.filter((e) => e.friendId !== friendId)
              );
            } else {
              setUnfollow((unfollow) => [...unfollow, { friendId }]);
            }
          }}
        >
          팔로우 활성/비활성
        </button>
      )}
    </div>
  );
};
