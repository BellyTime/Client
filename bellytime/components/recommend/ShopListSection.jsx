import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getShopFeed, getShopWithFood } from "../../fetch";
import { ShopList } from "../ShopList";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import { Shop } from "../followingShop/Shop";

export const ShopListSection = ({ shopList, position, foodId }) => {
  // const [shopFeed, setShopFeed] = useState("");
  const [filter, setFilter] = useState("follow");
  const { lng, lat } = position;

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
    ["shoplist", filter, foodId, lng, lat],
    async ({ pageParam = 1 }) => {
      console.log(pageParam);
      return await getShopWithFood(filter, foodId, lat, lng, pageParam).then(
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

  return (
    <div>
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
          <div>
            {data?.pages?.map((page) => (
              <>
                {page.map((content) => (
                  <Shop key={uuidv4()} content={content} />
                ))}
              </>
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};
