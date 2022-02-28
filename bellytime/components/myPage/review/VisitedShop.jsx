import { useEffect, useRef } from "react";
import { Link } from "../..";
export const VisitedShop = ({ content }) => {
  const { shopId, shopName, date, state, reservationId } = content;

  return (
    <div>
      <p>{shopName}</p>
      <button>
        {state == "writable" ? (
          <Link
            href={`/mypage/reviewWrite/${reservationId}
          `}
          >
            후기작성
          </Link>
        ) : (
          <Link href={`/mypage/review/${reservationId}`}>후기보기</Link>
        )}
      </button>
    </div>
  );
};
