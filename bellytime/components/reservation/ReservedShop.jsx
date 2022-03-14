import { useEffect, useRef } from "react";
import { ProfileImg } from "../common/ProfileImg";
import { drawCanvas } from "../followingShop/drawCanvas";
export const ReservedShop = ({ content }) => {
  const { shopId, shopName, profileImg, reservedDate, dDay, personnel } =
    content;
  const canvasRef = useRef();
  const imgRef = useRef();
  // useEffect(() => {
  //   drawCanvas(100, 100, canvasRef, imgRef, profileImg);
  // }, []);
  return (
    <div>
      <ProfileImg src={profileImg} />
      {/* <canvas ref={canvasRef} /> */}
      <p>{shopName}</p>
      <p>{reservedDate}</p>
      <p>{dDay}</p>
      <p>{personnel}명</p>
    </div>
  );
};
