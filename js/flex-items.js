const checkedColor = "#393646";
const nonecheckedColor = "#F4EEE0";

const btn_growX1 = document.querySelector(".X-grow-1");
const btn_growX0 = document.querySelector(".X-grow-0");

const btn_basisX100 = document.querySelector(".X-basis-100px");
const btn_basisX0 = document.querySelector(".X-basis-0px");

const btn_basisY100 = document.querySelector(".Y-basis-100px");
const btn_basisY0 = document.querySelector(".Y-basis-0px");

const X_div = document.querySelectorAll("div.x");
const Y_div = document.querySelectorAll("div.y");

// X-grow
btn_growX1.addEventListener("click", () => {
  X_div.forEach((div) => {
    div.style.flexGrow = 1;
  });
  btn_growX1.style.background = checkedColor;
  btn_growX0.style.background = nonecheckedColor;
});

btn_growX0.addEventListener("click", () => {
  X_div.forEach((div) => {
    div.style.flexGrow = 0;
  });
  btn_growX0.style.background = checkedColor;
  btn_growX1.style.background = nonecheckedColor;
});

// X-basis
btn_basisX100.addEventListener("click", () => {
  X_div.forEach((div) => {
    div.style.flexBasis = "100px";
  });
  btn_basisX100.style.background = checkedColor;
  btn_basisX0.style.background = nonecheckedColor;
});

btn_basisX0.addEventListener("click", () => {
  X_div.forEach((div) => {
    div.style.flexBasis = "0px";
  });
  btn_basisX0.style.background = checkedColor;
  btn_basisX100.style.background = nonecheckedColor;
});

// Y-basis
btn_basisY100.addEventListener("click", () => {
  Y_div.forEach((div) => {
    div.style.flexBasis = "100px";
  });
  btn_basisY100.style.background = checkedColor;
  btn_basisY0.style.background = nonecheckedColor;
});
btn_basisY0.addEventListener("click", () => {
  Y_div.forEach((div) => {
    div.style.flexBasis = "0px";
  });
  btn_basisY0.style.background = checkedColor;
  btn_basisY100.style.background = nonecheckedColor;
});
