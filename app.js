const startup = () => {
  let colourInp = document.querySelector("#label-color");
  colourInp.addEventListener("input", updateLabelColor, false);

  let colorSht = document.querySelector("#shirt-color");
  colorSht.addEventListener("input", updateShirtColor, false);

  let inp = document.querySelector("#label-text");

  inp.addEventListener("input", changeLabelText, false);

  changeLabelText(inp);
  updateLabelColor(colourInp);
  updateShirtColor(colorSht);
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
const changeLabelFont = () => {
  let colourInp = document.querySelector("#label");
  let slider = document.querySelector("#font-slider");
  //   colourInp.style.fontSize = `${slider.value}px`;
  console.log(slider.value);
};

const changeLabelText = (e) => {
  let label = document.querySelector("#label");
  console.log(label.innerText);
  if (e.value != undefined) {
    label.innerText = e.value;
  } else {
    label.innerText = e.target.value;
  }
};

window.addEventListener("load", startup, false);
