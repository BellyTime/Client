import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRecoilState } from "recoil";
import { settingState } from "../../state/atom";
import { useEffect } from "react";
import { Link } from "../../components";
import { fetchSetting } from "../../fetch/myPage/setting";
export default function Setting() {
  const [setting, setSetting] = useRecoilState(settingState);
  const componentWillUnmount = useRef(false);

  useEffect(() => {
    return () => {
      componentWillUnmount.current = true;
    };
  }, []);

  useEffect(() => {
    return () => {
      if (componentWillUnmount.current) {
        fetchSetting(setting);
      }
    };
  }, [setting]); 


  return (
    <>
      <div>
        {
          //쿨타임 기간
          <div>
            <span>쿨타임기간</span>
            <input
              value={setting?.duration}
              onChange={(e) =>
                setSetting({ ...setting, duration: e.target.value })
              }
            />
          </div>
        }
        {
          //전체 알림설정
          <div>
            <span>알람설정</span>

            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                className={`absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer ${
                  setting?.alarm && "right-0 border-green-400"
                }`}
                onClick={() => {
                  setSetting({ ...setting, alarm: !setting.alarm });
                }}
              />
              <label
                htmlFor="toggle"
                className={` block overflow-hidden h-6 rounded-full ${
                  setting?.alarm ? " bg-green-400" : "bg-gray-300"
                } cursor-pointer`}
              ></label>
            </div>
          </div>
        }
        {
          //로그아웃
          <Link href="/memberPage">
            <button
              onClick={() => {
                setSetting({ ...setting, token: "" });
                document.cookie = `refreshToken=;Expires=${new Date().toUTCString()}`;
              }}
            >
              로그아웃
            </button>
          </Link>
        }
        <div></div>
      </div>
    </>
  );
}
//쿨타임기간, 알림설정에 관한것은 처음 로그인할때 가져와서 store에 저장
// 저장한것을 여기서 useEffect, useRecoilState로 적용
// 로그인한 상태면,,,, 로그아웃하기전까진 계속 로그인
//로그아웃하면 쿠키,제거
