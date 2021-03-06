import { v4 as uuidv4 } from "uuid";
import { Profile } from "../myPage/Profile";
import { PhotoSlider } from "../PhotoSlider";
export const FeedDetail = ({ feedContent }) => {
  const { shopId, shopName, title, profileImg, content, images } = feedContent;
  return (
    <>
      <img
        className="inline object-cover w-16 h-16 mr-2 rounded-full"
        src={profileImg}
      />
      <p>{shopName}</p>
      <p>{title}</p>
      {images.length !== 0 && <PhotoSlider images={images} />}
      <p>{content}</p>
    </>
  );
};
