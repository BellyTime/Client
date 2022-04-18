import { PreviousChatSection } from "..";
import { v4 as uuidv4 } from "uuid";
export const ChatSection = ({ roomId, allContent, scrollableTarget }) => {
  return (
    <div
      className="flex-col bg-gray-300 h-[80vh]  overflow-auto scrollbar-hide"
      // ref={scrollableTarget}
    >
      <PreviousChatSection
        roomId={roomId}
        scrollableTarget={scrollableTarget}
        allContent={allContent}
      />
    </div>
  );
};
