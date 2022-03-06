import { useEffect, useRef } from "react";
import { drawCanvas } from "./drawCanvas";
import { Link } from "..";
import { useRecoilState } from "recoil";
import { chatImageState } from "../../state/atom";
import { useRouter } from "next/router";
import { plusChatRoom } from "@/fetch";

export const Shop = ({
  shopName,
  profileImg,
  shopId,
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
      contact: [{ profileImg, contactId: shopId }],
      roomName: [shopName],
    });
    const { roomId } = await plusChatRoom([shopId], "shop");
    router.push({
      pathname: `/chatting/room/${roomId}`,
      query: { IsFriend: "shop" },
    });
  };
  return (
    <div>
      <img ref={imgRef} />
      <canvas ref={canvasRef} />
      <p>{shopName}</p>
      <button onClick={handleChattingButton} className="block">
        채팅
      </button>

      <button
        onClick={() => {
          if (unfollow.includes(shopId)) {
            setUnfollow((unfollow) =>
              unfollow.filter((element) => element !== shopId)
            );
          } else {
            setUnfollow((unfollow) => [...unfollow, shopId]);
          }
        }}
      >
        팔로우 활성/비활성
      </button>
    </div>
  );
};
