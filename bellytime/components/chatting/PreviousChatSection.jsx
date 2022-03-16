import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getPreviousChat } from "../../fetch";
import { ChatMessage } from "./ChatMessage";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";

export const PreviousChatSection = ({ roomId }) => {
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
    "previousChat",
    async ({ pageParam = 1 }) => {
      console.log(pageParam);
      return await getPreviousChat(roomId, pageParam).then((result) => result);
    },

    {
      select: (data) => ({
        pages: [...data.pages].reverse(),
        pageParams: [...data.pageParams].reverse(),
      }),
      getNextPageParam: (lastPage, pages) => {
        const morePagesExist = lastPage?.length === 20;
        if (!morePagesExist) {
          return false;
        }
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
    <div id="scrollableDiv">
      {status === "success" && (
        <InfiniteScroll
          dataLength={data?.pages.length * 20}
          next={fetchNextPage}
          inverse={true}
          hasMore={hasNextPage}
          style={{ display: "flex", flexDirection: "column-reverse" }}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>대화를 모두 불러왔습니다</b>
            </p>
          }
          scrollableTarget="scrollableDiv"
        >
          {data?.pages?.map((page) => (
            <>
              {page.map(({ nickName, content, sendTime, sender }) => (
                <ChatMessage
                  nickName={nickName}
                  content={content}
                  sendTime={sendTime}
                  sender={sender}
                />
              ))}
            </>
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
};

//https://stackoverflow.com/questions/65590195/no-queryclient-set-use-queryclientprovider-to-set-one
//https://dev.to/elisabethleonhardt/easy-and-quick-infinite-scroll-with-nextjs-and-react-query-36lh
//https://velog.io/@hyeon930/%EB%AC%B4%ED%95%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EB%A7%8C%EB%93%A4%EA%B8%B0-Throttling
//https://hini7.tistory.com/202
//https://stackoverflow.com/questions/270612/scroll-to-bottom-of-div
