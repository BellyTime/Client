import { useState } from "react";
import { useRef } from "react";
export const SearchBar = ({ onClick, value, setValue }) => {
  return (
    <div className="flex flex-col">
      <input
        type="text"
        className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
        placeholder="Search anything..."
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <button
        onClick={() => {
          onClick(value);
        }}
        className="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600"
      >
        Search
      </button>
    </div>
  );
};
