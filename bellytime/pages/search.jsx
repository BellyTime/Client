import { deleteRecentSearch } from "../fetch";

import {
  useRef,
  useLayoutEffect,
  useEffect,
  useState,
  useCallback,
} from "react";
import { SearchInput, RecentSearch, ShopList } from "../components";
import { getSearchWords, getShopList, getRecentSearch } from "../fetch";
import { v4 as uuidv4 } from "uuid";
import { Link } from "../components";
import { sortBy } from "lodash";
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
    console.log(input);
  }, [input]);

  useEffect(async () => {
    const rct = await getRecentSearch();
    setRecent(rct);
  }, []);

  const handleOnClick = async (input) => {
    const sl = await getShopList(input, sortBy);
    setShopList(sl);
    if (input) setRecent((recent) => [...new Set([...recent, input])]);
    setSearched(true);
  };

  const handleInputEnter = useCallback(
    (e) => {
      e.preventDefault();
      if (input) {
        handleOnClick(input);
      }
    },
    [input]
  );
  //useCallback 안먹힘;
  const handleRecentSearch = async (content) => {
    setInput(content);
    handleOnClick(content);
  };
  return (
    <div>
      <SearchInput
        input={input}
        setInput={setInput}
        setSearchData={setSearchData}
        setShopList={setShopList}
        onSubmit={handleInputEnter}
        setSearched={setSearched}
        //엔터눌럿을때도 검색가게. 엔터누르면 키보드 사라지기
      />
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
