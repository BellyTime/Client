import { Link } from "./Link";
// import { useRef, useEffect } from "react";
// import { drawCanvas } from "./followingShop/drawCanvas";
import { plusChatRoom } from "@/fetch";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { chatImageState } from "../state/atom";
export const ShopList = ({ content, child }) => {
  const {
    shopId,
    shopName,
    profileImg,
    reviewCount,
    score,
    address,
    status,
    followerCount,
  } = content;
  //   const imgRef = useRef();
  //   const canvasRef = useRef();
  //   useEffect(() => {
  //     drawCanvas(100, 100, canvasRef, imgRef, profileImg);
  //   }, []);
  const [chatState, setChatState] = useRecoilState(chatImageState);
  const router = useRouter();
  const handleChattingButton = async () => {
    setChatState({
      contact: [{ profileImg, contactId: shopId }],
      roomName: shopName,
    });
    const  roomId  = await plusChatRoom([shopId], "shop", shopName);
    console.log("roomId");
    router.push({
      pathname: `/chatting/room/${roomId}`,
      query: { IsFriend: "shop" },
    });
  };
  return (
    <div>
      <Link href={`../shop/${shopId}`}>
        <img
          // ref={imgRef}
          src={profileImg}
          className="inline object-cover w-16 h-16 mr-2 rounded-full"
        />
        {/* <canvas ref={canvasRef} /> */}
        <div>{shopName}</div>
        <div>{address}</div>
        <div>리뷰수:{reviewCount}</div>
        <div>운영상태:{status}</div>
        <div>벨점:{score}</div>
        <div>팔로워수:{followerCount}</div>
        <button onClick={handleChattingButton} className="block">
          채팅
        </button>
      </Link>
      {child}
    </div>
  );
};
