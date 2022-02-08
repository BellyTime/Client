import { useEffect, useRef } from "react";
import { drawCanvas } from "../followingShop/drawCanvas";
import { Link } from "..";
import { newFriend } from "../../fetch";
export const NewFriend = ({ findedFriend }) => {
  const canvasRef = useRef();
  const imgRef = useRef();
  const { name, friendId, profileImg } = findedFriend;
  useEffect(() => {
    drawCanvas(100, 100, canvasRef, imgRef, profileImg);
  }, []);
  return (
    <div>
      <img ref={imgRef} />
      <canvas ref={canvasRef} />
      <p>{name}</p>
      <Link href="#">쿨타임</Link>
      <Link href="#">채팅</Link>
      <button
        onClick={() => {
          newFriend(friendId);
        }}
      >
        팔로우 활성/비활성
      </button>
    </div>
  );
};