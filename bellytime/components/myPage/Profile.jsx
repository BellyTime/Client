import { useEffect, useRef } from "react";
import { drawCanvas } from "../followingShop/drawCanvas";
export const Profile = ({ myName, imgSrc }) => {
  const canvasRef = useRef();
  const imgRef = useRef();
  useEffect(() => {
    drawCanvas(100, 100, canvasRef, imgRef, imgSrc);
  }, []);
  return (
    <div>
      <img ref={imgRef} />
      <canvas ref={canvasRef} />
      <p>{myName}</p>
    </div>
  );
};
