import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getShopFeed } from "../../fetch";
import { Feed } from "./Feed";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";

export const FeedSection = ({ router, position }) => {
  // const [shopFeed, setShopFeed] = useState("");
  const [filter, setFilter] = useState("follow");
  const { lng, lat } = position;
  const [next, setNext] = useState(true);
  const {
    data,
    status,
    fetchNextPage,
    hasNextPage,
    error,
    isFetching,
    fetchMore,
    isFetchingNextPage,
    canFetchMore,
  } = useInfiniteQuery(
    ["feed", filter, lng, lat],
    async ({ pageParam = 1 }) => {
      console.log(pageParam);
      return await getShopFeed(filter, lng, lat, pageParam).then(
        (result) => result
      );
    },

    {
      getNextPageParam: (lastPage, pages) => {
        const morePagesExist = lastPage?.length === 10;
        if (!morePagesExist) return false;
        return pages.length + 1;
      },
      retryDelay: 1000,
      retry: 1,
    }
  );

  useEffect(() => {
    console.log("data", data);
  }, [data]);
  const handleClickFeedFilter = (e) => {
    e.preventDefault();
    setFilter(e.target.id);
  };

  return (
    <div>
      <div>
        <button id="follow" onClick={handleClickFeedFilter}>
          구독
        </button>
        {position?.lat && (
          <button id="near" onClick={handleClickFeedFilter}>
            근처
          </button>
        )}
      </div>
      {status === "success" && (
        <InfiniteScroll
          dataLength={data?.pages.length * 10}
          next={fetchNextPage}
          hasMore={hasNextPage}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="flex-col">
            {data?.pages?.map((page) => (
              <>
                {page?.map((content) => (
                  <Feed key={uuidv4()} router={router} feedContent={content} />
                ))}
              </>
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

//https://stackoverflow.com/questions/65590195/no-queryclient-set-use-queryclientprovider-to-set-one
//https://dev.to/elisabethleonhardt/easy-and-quick-infinite-scroll-with-nextjs-and-react-query-36lh
//https://velog.io/@hyeon930/%EB%AC%B4%ED%95%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EB%A7%8C%EB%93%A4%EA%B8%B0-Throttling
//https://hini7.tistory.com/202
