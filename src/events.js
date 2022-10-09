export const updateLabelColorEvent = (triggerer, reactor) => {
  const changecolor = (e) => {
    reactor.style.color = e.target.value;
  };
  triggerer.addEventListener("input", changecolor, false);
};

export const updateShirtColorEvent = (triggerer, reactor) => {
  const shirt = reactor;
  const changecolor = (e) => {
    shirt.style.fill = e.target.value;
  };
  triggerer.addEventListener("input", changecolor, false);
};

export const changeLabelFontEvent = (triggerer, reactor) => {
  let label = reactor;
  const updatefont = (e) => {
    label.style.fontSize = `${e.target.value}px`;
  };
  triggerer.addEventListener("input", updatefont, false);
};

export const changeTopOffsetEvent = (triggerer, reactor) => {
  let label = reactor;
  const updatetop = (e) => {
    label.style.top = `${e.target.value}%`;
  };
  triggerer.addEventListener("input", updatetop, false);
};

export const changeRightOffsetEvent = (triggerer, reactor) => {
  let label = reactor;
  const updateright = (e) => {
    label.style.right = `${100 - e.target.value}%`;
  };
  triggerer.addEventListener("input", updateright, false);
};
export const changeLabelTextEvent = (triggerer, reactor) => {
  let label = reactor;

  const updatetext = (e) => {
    label.innerText = e.target.value;
  };
  triggerer.addEventListener("input", updatetext, false);
};

export const ShowCSSBoxEvent = (triggerer, reactor) => {
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

export const customCSSEvent = (triggerer, reactor) => {
  let label = reactor;

  const updatetext = (e) => {
    label.innerText = e.target.value;
  };
  triggerer.addEventListener("input", updatetext, false);
};

export const iconControlsListener = (triggerer, reactor, label) => {
  const updatehtml = (e) => {
    reactor.classList.remove("hidden");
    label.classList.add("hidden");
  };
  triggerer.addEventListener("click", updatehtml, false);
};

export const labelControlsListener = (triggerer, reactor, icon) => {
  // show text controls and hide icon controls
  const updatehtml = (e) => {
    reactor.classList.remove("hidden");
    icon.classList.add("hidden");
  };
  triggerer.addEventListener("click", updatehtml, false);
};

export const addIconEvent = (triggerer, reactor) => {
  const updateImage = (e) => {
    let image = new Image();
    console.log(e.target.value);
    image.src = URL.createObjectURL(e.target.files[0]);
    reactor.src = image.src;
  };
  triggerer.addEventListener("click", updateImage, false);
  // triggerer.disabled = true;
};

export const renderEvent = (triggerer, func) => {
  triggerer.addEventListener("click", func, false);
};
export const downloadEvent = (triggerer, func) => {
  console.log("clicked");
  triggerer.addEventListener("click", func, false);
};

// icon event listener
export const changeIconSizeListener = (triggerer, reactor) => {
  let label = reactor;
  const updatefont = (e) => {
    label.style.width = `${e.target.value}%`;
  };
  triggerer.addEventListener("input", updatefont, false);
};

export const changeIconTopOffsetListener = (triggerer, reactor) => {
  let label = reactor;
  const updatetop = (e) => {
    label.style.top = `${e.target.value}%`;
  };
  triggerer.addEventListener("input", updatetop, false);
};

export const changeIconRightOffsetListener = (triggerer, reactor) => {
  let label = reactor;
  const updateright = (e) => {
    label.style.right = `${100 - e.target.value}%`;
  };
  triggerer.addEventListener("input", updateright, false);
};
