import { Link } from "../../components";

export default function myPage() {
  return (
    <>
      <div>마이페이지입니다</div>
      <Link href="/mypage/followingshop">팔로우하는 가게</Link>
      {/* <Link href="/mypage/calender">달력</Link>
      <Link href="/mypage/friends">친구</Link>
      <Link href="/mypage/reservation">예약관리</Link>
      <Link href="/mypage/review">후기관리</Link>
      <Link href="/mypage/setting">설정</Link> */}
    </>
  );
}
