import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getPostDetail } from "../../fetch";
import { FeedDetail } from "../../components";
import { v4 } from "uuid";
export default function ShopFeed() {
  const router = useRouter();
  const [detail, setDetail] = useState(null);
  const { id } = router.query;
  console.log(id);
  useEffect(() => {
    handlePostDetail(id);
  }, []);
  const handlePostDetail = async (id) => {
    const detail = await getPostDetail(id);
    setDetail(detail);
  };
  return (
    <div>
      {detail && <FeedDetail feedContent={detail} />}
    </div>
  );
}
