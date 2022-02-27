import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ImagesUpload = ({ setImages, images, file, setFile }) => {
  const handleImageChange = (e) => {
    // console.log(e.target.files[])
    if (e.target.files) {
      const formFile = Array.from(e.target.files).map((onefile, index) => ({
        index: file.length + index,
        file: onefile,
      }));
      setFile([...file, ...formFile]);
      const filesArray = Array.from(e.target.files).map((onefile) =>
        URL.createObjectURL(onefile)
      );

      setImages((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };
  useEffect(() => {
    console.log(images, file);
  }, [images]);

  const renderPhotos = (source) => {
    return source.map((photo, index) => {
      return (
        <img
          className="p-1 bg-white border rounded w-20"
          onClick={(e) => handleImageDelete(index, e)}
          src={photo}
          alt=""
          id={`img-${index}`}
          key={uuidv4()}
        />
      );
    });
  };
  const handleImageDelete = (index, e) => {
    const imgId = e.target.getAttribute("id");
    setImages(
      images.filter((item) => item != document.getElementById(imgId).src)
    );
    setFile(file.filter((item) => `img-${item.index}` != imgId));
    if (file.length > 0) {
      setFile((file) => {
        return file.map((onefile, i) => ({ index: i, file: onefile.file }));
      });
    }
  };

  return (
    <div>
      <form>
        <input
          type="file"
          id="image"
          accept="img/*"
          multiple
          onChange={handleImageChange}
        />
      </form>
      <div className="label-holder">
        <label htmlFor="file" className="label">
          <i>add_a_photo</i>
        </label>
      </div>
      <div className="flex flex-wrap">{renderPhotos(images)}</div>
    </div>
  );
};

export { ImagesUpload };
//https://developer.mozilla.org/en-US/docs/Web/API/FormData/append
//https://github.com/Grapefruitgreentealoe/react-multiple-image-preview/blob/master/src/App.js
