//+버튼을 누르면 이미지 컴포넌트 가장 오른쪽에
//
import { v4 as uuidv4 } from "uuid";
import { button } from "../style/button";
export const UploadImages = ({ setImages, images }) => {
  const uploadFile = (e) => {
    e.stopPropagation();
    let reader = new FileReader();
    let file = e.target.files[0];
    const filesInArr = Array.from(e.target.files);

    reader.onloadend = () => {
      setImages((images) => [
        ...images,
        {
          file: filesInArr,
          previewURL: reader.result,
        },
      ]);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };


  return (
    <div>
      <button className={button} onClick={() => {}}>
        +
        <input
          id="upload-file"
          type="file"
          accept="image/*, video/*"
          multiple
          onChange={uploadFile}
        ></input>
      </button>
      <div>
        {images &&
          images.map((el) => {
            <img key={uuidv4()}>{el}</img>;
          })}
      </div>
    </div>
  );
};
