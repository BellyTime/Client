import { useEffect, useState } from "react";
import { followingFriendList, unfollowFriend, findFriend } from "../../fetch";
import { Friend, SearchBar, SearchFriend, Modal } from "../../components";

export default function FollowingShop() {
  const [followingFriends, setFollowingFriends] = useState([]);
  const [unfollow, setUnfollow] = useState([]);
  const [findedFriend, setFindedFriend] = useState(null);
  const [modal, setModal] = useState(false);
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
      <button onClick={() => setModal(true)}>친구찾기</button>
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
              
            />
          }
          subject={"친구찾기"}
          setModal={setModal}
        />
      )}
    </>
  );
}
