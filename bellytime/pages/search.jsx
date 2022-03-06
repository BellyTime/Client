import { deleteRecentSearch } from "../fetch";

import { useRef, useEffect, useState, useCallback } from "react";
import { SearchInput, RecentSearch, ShopList } from "../components";
import { getShopList, getRecentSearch } from "../fetch";
import { v4 as uuidv4 } from "uuid";

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
    async (input, sortBy) => {
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
  const handleRecentSearch = async (content, sortBy) => {
    setInput(content);
    handleOnClick(content, sortBy);
  };
  return (
    <div>
      <SearchInput
        input={input}
        setInput={setInput}
        setSearchData={setSearchData}
        setShopList={setShopList}
        onSubmit={(e) => {
          handleInputEnter(e, input, sortBy);
        }}
        setSearched={setSearched}
        //엔터눌럿을때도 검색가게. 엔터누르면 키보드 사라지기
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
              setSortBy("bellScore");
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
            onClick={() => handleRecentSearch(content, sortBy)}
            setRecent={setRecent}
            setRecentDel={setRecentDel}
            recentDel={recentDel}
          />
          //x누르면 검색어 삭제되게.
        ))}

      {input &&
        !shopList &&
        searchData &&
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
