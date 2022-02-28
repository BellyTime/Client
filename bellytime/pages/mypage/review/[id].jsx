import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { getMyReview, deleteReview } from "../../../fetch";
import { v4 as uuidv4 } from "uuid";
import { AlertModal } from "../../../components";
export default function VisitedReview() {
  const router = useRouter();
  const { id } = router.query;
  const [review, setReview] = useState("");
  const [alert, setAlert] = useState(false);

  useEffect(async () => {
    const rv = await getMyReview(id);
    setReview(rv);
  }, []);

  const handleDelete = () => {
    deleteReview(id);
    router.push("/mypage/review");
  };
  return (
    <div>
      {review && (
        <>
          <p>{review.shopName}</p>
          <p>벨점 {review.score}</p>
          <p>{review.content}</p>
          <p>{review.visibie}</p>
          <div className="flex ">
            {review.images.map((el) => (
              <img key={uuidv4()} className="w-20" src={el} />
            ))}
          </div>
          <button onClick={() => setAlert(true)} className="block">
            삭제하기
          </button>
        </>
      )}

      {alert && (
        <AlertModal
          content="삭제하시겠습니까?"
          setAlert={setAlert}
          func={handleDelete}
        />
      )}
    </div>
  );
}
//https://velog.io/@sbinha/next.js-Router%EB%A5%BC-%ED%86%B5%ED%95%B4-props-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84
