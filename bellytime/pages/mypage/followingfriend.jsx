import { useEffect, useState, useRef } from "react";
import { followingFriendList, newFriend, unfollowFriend } from "../../fetch";
import { Friend, SearchFriend, Modal } from "../../components";
import { useUnload } from "../../useHook/useUnload";

export default function FollowingFriend() {
  const [followingFriends, setFollowingFriends] = useState([]);
  const [unfollow, setUnfollow] = useState([]);
  const [findedFriend, setFindedFriend] = useState(null);
  const [modal, setModal] = useState(false);
  const [newFriendId, setNewFriendId] = useState(null);
  const componentWillUnmount = useRef(false);
  const handleUnfollowFriend = () => {
    unfollowFriend(unfollow);
  };

  useUnload((e) => {
    e.preventDefault();
    unfollowFriend(unfollow);
  });
  useEffect(() => {
    return () => {
      componentWillUnmount.current = true;
    };
  }, []);
  useEffect(() => {
    return () => {
      if (componentWillUnmount.current && unfollow.length)
        unfollowFriend(unfollow);
    };
  }, [unfollow]);

  useEffect(() => {
    followingFriendList(setFollowingFriends);
  }, []);

  useEffect(() => {
    console.log("unfollow", unfollow);
  }, [unfollow]);

  useEffect(() => {
    console.log("newFriendId", newFriendId);
  }, [newFriendId]);
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
        followingFriends.map(({ name, contactId, profileImg }) => (
          <Friend
            setUnfollow={setUnfollow}
            unfollow={unfollow}
            name={name}
            friendId={contactId}
            profileImg={profileImg}
            key={contactId}
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
          setModal={() => {
            setModal(false);
            newFriendId && newFriend(newFriendId);
          }}
          close={() => {
            setModal(false);
            newFriendId && newFriend(newFriendId);
          }}
          newFriendId={newFriendId}
        />
      )}
    </>
  );
}
