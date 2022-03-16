import { v4 as uuidv4 } from "uuid";
export const ChatNavbar = ({ startChatInfo, setIsOpen }) => {
  return (
    <nav className="w-full h-[5vh] bg-gray-900 rounded-tr rounded-tl flex justify-between items-center">
      <div className="flex justify-center items-center">
        {" "}
        <i className="mdi mdi-arrow-left font-normal text-gray-300 ml-1"></i>{" "}
        {startChatInfo?.contact &&
          startChatInfo.contact.map(({ profileImg, contactId }) => (
            <img
              key={uuidv4()}
              src={profileImg}
              className="rounded-full ml-1"
              width="25"
              height="25"
            />
          ))}
        {startChatInfo?.roomName ? (
          <span
            key={uuidv4()}
            className="text-xs font-medium text-gray-300 ml-1"
          >
            {startChatInfo.roomName}
          </span>
        ) : (
          <span
            key={uuidv4()}
            className="text-xs font-medium text-gray-300 ml-1"
          >
            {startChatInfo.contact.map(({ nickName }) => nickName).join(",")}
          </span>
        )}
      </div>
      <div
        className="flex items-center"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </nav>
  );
};
