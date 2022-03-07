export const Feed = ({ feedContent, router }) => {
  const { postId, representImg, shopId, shopName, title } = feedContent;
  //   const imgRef = useRef();
  //   const canvasRef = useRef();
  //   useEffect(() => {
  //     drawCanvas(100, 100, canvasRef, imgRef, profileImg);
  //   }, []);
  const handleClickFeed = () => {
    router.push(`/shopfeed/${postId}`);
  };
  return (
    <div className="w-1/2">
      <div className="w-10/12" onClick={handleClickFeed}>
        <img className="w-full" src={representImg} />
        {/* <canvas ref={canvasRef} /> */}
        <div>{shopName}</div>
        <div>{title}</div>
      </div>
    </div>
  );
};
