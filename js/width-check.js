// const divs = document.querySelectorAll("div");
// divs.forEach(function (div) {
//   new ResizeObserver(function () {
//     div.querySelector("p").textContent = "현재 width: " + div.offsetWidth;
//   }).observe(div);
// });

// window.addEventListener("resize", function () {
//   const divs = document.querySelectorAll("div");
//   divs.forEach(function (div) {
//     div.querySelector("p").textContent =
//       "Current div width: " + div.offsetWidth;
//   });
// });
const divs = document.querySelectorAll("div");
divs.forEach((div) => {
  function updateWidth() {
    div.querySelector("p").textContent =
      "Current div width: " + div.offsetWidth;
  }

  window.addEventListener("resize", () => {
    updateWidth();
  });

  updateWidth();
});
