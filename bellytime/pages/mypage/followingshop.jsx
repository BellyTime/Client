import { useEffect, useState, useRef } from "react";
import { followingShopList, unfollowShop } from "../../fetch";
import { Shop } from "../../components";

export default function FollowingShop() {
  const [followingShops, setFollowingShops] = useState([]);
  const [unfollow, setUnfollow] = useState([]);
  const componentWillUnmount = useRef(false);

  useEffect(() => {
    return () => {
      componentWillUnmount.current = true;
    };
  }, []);
  useEffect(() => {
    return () => {
      if (componentWillUnmount.current && unfollow.length)
        unfollowShop(unfollow);
    };
  }, [unfollow]);

  useEffect(() => {
    followingShopList(setFollowingShops);
  }, []);

  useEffect(() => {
    console.log(unfollow);
  }, [unfollow]);

  return (
    <>
      <div>팔로우하는 가게리스트</div>
      {followingShops.length &&
        followingShops.map(({ contactId, name, profileImg }) => (
          <Shop
            key={contactId}
            shopName={name}
            profileImg={profileImg}
            setUnfollow={setUnfollow}
            unfollow={unfollow}
            shopId={contactId}
          />
        ))}
    </>
  );
}
