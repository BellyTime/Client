import { ShopList, RecentSearch } from "..";
import { v4 as uuidv4 } from "uuid";
export const SearchResultSection = ({
  input,
  recent,
  setRecent,
  shopList,
  searchData,
  setInput,
  handleOnClick,
}) => {
  const handleRecentSearch = async (content) => {
    setInput(content);
    handleOnClick(content);
  };
  return (
    <>
      {!input &&
        recent?.map((content, index) => (
          <RecentSearch
            key={uuidv4()}
            content={content}
            index={index}
            onClick={() => handleRecentSearch(content)}
            setRecent={setRecent}
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
    </>
  );
};
