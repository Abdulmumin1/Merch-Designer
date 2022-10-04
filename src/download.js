import domtoimage from "dom-to-image";
export const getImage = (id) => {
  console.log("ama download ");
  domtoimage.toPng(id).then((dataUrl) => {
    let image = new Image();
    image.src = dataUrl;
    document.body.appendChild(image);
  });
};
