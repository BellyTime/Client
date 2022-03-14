import { useEffect, useRef } from "react";
import { ProfileImg } from "../common/ProfileImg";
import { drawCanvas } from "../followingShop/drawCanvas";
export const Profile = ({ myName, imgSrc }) => {
  const canvasRef = useRef();
  const imgRef = useRef();
  // useEffect(() => {
  //   drawCanvas(100, 100, canvasRef, imgRef, imgSrc);
  // }, []);
  return (
    <div>
      <ProfileImg src={imgSrc} />
      {/* <canvas ref={canvasRef} /> */}
      <p>{myName}</p>
    </div>
  );
};
//      <input type="file" accept="image/*" onChange={}/>
//https://velog.io/@edie_ko/React-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%85%EB%A1%9C%EB%93%9C%ED%95%98%EA%B8%B0-with-Axios
