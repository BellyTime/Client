import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getPostDetail } from "../../fetch";
import { FeedDetail } from "../../components";
import { v4 } from "uuid";
export default function ShopFeed() {
  const router = useRouter();
  const { id } = router.query;
  const [detail, setDetail] = useState(null);
  useEffect(() => {
    console.log(id);
  }, []);
  useEffect(() => {
    handlePostDetail();
  }, []);
  const handlePostDetail = async () => {
    const detail = await getPostDetail();
    setDetail(detail[0]);
  };
  return (
    <div>
      {detail && <FeedDetail feedContent={detail} />}
    </div>
  );
}
