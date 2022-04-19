import { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { getPreviousChat } from "../../fetch";
import { ChatMessage } from "./ChatMessage";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";

export const PreviousChatSection = ({
  roomId,
  allContent,
  scrollableTarget,
}) => {
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
      ref={scrollableTarget}
      style={{
        height: "100%",
        overflow: "auto",
        display: "flex",
        flexDirection: "column-reverse",
      }}
      className="scrollbar-hide"
      //https://merrily-code.tistory.com/169#:~:text=%F0%9F%9B%A0%20Tailwind%20CSS%EC%9D%98%20%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8%20%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0%2C%20tailwind%2Dscrollbar%2Dhide&text=%EB%B0%94%EB%A1%9C%20%EC%9D%B4%EB%9F%B4%20%EB%95%8C%20%ED%85%8C%EC%9D%BC%EC%9C%88%EB%93%9C,%EB%A5%BC%20%EC%88%A8%EA%B8%B8%20%EC%88%98%20%EC%9E%88%EA%B2%8C%20%EB%90%A9%EB%8B%88%EB%8B%A4.
    >
      {allContent &&
        [...allContent]
          .reverse()
          .map(({ nickName, content, sendTime, sender }) => (
            <ChatMessage
              key={uuidv4()}
              nickName={nickName}
              content={content}
              sendTime={sendTime}
              sender={sender}
            />
          ))}
      {status === "success" && (
        <InfiniteScroll
          // scrollThreshold={0}
          dataLength={data?.pages.length * 20}
          next={() => {
            setTimeout(fetchNextPage, 1000);
          }}
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
