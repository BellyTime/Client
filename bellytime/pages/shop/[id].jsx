import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Shop() {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    console.log(id);
  }, []);
  return <div>가게페이지입니다{id}</div>;
}
