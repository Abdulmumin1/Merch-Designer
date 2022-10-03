const startup = () => {
  let colourInp = document.querySelector("#label-color");
  colourInp.addEventListener("input", updateLabelColor, false);

  let colorSht = document.querySelector("#shirt-color");
  colorSht.addEventListener("input", updateShirtColor, false);

  let inp = document.querySelector("#label-text");
  inp.addEventListener("input", changeLabelText, false);

  let fontSlider = document.querySelector("#font-slider");
  fontSlider.addEventListener("input", changeLabelFont, false);
  let topSlider = document.querySelector("#top-slider");
  topSlider.addEventListener("input", changeTopOffset, false);
  let rightSlider = document.querySelector("#right-slider");
  rightSlider.addEventListener("input", changeRightOffset, false);
  let css = document.querySelector("#css");
  css.addEventListener("input", loadCss, false);

  changeLabelText(inp);
  updateLabelColor(colourInp);
  updateShirtColor(colorSht);
  changeLabelFont(fontSlider);
  changeTopOffset(topSlider);
  changeRightOffset(rightSlider);
  loadCss(css);
  // setCenter();
  //   inp.addEventListener("propertychange", changeLabelText, false);
};

const updateLabelColor = (e) => {
  const label = document.querySelector("#label");
  if (e.value != undefined) {
    label.style.color = e.value;
  } else {
    label.style.color = e.target.value;
  }
};
const updateShirtColor = (e) => {
  const label = document.querySelector("#shirt");

  if (e.value != undefined) {
    label.style.fill = e.value;
  } else {
    label.style.fill = e.target.value;
  }
};
const changeLabelFont = (e) => {
  let colourInp = document.querySelector("#label");
  // let slider = document.querySelector("#font-slider");
  if (e.value != undefined) {
    label.style.fontSize = `${e.value}px`;
  } else {
    label.style.fontSize = `${e.target.value}px`;
  }
};

const changeTopOffset = (e) => {
  let label = document.querySelector("#label-container");
  // let slider = document.querySelector("#font-slider");
  console.log(e.value);
  if (e.value != undefined) {
    label.style.top = `${e.value}%`;
  } else {
    label.style.top = `${e.target.value}%`;
  }
};

const changeRightOffset = (e) => {
  let label = document.querySelector("#label-container");
  // let slider = document.querySelector("#font-slider");
  console.log(e.value);
  if (e.value != undefined) {
    label.style.right = `${100 - e.value}%`;
  } else {
    label.style.right = `${100 - e.target.value}%`;
  }
};
const changeLabelText = (e) => {
  ue = "20";
  max = "40";
  let label = document.querySelector("#label");
  // console.log(label.innerText);
  if (e.value != undefined) {
    label.innerText = e.value;
  } else {
    label.innerText = e.target.value;
  }
};
const loadCss = (e) => {
  let style = document.querySelector("#style");
  console.log(style.innerHTML);
  if (e.value != undefined) {
    style.innerHTML = e.value;
  } else {
    style.innerHTML = e.target.value;
  }
};

const setCenter = () => {
  let label = document.querySelector("#label");
  label.style.top = `calc(50% - ${label.style.length})px`;
};

const getImage = (id) => {
  domtoimage.toPng(document.getElementById(id)).then((dataUrl) => {
    let image = new Image();
    image.src = dataUrl;
    document.body.appendChild(image);
  });
};

window.addEventListener("load", startup, false);
