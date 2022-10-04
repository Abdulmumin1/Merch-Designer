import "./style.css";
import {
  updateLabelColor,
  updateShirtColor,
  changeLabelFont,
  changeLabelText,
  changeRightOffset,
  changeTopOffset,
  ShowCSSBox,
  customCSS,
  render,
  download,
} from "./src/events";
import { getImage, downloadImageToStorage } from "./src/download";
const select = (e) => {
  return document.querySelector(e);
};

const startupEvents = () => {
  let shirt = select("#shirt");
  let label = select("#label");
  let labelInput = select("#label-text-input");
  let labelContainer = select("#label-container");
  let labelColorInp = select("#label-color");
  let shirtColorInp = select("#shirt-color");
  let fontSlider = select("#font-slider");
  let topSlider = select("#top-slider");
  let rightSlider = select("#right-slider");

  let cssCheckBox = select("#css-checkbox");
  let textArea = select("#css");
  let customUserStyle = select("#u-style");
  changeLabelText(labelInput, label);
  updateLabelColor(labelColorInp, label);
  updateShirtColor(shirtColorInp, shirt);
  changeLabelFont(fontSlider, label);

  changeTopOffset(topSlider, labelContainer);
  changeRightOffset(rightSlider, labelContainer);
  ShowCSSBox(cssCheckBox, textArea);
  customCSS(textArea, customUserStyle);
  render(select("#download"), () =>
    getImage(
      select("#playground"),
      select("#download-area"),
      select("#download-image-box")
    )
  );
  download(select("#download-btn"), () =>
    downloadImageToStorage(select("#download-image"))
  );
};

window.addEventListener("load", startupEvents, false);
