import { SearchBar } from "..";
import { findFriend } from "@/fetch";
import { useState } from "react";
import { NewFriend } from "..";
export const SearchFriend = ({ setFindedFriend, findedFriend }) => {
  const [value, setValue] = useState("");
  return (
    <>
      <SearchBar
        value={value}
        setValue={setValue}
        onClick={() => value && findFriend(setFindedFriend, value)}
      />

      {findedFriend ? <NewFriend findedFriend={findedFriend} /> : "친구없음"}
    </>
  );
};
