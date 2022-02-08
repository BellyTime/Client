import { searchFood } from "@/fetch";
import { setCoolTimeState } from "@/state/atom";
import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";

export const SearchFood = () => {
  const [value, setValue] = useState("");
  const [searchData, setSearchData] = useState("");
  const setCoolTimeSet = useSetRecoilState(setCoolTimeState);
  const onDebounceChange = useCallback(
    debounce((data) => {
      searchFood(data, setSearchData);
    }, 200),
    []
  );
  const coolValue = useRecoilValue(setCoolTimeState);
  useEffect(() => {
    console.log("ㅠ", coolValue);
  }, [coolValue]);

  return (
    <div className="flex flex-col">
      <div>
        {" "}
        <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>{" "}
      </div>{" "}
      <input
        type="text"
        className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
        placeholder="Search anything..."
        onChange={(e) => {
          setValue(e.target.value);
          if (e.target.value) onDebounceChange(e.target.value);
        }}
        value={value}
      />
      <button className="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600">
        Search
      </button>
      <div>
        {searchData.length ? (
          <div>
            {searchData.map(({ foodId, foodName }) => (
              <p
                onClick={() => {
                  setCoolTimeSet((state) => {
                    return { ...state, foodId, foodName };
                  });
                }}
                key={foodId}
              >
                {foodName}
              </p>
            ))}
          </div>
        ) : value ? (
          <p
            onClick={() => {
              setCoolTimeSet((state) => {
                return { ...state, foodId: 99999999, foodName: value };
              });
            }}
          >
            {value}
          </p>
        ) : (
          <p>검색결과</p>
        )}
      </div>
      <div>음식:{coolValue.foodName}</div>
    </div>
  );
};

//https://bbbootstrap.com/users/e-n-69568/forksnippets/tailwind-css-search-input-button-77870396
