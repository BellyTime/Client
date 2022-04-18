import { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { getPreviousChat } from "../../fetch";
import { ChatMessage } from "./ChatMessage";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";

export const PreviousChatSection = ({ roomId, scrollableTarget }) => {
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
      console.log("pageParam", pageParam);
      return await getPreviousChat(roomId, pageParam).then((result) => result);
    },

    {
      select: (data) => ({
        pages: [...data.pages].reverse(),
        pageParams: [...data.pageParams].reverse(),
      }),
      //https://react-query-beta.tanstack.com/guides/infinite-queries#what-if-i-want-to-show-the-pages-in-reversed-order

      getNextPageParam: (lastPage, pages) => {
        const morePagesExist = lastPage?.length === 20;
        if (!morePagesExist) {
          return false;
        }
        return pages.length + 1;
      },
      retryDelay: 1000,
      retry: 10,
    }
  );

  return (
    <div
      id="previousDiv"
      style={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column-reverse",
      }}
    >
      {status === "success" && (
        <InfiniteScroll
          // scrollThreshold={0}
          dataLength={data?.pages.length * 20}
          next={fetchNextPage}
          inverse={true}
          hasMore={hasNextPage}
          scrollableTarget="previousDiv"
        >
          {data?.pages?.map((page) => (
            <div key={uuidv4()}>
              {page?.map(({ nickName, content, sendTime, sender }) => (
                <ChatMessage
                  key={uuidv4()}
                  nickName={nickName}
                  content={content}
                  sendTime={sendTime}
                  sender={sender}
                />
              ))}
            </div>
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
