const BellScore = ({ bellScore, setBellScore }) => {
  return (
    <div className="flex">
      <button
        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg border border-gray-200 text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={(e) => {
          e.preventDefault();
          setBellScore(bellScore - 1);
        }}
        disabled={bellScore == 0}
      >
        -
      </button>
      <div className="font-medium bottom-0">{bellScore}</div>
      <button
        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg border border-gray-200 text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={(e) => {
          e.preventDefault();
          setBellScore(bellScore + 1);
        }}
        disabled={bellScore == 5}
      >
        +
      </button>
    </div>
  );
};

export { BellScore };
