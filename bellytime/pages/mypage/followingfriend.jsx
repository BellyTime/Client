import { useEffect, useState } from "react";
import { followingFriendList, unfollowFriend } from "../../fetch";
import { Friend, SearchFriend, Modal } from "../../components";

export default function FollowingShop() {
  const [followingFriends, setFollowingFriends] = useState([]);
  const [unfollow, setUnfollow] = useState([]);
  const [findedFriend, setFindedFriend] = useState(null);
  const [modal, setModal] = useState(false);
  const [newFriendId, setNewFriendId] = useState(null);
  useEffect(() => {
    followingFriendList(setFollowingFriends);
    return () => {
      if (unfollow.length) unfollowFriend(unfollow);
    };
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setModal(true);
          setNewFriendId(null);
        }}
      >
        친구찾기
      </button>
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
        ))}{" "}
      {modal && (
        <Modal
          content={
            <SearchFriend
              findedFriend={findedFriend}
              setFindedFriend={setFindedFriend}
              newFriendId={newFriendId}
              setNewFriendId={setNewFriendId}
            />
          }
          subject={"친구찾기"}
          setModal={() => setModal(false)}
          newFriendId={newFriendId}
        />
      )}
    </>
  );
}
