import { useState } from "react";
import { enrollReview } from "../../../fetch";
import { UploadImages, ImagesUpload, BellScore } from "../../../components";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ReviewWrite() {

  const [value, setValue] = useState("");
  // const [images, setImages] = useState({
  //   files: [],
  //   imagesPreviewUrls: [],
  // });
  const [images, setImages] = useState([]);
  const [file, setFile] = useState([]);
  const [secret, setSecret] = useState(false);
  const [bellScore, setBellScore] = useState(0);
  const router = useRouter();
  const { id, score,visible,content,reservationId} = router.query;
    useEffect(() => {
      
    })
  return (
    <>
      <div>후기작성하기</div>
      <input
        placeholder="후기를 입력하세요"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {/* <UploadImages setImages={setImages} images={images} /> */}
      <ImagesUpload
        setImages={setImages}
        images={images}
        setFile={setFile}
        file={file}
      />
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
      <BellScore bellScore={bellScore} setBellScore={setBellScore} />
      <button
        onClick={() => {
          enrollReview(value, images, secret, bellScore, id);
          router.push("/mypage/review");
        }}
      >
        확인
      </button>
    </>
  );
}
//사진업로드하기
//작성하시겠습니까 처리
//https://studyingpingu.tistory.com/60