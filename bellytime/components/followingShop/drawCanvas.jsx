export const drawCanvas = function (canvasRef, imgRef, imgSrc) {
  const image = new Image();
  const canvas = canvasRef.current;
  const ctx = canvas?.getContext("2d");

  if (ctx) {
    canvas.width = 100;
    canvas.height = 100;
    // canvas.backgroundColor = "rgb(255, 255, 255)";

    image.src = imgSrc;

    image.onload = function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0, 100, 100);
    };

    canvas.toBlob(function (blob) {
      const reader = new FileReader();
      reader.onload = function (e) {
        imgRef.current.src = reader.result;
      };
      reader.readAsDataURL(blob);
    });
  } else {
    throw new Error("Could not get context");
  }
};
