import "./style.css";
import {
  updateLabelColorEvent,
  updateShirtColorEvent,
  changeLabelFontEvent,
  changeLabelTextEvent,
  changeRightOffsetEvent,
  changeTopOffsetEvent,
  ShowCSSBoxEvent,
  customCSSEvent,
  addIconEvent,
  renderEvent,
  downloadEvent,
  iconControlsListener,
  labelControlsListener,
  changeIconRightOffsetListener,
  changeIconTopOffsetListener,
  changeIconSizeListener,
} from "./src/events";
import { getImage, downloadImageToStorage } from "./src/download";
import { labelControls, iconControls } from "./src/components";

const select = (e) => {
  return document.querySelector(e);
};

// add controls
select("#move").innerHTML = `
<div>
${labelControls()}
${iconControls()}
</div>
`;

const IconEventListeners = () => {
  changeIconRightOffsetListener(select("#icon-right-slider"), select("#icon"));
  changeIconTopOffsetListener(select("#icon-top-slider"), select("#icon"));
  changeIconSizeListener(select("#icon-size-slider"), select("#icon"));
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

  // startup event listeners
  changeLabelTextEvent(labelInput, label);
  updateLabelColorEvent(labelColorInp, label);
  updateShirtColorEvent(shirtColorInp, shirt);
  changeLabelFontEvent(fontSlider, label);
  changeTopOffsetEvent(topSlider, labelContainer);
  changeRightOffsetEvent(rightSlider, labelContainer);
  ShowCSSBoxEvent(cssCheckBox, textArea);
  customCSSEvent(textArea, customUserStyle);
  addIconEvent(select("#iconArea"), select("#icon"));
  iconControlsListener(
    select("#icon"),
    select("#iconControls"),
    select("#labelControls")
  );
  labelControlsListener(
    select("#label"),
    select("#labelControls"),
    select("#iconControls")
  );
  IconEventListeners();
  renderEvent(select("#download"), () =>
    getImage(
      select("#playground"),
      select("#download-area"),
      select("#download-image-box"),
      select("#download-link")
    )
  );

  downloadEvent(select("#download-btn"), () =>
    downloadImageToStorage(select("#download-link"))
  );
};

window.addEventListener("load", startupEvents, false);
