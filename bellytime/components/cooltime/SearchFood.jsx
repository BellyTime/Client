import { searchFood } from "@/fetch";
import { debounce } from "lodash";
import { useCallback, useState } from "react";
import { SearchInputUI } from "./SearchInputUI";

export const SearchFood = ({ setCoolTimeSet, coolTimeSet }) => {
  const [value, setValue] = useState("");
  const [searchData, setSearchData] = useState("");
  const onDebounceChange = useCallback(
    debounce((data) => {
      searchFood(data, setSearchData);
    }, 200),
    []
  );
  const handleOnChange = (e) => {
    setValue(e.target.value);
    if (e.target.value) onDebounceChange(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    searchFood(value, setSearchData);
  };
  return (
    <div className="flex flex-col">
      <div>
        <SearchInputUI
          handleOnChange={handleOnChange}
          input={value}
          onSubmit={handleOnSubmit}
        />
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
      <div>음식:{coolTimeSet.foodName}</div>
    </div>
  );
};

//https://bbbootstrap.com/users/e-n-69568/forksnippets/tailwind-css-search-input-button-77870396
