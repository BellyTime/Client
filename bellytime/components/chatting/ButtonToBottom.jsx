export const ButtonToBottom = ({ scrollableTarget }) => {
  const toBottomFunction = () => {
    scrollableTarget.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={toBottomFunction}
      className={`
      right-[1vw] top-[80vh] fixed`}
    >
      <svg
        width="30"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM9 5C9 4.44772 8.55228 4 8 4C7.44771 4 7 4.44772 7 5L7 8.58579L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711L7.29289 11.7071C7.68342 12.0976 8.31658 12.0976 8.70711 11.7071L11.7071 8.70711C12.0976 8.31658 12.0976 7.68342 11.7071 7.29289C11.3166 6.90237 10.6834 6.90237 10.2929 7.29289L9 8.58579V5Z"
          fill="#111827"
        />
      </svg>
    </button>
  );
};
//http://daplus.net/javascript-jquery-window-scrolltop-%ED%95%98%EC%A7%80%EB%A7%8C-window-scrollbottom-%EC%97%86%EC%9D%8C/
