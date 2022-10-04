import "./style.css";
import {
  updateLabelColor,
  updateShirtColor,
  changeLabelFont,
  changeLabelText,
  changeRightOffset,
  changeTopOffset,
} from "./src/app";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";

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
  changeLabelText(labelInput, label);
  updateLabelColor(labelColorInp, label);
  updateShirtColor(shirtColorInp, shirt);
  changeLabelFont(fontSlider, label);

  changeTopOffset(topSlider, labelContainer);
  changeRightOffset(rightSlider, labelContainer);
};

window.addEventListener("load", startupEvents, false);
