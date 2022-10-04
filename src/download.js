import domtoimage from "dom-to-image";
export const getImage = (id, downloadArea, downloadImage) => {
  console.log("ama download ");

  domtoimage.toPng(id).then((dataUrl) => {
    let image = new Image();
    image.src = dataUrl;
    image.id = "download-image";
    downloadImage.appendChild(image);
    downloadArea.classList.remove("hidden");
    window.location.href = "#download-card";
  });
};

export const downloadImageToStorage = (image) => {
  let link = document.createElement("a");
  // link.href = image.toDataURL;
  // link.download = "merch.png";
  // link.click();
  // console.log("imagesifjdklsjklds");
};
