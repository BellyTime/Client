import { useEffect, useState, useRef } from "react";
import { followingFriendList } from "../../fetch";
import { Friend, SearchFriend, Modal } from "../../components";
import { useUnload } from "../../useHook/useUnload";
import { useRecoilValue } from "recoil";
import { userState } from "../../state/atom";
export default function FollowingFriend() {
  const [followingFriends, setFollowingFriends] = useState([]);
  const [findedFriend, setFindedFriend] = useState(null);
  const [modal, setModal] = useState(false);

  const { userId, userNickName } = useRecoilValue(userState);
  console.log("user", userId, userNickName);

  useEffect(() => {
    followingFriendList(setFollowingFriends);
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setModal(true);
        }}
      >
        친구찾기
      </button>
      <div>팔로우하는 친구리스트</div>
      {followingFriends.length &&
        followingFriends.map(({ nickName, contactId, profileImg }) => (
          <Friend
            nickName={nickName}
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
            />
          }
          subject={"친구찾기"}
          setModal={() => {
            setModal(false);
            window.location.reload();
          }}
          close={() => {
            setModal(false);
            window.location.reload();
          }}
        />
      )}
    </>
  );
}
