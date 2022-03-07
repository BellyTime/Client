import { SearchBar } from "..";
import { findFriend } from "@/fetch";
import { useState } from "react";
import { NewFriend } from "..";
export const SearchFriend = ({
  setFindedFriend,
  findedFriend,
  newFriendId,
  setNewFriendId,
}) => {
  const [value, setValue] = useState("");
  return (
    <>
      <SearchBar
        value={value}
        setValue={setValue}
        onClick={() => value && findFriend(setFindedFriend, value)}
      />

      {findedFriend ? (
        <NewFriend
          findedFriend={findedFriend}
          newFriendId={newFriendId}
          setNewFriendId={setNewFriendId}
        />
      ) : (
        "친구없음"
      )}
    </>
  );
};
