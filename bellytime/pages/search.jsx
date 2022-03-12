import { deleteRecentSearch, getSearchWords } from "../fetch";
import { useRef, useEffect, useState, useCallback } from "react";
import {
  RecentSearch,
  ShopList,
  SearchInputUI,
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
  const [recentDel, setRecentDel] = useState([]);
  const componentWillUnmount = useRef(false);
  const [sortBy, setSortBy] = useState("follow");
  const [searched, setSearched] = useState(false);
  useEffect(() => {
    getRecentSearch(setRecent);
    return () => {
      componentWillUnmount.current = true;
    };
  }, []);

  useEffect(() => {
    return () => {
      if (componentWillUnmount.current && recentDel.length)
        deleteRecentSearch(recentDel);
    };
  }, [recentDel]);

  useEffect(() => {
    handleOnClick(input, sortBy);
  }, [sortBy]);

  const handleOnClick = useCallback(
    async (input) => {
      if (input) {
        const sl = await getShopList(input, sortBy);
        setShopList(sl);
        if (input) setRecent((recent) => [...new Set([...recent, input])]);
        setSearched(true);
      }
    },
    [input]
  );

  const handleInputEnter = useCallback(
    (e, input, sortBy) => {
      e.preventDefault();
      if (input) {
        handleOnClick(input, sortBy);
      }
    },
    [input]
  );
  //useCallback 안먹힘;
  const handleRecentSearch = async (content) => {
    setInput(content);
    handleOnClick(content);
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
      {!input &&
        recent?.map((content, index) => (
          <RecentSearch
            key={uuidv4()}
            content={content}
            index={index}
            onClick={() => handleRecentSearch(content)}
            setRecent={setRecent}
            setRecentDel={setRecentDel}
            recentDel={recentDel}
          />
          //x누르면 검색어 삭제되게.
        ))}

      {input &&
        !shopList &&
        searchData?.length &&
        searchData.map((el, index) => (
          <p onClick={() => handleOnClick(el)} key={index}>
            {el}
          </p>
        ))}
      {input &&
        shopList &&
        shopList.map((content) => (
          <ShopList key={uuidv4()} content={content} />
        ))}
    </div>
  );
}
//https://nextjs.org/docs/api-reference/next/link
