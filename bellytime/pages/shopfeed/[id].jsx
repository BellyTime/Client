import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getPostDetail } from "../../fetch";
import { FeedDetail } from "../../components";
import { v4 } from "uuid";
export default function ShopFeed() {
  const router = useRouter();
  const [postId, setPostId] = useState(null);

  const [detail, setDetail] = useState(null);
  useEffect(() => {
    const { id } = router.query;
    setPostId(id);
  }, []);
  useEffect(() => {
    handlePostDetail(postId);
  }, []);
  const handlePostDetail = async (postId) => {
    const detail = await getPostDetail(postId);
    setDetail(detail[0]);
  };
  return <div>{detail && <FeedDetail feedContent={detail} />}</div>;
}
