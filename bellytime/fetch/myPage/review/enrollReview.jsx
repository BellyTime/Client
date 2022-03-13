import axios from "axios";
export const enrollReview = async (
  content,
  images,
  visible,
  score,
  reservationId
) => {
  // const userId = "dmstjs";
  try {
    // const lists = await axios.post(
    //   "https://backend.bellytime.kr/cooltime/setting",
    //   data,{
    //   "content-type": "multipart/form-data",
    // }
    // );
    const formData = new FormData();
    console.log(content, images, visible, score, reservationId);
    images.forEach(({ file }) => {
      formData.append("images", file);
    });
    formData.append("content", content);
    formData.append("visible", visible);
    formData.append("score", score);
    formData.append("reservationId", reservationId);
  } catch (e) {
    console.log(e);
  }
};
//multipart form으로 header넣기