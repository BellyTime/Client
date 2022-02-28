export const RecentSearch = ({ index, content, onClick }) => {
  return (
    <div className="pt-2 relative mx-auto text-gray-600">
      <span>{index + 1}</span>
      <span onClick={onClick}>{content}</span>
      <button className="absolute right-0 bottom-0 mt-5 mr-4">x</button>
    </div>
  );
};
