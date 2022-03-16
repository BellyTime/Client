
export const ChatMessage = ({ nickName, content, sendTime, sender }) => {
  return (
    <div
      className={
        sender == -1 || sender == -2
          ? ""
          : `${
              nickName !== "피피" ? "text-left" : "text-right"
            } px-1 py-1 w-full`
      }
    >
      <div>
        {sender == -1 || sender == -2 ? ( //친구가 나가거나 들어올때
          <span className="bg-gray-300">{content}</span>
        ) : (
          <>
            <p className="text-blue-600 ">
              {nickName == "피피"
                ? // {nickName == userNickName
                  null
                : nickName
                ? nickName
                : "undefined"}
            </p>
            <span className="w-40 bg-yellow-300">{content}</span>
            <p>{sendTime}</p>
          </>
        )}
      </div>
    </div>
  );
};
