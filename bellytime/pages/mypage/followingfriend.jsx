import { useEffect, useState } from "react";
import { followingFriendList, unfollowFriend } from "../../fetch";
import { Friend } from "../../components";
export default function FollowingShop() {
  const [followingFriends, setFollowingFriends] = useState([]);
  const [unfollow, setUnfollow] = useState([]);
  useEffect(() => {
    followingFriendList(setFollowingFriends);
    return () => {
      if (unfollow.length) unfollowFriend(unfollow);
    };
  }, []);
  useEffect(() => {
    console.log(unfollow);
  }, [unfollow]);

  return (
    <>
      <div>팔로우하는 친구리스트</div>
      {followingFriends.length &&
        followingFriends.map(({ name, friendId, profileImg }) => (
          <Friend
            setUnfollow={setUnfollow}
            unfollow={unfollow}
            name={name}
            friendId={friendId}
            profileImg={profileImg}
            key={friendId}
          />
        ))}
    </>
  );
}
