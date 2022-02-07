import { useState, useEffect } from "react";
import { Link, Profile } from "../../components";
import { getMyProfile } from "../../fetch";

export default function myPage() {
  const [profileData, setProfileData] = useState(null);
  useEffect(() => {
    getMyProfile(setProfileData);
  }, []);
  useEffect(() => {
    console.log(profileData);
  }, [profileData]);
  return (
    <>
      {profileData && (
        <Profile myName={profileData.name} imgSrc={profileData.profileImg} />
      )}

      <Link href="/mypage/followingshop">팔로우하는 가게</Link>
      <Link href="/mypage/calender">달력</Link>
      {/* <Link href="/mypage/friends">친구</Link>
      <Link href="/mypage/reservation">예약관리</Link>
      <Link href="/mypage/review">후기관리</Link>
      <Link href="/mypage/setting">설정</Link> */}
    </>
  );
}
