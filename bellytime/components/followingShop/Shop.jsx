import { useEffect, useRef, useState } from "react";
import { drawCanvas } from "./drawCanvas";
import { Link } from "..";
import { useRecoilState } from "recoil";
import { chatImageState } from "../../state/atom";
import { useRouter } from "next/router";
import { plusChatRoom, unfollowShop, followShop } from "@/fetch";
import { ShopList } from "../ShopList";

export const Shop = ({ content}) => {
  const { shopId } = content;
  const [unfollowCheck, setUnfollowCheck] = useState(false);

  return (
    <div>
      <ShopList
        content={content}
        child={
          <button
            onClick={() => {
              if (unfollowCheck) {
                followShop([{ shopId }]);
              } else {
                unfollowShop([{ shopId }]);
              }
              setUnfollowCheck((old) => !old);
            }}
          >
            {unfollowCheck ? "팔로우" : "언팔로우"}
          </button>
        }
      />
    </div>
  );
};
