import {
  useRef,
  useLayoutEffect,
  useEffect,
  useState,
  useCallback,
} from "react";
import { SearchInput, RecentSearch } from "../components";
import { getSearchWords, getShopList, getRecentSearch } from "../fetch";
import { v4 as uuidv4 } from "uuid";
import { Link } from "../components";
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

  useEffect(async () => {
    const rct = await getRecentSearch();
    setRecent(rct);
  }, []);

  const handleOnClick = async () => {
    const sl = await getShopList();
    setShopList(sl);
    if (input) setRecent([...recent, input]);
  };
  return (
    <div>
      <SearchInput
        input={input}
        setInput={setInput}
        setSearchData={setSearchData}
        setShopList={setShopList}
        onClick={handleOnClick}
        //엔터눌럿을때도 검색가게. 엔터누르면 키보드 사라지기
      />
      {!input &&
        recent?.map((content, index) => (
          <RecentSearch
            key={uuidv4()}
            content={content}
            index={index}
            onClick={() => {
              handleOnClick();
              setInput(content);
            }}
          />
          //x누르면 검색어 삭제되게.
        ))}

      {input &&
        !shopList &&
        searchData &&
        searchData.map((el, index) => (
          <p onClick={handleOnClick} key={index}>
            {el}
          </p>
        ))}
      {input &&
        shopList &&
        shopList.map(
          ({
            shopId,
            shopName,
            address,
            menu,
            profileImg,
            reviewCount,
            status,
            score,
            followerCount,
          }) => (
            <Link href={`shop/${shopId}`} key={uuidv4()}>
              <div>
                {`${
                  (shopName,
                  address,
                  menu,
                  reviewCount,
                  status,
                  score,
                  followerCount)
                }`}
                <br />
                <img
                  className="inline object-cover w-16 h-16 mr-2 rounded-full"
                  src={profileImg}
                />
              </div>
            </Link>
          )
        )}
    </div>
  );
}
//https://nextjs.org/docs/api-reference/next/link
