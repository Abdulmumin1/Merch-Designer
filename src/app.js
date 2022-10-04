// const startup = () => {
//   let colourInp = document.querySelector("#label-color");
//   colourInp.addEventListener("input", updateLabelColor, false);

//   let colorSht = document.querySelector("#shirt-color");
//   colorSht.addEventListener("input", updateShirtColor, false);

//   let inp = document.querySelector("#label-text");
//   inp.addEventListener("input", changeLabelText, false);

//   let fontSlider = document.querySelector("#font-slider");
//   fontSlider.addEventListener("input", changeLabelFont, false);
//   let topSlider = document.querySelector("#top-slider");
//   topSlider.addEventListener("input", changeTopOffset, false);
//   let rightSlider = document.querySelector("#right-slider");
//   rightSlider.addEventListener("input", changeRightOffset, false);
//   let css = document.querySelector("#css");
//   css.addEventListener("input", loadCss, false);

//   changeLabelText(inp);
//   updateLabelColor(colourInp);
//   updateShirtColor(colorSht);
//   changeLabelFont(fontSlider);
//   changeTopOffset(topSlider);
//   changeRightOffset(rightSlider);
//   loadCss(css);
//   // setCenter();
//   //   inp.addEventListener("propertychange", changeLabelText, false);
// };

export const updateLabelColor = (triggerer, reactor) => {
  const changecolor = (e) => {
    if (e.target != undefined) {
      reactor.style.color = e.target.value;
    } else {
      reactor.style.color = reactor.value;
    }
  };
  triggerer.addEventListener("input", changecolor, false);
  changecolor(reactor);
};

export const updateShirtColor = (triggerer, reactor) => {
  const shirt = reactor;
  const changecolor = (e) => {
    shirt.style.fill = e.target.value;
  };
  triggerer.addEventListener("input", changecolor, false);
};

export const changeLabelFont = (triggerer, reactor) => {
  let label = reactor;
  const updatefont = (e) => {
    if (e.target != undefined) {
      label.style.fontSize = `${e.target.value}px`;
    } else {
      label.style.fontSize = `${e.value}px`;
    }
  };
  triggerer.addEventListener("input", updatefont, false);
  updatefont(reactor);
};

export const changeTopOffset = (triggerer, reactor) => {
  let label = reactor;
  const updatetop = (e) => {
    if (e.target != undefined) {
      label.style.top = `${e.target.value}%`;
    } else {
      label.style.top = `${e.value}%`;
    }
  };
  triggerer.addEventListener("input", updatetop, false);
  updatetop(reactor);
};

export const changeRightOffset = (triggerer, reactor) => {
  let label = reactor;
  const updateright = (e) => {
    if (e.target != undefined) {
      label.style.right = `${100 - e.target.value}%`;
    } else {
      label.style.right = `${100 - e.value}%`;
    }
  };
  triggerer.addEventListener("input", updateright, false);
  updateright(reactor);
};
export const changeLabelText = (triggerer, reactor) => {
  let label = reactor;

  const updatetext = (e) => {
    label.innerText = e.target.value;
  };
  triggerer.addEventListener("input", updatetext, false);
};

export const ShowCSSBox = (triggerer, reactor) => {
  let textArea = reactor;
  const updatetext = (e) => {
    if (e.target.checked) {
      textArea.classList.remove("hidden");
    } else {
      textArea.classList.add("hidden");
    }
  };
  triggerer.addEventListener("input", updatetext, false);
};

export const customCSS = (triggerer, reactor) => {
  let label = reactor;

  const updatetext = (e) => {
    label.innerText = e.target.value;
  };
  triggerer.addEventListener("input", updatetext, false);
};

export const download = (triggerer, func) => {
  triggerer.addEventListener("click", func, false);
};

const setCenter = () => {
  let label = document.querySelector(element);
  label.style.top = `calc(50% - ${label.style.length})px`;
};

// window.addEventListener("load", startup, false);
