import { useEffect, useRef } from "react";
import { drawCanvas } from "./drawCanvas";
import { Link } from "..";
import { useRecoilState } from "recoil";
import { chatImageState } from "../../state/atom";
import { useRouter } from "next/router";
import { plusChatRoom } from "@/fetch";
import { ShopList } from "../ShopList";

export const Shop = ({ content, setUnfollow, unfollow }) => {
  const { shopId } = content;

  return (
    <div>
      <ShopList
        content={content}
        child={
          <button
            onClick={() => {
              if (unfollow.includes(shopId)) {
                setUnfollow((unfollow) =>
                  unfollow.filter(({ shopId }) => element !== shopId)
                );
              } else {
                setUnfollow((unfollow) => [...unfollow, { shopId }]);
              }
            }}
          >
            팔로우 활성/비활성
          </button>
        }
      />
    </div>
  );
};
