import { PreviousChatSection, ChatMessage } from "..";
import { v4 as uuidv4 } from "uuid";
export const ChatSection = ({ roomId, allContent }) => {
  return (
    <div
      className="flex-col bg-gray-300 h-[80vh]  overflow-scroll scrollbar-hide"
      id="scrollableDiv"
    >
      <PreviousChatSection roomId={roomId} />
      {allContent &&
        allContent.map(({ nickName, content, sendTime, sender }) => (
          <ChatMessage
            key={uuidv4()}
            nickName={nickName}
            content={content}
            sendTime={sendTime}
            sender={sender}
          />
        ))}
    </div>
  );
};