import { useEffect, useState, useRef } from "react";
import { followingShopList, unfollowShop } from "../../fetch";
import { Shop } from "../../components";

export default function FollowingShop() {
  const [followingShops, setFollowingShops] = useState([]);

  useEffect(() => {
    followingShopList(setFollowingShops);
  }, []);

  return (
    <>
      <div>팔로우하는 가게리스트</div>
      {followingShops.length &&
        followingShops.map((content) => (
          <Shop key={content.shopId} content={content} />
        ))}
    </>
  );
}
