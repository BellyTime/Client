import { useEffect, useState } from "react";
import { getVisitedShop } from "../../../fetch";
import { VisitedShop } from "../../../components";
export default function Review() {
  const [visitedShop, setVisitedShop] = useState(null);
  useEffect(() => {
    getVisitedShop(setVisitedShop);
  }, []);
  useEffect(() => {
    console.log(visitedShop);
  }, [visitedShop]);

  return (
    <>
      <div>후기작성</div>
      {visitedShop &&
        visitedShop.map((content) => (
          <VisitedShop key={content.shopId} content={content} />
        ))}
    </>
  );
}
