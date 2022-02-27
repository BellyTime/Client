import axios from "axios";
export const enrollReview = async (content, images, visible) => {
  // const userId = "dmstjs";
  try {
    // const lists = await axios.post(
    //   "https://backend.bellytime.kr/cooltime/setting",
    //   data
    // );
    const formData = new FormData();
    console.log(images);
    images.forEach(({ index, file }) => {
      formData.append("images", file, `${index}.jpg`);
    });
    formData.append("content", content);
    formData.append("visible", visible);

  } catch (e) {
    console.log(e);
  }
};
