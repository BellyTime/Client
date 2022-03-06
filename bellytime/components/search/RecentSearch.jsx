import { deleteRecentSearch } from "@/fetch";
import { useEffect, useRef } from "react";
export const RecentSearch = ({
  index,
  content,
  onClick,
  setRecent,
  setRecentDel,

}) => {

  const handleDelete = () => {
    setRecent((recent) => recent.filter((val) => val != content));
    setRecentDel((recentDel) => [...recentDel, content]);
  };



  return (
    <div className="pt-2 relative mx-auto text-gray-600">
      <span>{index + 1}</span>
      <span onClick={onClick}>{content}</span>
      <button
        onClick={handleDelete}
        className="absolute right-0 bottom-0 mt-5 mr-4"
      >
        x
      </button>
    </div>
  );
};
