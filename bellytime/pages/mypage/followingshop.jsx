import { useEffect, useState } from "react";
import { followingShopList, unfollowShop } from "../../fetch";
import { Shop } from "../../components";
export default function FollowingShop() {
  const [followingShops, setFollowingShops] = useState([]);
  const [unfollow, setUnfollow] = useState([]);
  useEffect(() => {
    followingShopList(setFollowingShops);
    return () => {
      if (unfollow.length) unfollowShop(unfollow);
    };
  }, []);
  useEffect(() => {
    console.log(unfollow);
  }, [unfollow]);

  return (
    <>
      <div>팔로우하는 가게리스트</div>
      {followingShops.length &&
        followingShops.map(({ shopId, shopName, profileImg }) => (
          <Shop
            key={shopId}
            shopName={shopName}
            imgSrc={profileImg}
            setUnfollow={setUnfollow}
            unfollow={unfollow}
            shopId={shopId}
          />
        ))}
    </>
  );
}
