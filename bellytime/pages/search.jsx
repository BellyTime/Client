import { useEffect, useState } from "react";
import { SearchInput, RealTimeSearch } from "../components";
import { getRealTimeSearch, getSearchWords, getShopList } from "../fetch";
//1. 실시간 인기 검색
// 2. 검색어 리스트
//3. 결과 리스트 반환
export default function Search() {
  const [realtime, setRealTime] = useState(null);
  useEffect(async () => {
    const rts = await getRealTimeSearch();
    setRealTime(rts);
  }, []);
  return (
    <div>
      <SearchInput onFocus={}/>
      {realtime?.map((content, index) => (
        <RealTimeSearch  content={content} index={index} />
      ))}
    </div>
  );
}
