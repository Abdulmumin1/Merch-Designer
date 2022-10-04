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
} from "./src/app";

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
};

window.addEventListener("load", startupEvents, false);
