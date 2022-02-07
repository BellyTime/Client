import { useEffect, useRef } from "react";
import { drawCanvas } from "./drawCanvas";
import { Link } from "..";
export const Shop = ({ shopName, imgSrc, shopId, setUnfollow, unfollow }) => {
  const canvasRef = useRef();
  const imgRef = useRef();
  useEffect(() => {
    drawCanvas(canvasRef, imgRef, imgSrc);
  }, []);
  return (
    <div>
      <img ref={imgRef} />
      <canvas ref={canvasRef} />
      <p>{shopName}</p>
      <Link href="#">채팅</Link>
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
