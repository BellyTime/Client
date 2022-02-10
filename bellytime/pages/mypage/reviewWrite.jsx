import { useState } from "react";
import { enrollReview } from "../../fetch";
import { UploadImages } from "../../components";

export default function ReviewWrite() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [secret, setSecret] = useState(false);

  return (
    <>
      <div>후기작성하기</div>
      <input
        placeholder="후기를 입력하세요"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <UploadImages setImages={setImages} images={images} />
      <p>사장만 보기</p>
      <input
        type="checkbox"
        checked={secret}
        onChange={() => {
          console.log(!secret ? "check" : "unchecked");
          setSecret(!secret);
        }}
        className={`block`}
      />
      <button onClick={() => enrollReview(value, images, secret)}>확인</button>
    </>
  );
}
//사진업로드하기
