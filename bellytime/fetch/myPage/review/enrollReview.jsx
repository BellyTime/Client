import axios from "axios";
export const enrollReview = async (content, images, visible) => {
  try {
    // const lists = await axios.post(
    //   "https://backend.bellytime.kr/cooltime/setting",
    //   data
    // );

    console.log({
      content,
      images,
      visible,
    });
  } catch (e) {
    console.log(e);
  }
};
