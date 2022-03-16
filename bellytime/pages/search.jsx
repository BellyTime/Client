import { deleteRecentSearch, getSearchWords } from "../fetch";
import { useRef, useEffect, useState, useCallback } from "react";
import {
  RecentSearch,
  ShopList,
  SearchInputUI,
  SearchResultSection,
} from "../components";
import { getShopList, getRecentSearch } from "../fetch";
import { v4 as uuidv4 } from "uuid";
import { debounce } from "lodash";

//1. 실시간 인기 검색
// 2. 검색어 리스트
//input 클릭했을때 input element가 focus 될 것.
//
//3. 결과 리스트 반환
export default function Search() {
  const [recent, setRecent] = useState(null);
  const [searchData, setSearchData] = useState("");
  const [shopList, setShopList] = useState("");
  const [input, setInput] = useState("");

  const [sortBy, setSortBy] = useState("follow");
  const [searched, setSearched] = useState(false);
  useEffect(() => {
    getRecentSearch(setRecent);
  }, []);

  useEffect(() => {
    handleOnClick(input, sortBy);
  }, [sortBy]);

  const handleOnClick = async (input) => {
    if (input) {
      const sl = await getShopList(input, sortBy);
      setShopList(sl);
      setRecent((recent) => [...new Set([...recent, input])]);
      setSearched(true);
    }
  };

  const handleInputEnter = (e, input, sortBy) => {
    e.preventDefault();
    if (input) {
      handleOnClick(input, sortBy);
    }
  };

  const handleOnSubmit = (e) => {
    handleInputEnter(e, input, sortBy);
  };

  const onDebounceChange = useCallback(
    debounce((value) => {
      value && getSearchWords(value, setSearchData);
    }, 500),
    []
  );
  const handleOnChange = (e) => {
    e.preventDefault();
    setSearched(false);
    setShopList("");
    setInput(e.target.value);
    onDebounceChange(e.target.value);
  };

  return (
    <div>
      <SearchInputUI
        handleOnChange={handleOnChange}
        input={input}
        onSubmit={handleOnSubmit}
      />
      {searched && (
        <div className="flex justify-evenly">
          <button
            onClick={(e) => {
              e.preventDefault();
              setSortBy("follow");
            }}
          >
            팔로우순
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setSortBy("bellscore");
            }}
          >
            벨점순
          </button>
        </div>
      )}
      <SearchResultSection
        input={input}
        recent={recent}
        setRecent={setRecent}
        shopList={shopList}
        searchData={searchData}
        setInput={setInput}
        handleOnClick={handleOnClick}
      />
    </div>
  );
}
//https://nextjs.org/docs/api-reference/next/link
