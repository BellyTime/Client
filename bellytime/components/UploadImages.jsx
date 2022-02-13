//+버튼을 누르면 이미지 컴포넌트 가장 오른쪽에
import { v4 as uuidv4 } from "uuid";
export const UploadImages = ({ setImages, images }) => {
  const handleFileChosen = async (file) => {
    return new Promise((resolve, reject) => {
      let fileReader = new FileReader();
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    });
  };

  const readAllFiles = async (AllFiles) => {
    const results = await Promise.all(
      AllFiles.map(async (file) => {
        const fileContents = await handleFileChosen(file);
        return fileContents;
      })
    );

    return results;
  };

  const handleImageUpload = async (e) => {
    let files = Array.from(e.target.files);
    const arr = await readAllFiles(files);
    setImages([...images, ...arr]);
  };

  const handleImageDelete = (index, e) => {
    const imgId = e.target.getAttribute("id");
    setImages(
      images.filter((item) => item != document.getElementById(imgId).src)
    );
  };

  return (
    <div>
      <strong>업로드된 이미지</strong>
      <img src="" alt="" />
      <form>
        <input
          type="file"
          id="image"
          accept="img/*"
          multiple
          onChange={handleImageUpload}
        />
        <label htmlFor="image"></label>
      </form>
      <div className="flex flex-wrap">
        {images &&
          images.map((el, index) => (
            <img
              className="p-1 bg-white border rounded w-20"
              onClick={(e) => handleImageDelete(index, e)}
              id={`img-${index}`}
              key={uuidv4()}
              src={el}
            />
          ))}
      </div>
    </div>
  );
};
//promise는 초기화된거부터 처리
