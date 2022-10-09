import domtoimage from "dom-to-image";

export const getImage = (id, downloadArea, downloadImage, downloadLink) => {
  domtoimage.toPng(id).then((dataUrl) => {
    let image = new Image();
    image.src = dataUrl;
    image.classList = ["rounded-2xl w-5/6 m-6"];
    image.id = "download-image";
    downloadImage.appendChild(image);
    downloadArea.classList.remove("hidden");
    window.location.href = "#download-area";

    // get link ready for download

    downloadLink.href = dataUrl;
    downloadLink.download = "merch.png";
  });
};

export const downloadImageToStorage = (link) => link.click();
