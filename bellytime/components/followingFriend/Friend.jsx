import { useEffect, useRef } from "react";
import { drawCanvas } from "../followingShop/drawCanvas";
import { plusChatRoom } from "@/fetch";
import { Link } from "..";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { chatImageState } from "../../state/atom";
export const Friend = ({
  name,
  profileImg,
  friendId,
  setUnfollow,
  unfollow,
}) => {
  const canvasRef = useRef();
  const imgRef = useRef();
  const router = useRouter();
  const [chatState, setChatState] = useRecoilState(chatImageState);
  useEffect(() => {
    drawCanvas(100, 100, canvasRef, imgRef, profileImg);
  }, []);
  const handleChattingButton = async () => {
    setChatState({
      contact: [{ profileImg, contactId: friendId }],
      roomName: name,
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
      <img ref={imgRef} />
      <canvas ref={canvasRef} />
      <p>{name}</p>
      <Link href="#">쿨타임</Link>
      <button onClick={handleChattingButton} className="block">
        채팅
      </button>
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
    </div>
  );
};
