export const ProfileImg = ({ src }) => {
  return (
    <img
      className="inline object-cover w-16 h-16 mr-2 rounded-full"
      src={src}
      alt="Profile image"
    />
  );
};
