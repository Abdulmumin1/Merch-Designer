import domtoimage from "dom-to-image";
export const getImage = (id, downloadArea, downloadImage, downloadLink) => {
  console.log("ama download ");

  domtoimage.toPng(id).then((dataUrl) => {
    let image = new Image();
    image.src = dataUrl;
    image.id = "download-image";
    downloadImage.appendChild(image);
    downloadArea.classList.remove("hidden");
    window.location.href = "#download-card";

    // get link ready for download

    downloadLink.href = dataUrl;
    downloadLink.download = "merch.png";
  });
};

export const downloadImageToStorage = (link) => link.click();
