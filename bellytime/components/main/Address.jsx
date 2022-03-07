import { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import { positionState } from "@/state/atom";
import { useRecoilState } from "recoil";

export const Address = ({ setAlert, alert }) => {
  const [position, setPosition] = useRecoilState(positionState);
  useEffect(() => console.log(position), [position]);
  
  const geocoder = new kakao.maps.services.Geocoder();

  const handlePostCodeComplete = (address) => {
    setPosition((old) => ({ ...old, address }));

    geocoder.addressSearch(address, (result, status) => {
      if (status == daum.maps.services.Status.OK) {
        const { x, y } = result[0];
        console.log({ y, x });
        setPosition((old) => ({ ...old, lat: y, lng: x }));
      }
    });
    console.log("없음");
  };

  const coordToRegionCode = (lng, lat) => {
    geocoder.coord2RegionCode(lng, lat, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        console.log("현재주소", result[0].address_name);
        setPosition((old) => ({
          ...old,
          address: result[0].address_name,
        }));
      }
    });
  };

  const handleCurrentPositionButton = (e) => {
    e.preventDefault();
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다

      navigator.geolocation.getCurrentPosition(
        function (pos) {
          let lat = pos.coords.latitude; // 위도
          let lng = pos.coords.longitude; // 경도
          console.log(lat, lng);
          setPosition((old) => ({ ...old, lat, lng }));
          coordToRegionCode(lng, lat);
        },
        //엑세스 권한 없을때
        () => setAlert(true)
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때
      setAlert(true);
    }
  };

  const handleOnClickMap = (_t, mouseEvent) => {
    const lat = mouseEvent.latLng.getLat();
    const lng = mouseEvent.latLng.getLng();
    setPosition((old) => ({
      ...old,
      lat,
      lng,
    }));
    coordToRegionCode(lng, lat);
  };
  return (
    <div>
      {position.address ? `주소: ${position.address}` : "주소를 설정하세요"}
      <button onClick={handleCurrentPositionButton}>현재위치</button>
      <Map
        center={{ lat: position.lat, lng: position.lng }}
        style={{ width: "100%", height: "360px" }}
        onClick={handleOnClickMap}
      >
        <MapMarker position={{ lat: position.lat, lng: position.lng }} />
      </Map>
      <DaumPostcode
        jsOptions={{ hideMapBtn: true }}
        onComplete={({ address }) => {
          handlePostCodeComplete(address);
        }}
        autoClose={false}
      />
    </div>
  );
};

//https://github.com/JaeSeoKim/react-kakao-maps-sdk
//https://velog.io/@edie_ko/React-%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-API-key-%EC%88%A8%EA%B8%B0%EA%B8%B0.env-%EC%9D%B4%EC%9A%A9
