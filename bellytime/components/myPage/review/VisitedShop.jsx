import { useEffect, useRef } from "react";
import { Link } from "../..";
export const VisitedShop = ({ content }) => {
  const { shopId, shopName, date, state } = content;

  return (
    <div>
      <p>{shopName}</p>
      <button>
        {state == "writable" ? (
          <Link
            href="/mypage/reviewWrite
          "
          >
            후기작성
          </Link>
        ) : (
          <Link href="#">후기보기</Link>
        )}
      </button>
    </div>
  );
};
