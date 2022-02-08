import { useEffect, useRef } from "react";
import { drawCanvas } from "../followingShop/drawCanvas";
import { Link } from "..";
export const Friend = ({
  name,
  profileImg,
  friendId,
  setUnfollow,
  unfollow,
}) => {
  const canvasRef = useRef();
  const imgRef = useRef();
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
          if (unfollow.includes(friendId)) {
            setUnfollow((unfollow) =>
              unfollow.filter((element) => element !== friendId)
            );
          } else {
            setUnfollow((unfollow) => [...unfollow, friendId]);
          }
        }}
      >
        팔로우 활성/비활성
      </button>
    </div>
  );
};
