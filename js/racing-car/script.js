const carNameInput = document.querySelector("#car-names-input");
const btnCarName = document.querySelector("#car-names-submit");
const racingCountInput = document.querySelector("#racing-count-input");
const btnRacingCount = document.querySelector("#racing-count-submit");
const racingWinner = document.querySelector("#racing-winners");
const result = document.querySelector(".result");

function Car(name) {
  this.name = name;
}

let carNames = [];

btnCarName.addEventListener("click", () => {
  console.log(carNameInput.value);
  carNames.push(new Car(carNameInput.value));
  carNameInput.value = "";

  console.log(carNames);
});

let racingCount = [];

btnRacingCount.addEventListener("click", () => {
  if (racingCountInput.value) {
    racingCount.push(racingCountInput.value);
    racingCountInput.value = "";
  }
  console.log(racingCount);
  const test = document.createElement("div");
  test.innerHTML = `<div>The winner is ${carNames[racingWinnerIndex].name} !</div>`;
  result.after(test);
  // result.innerHTML = `<div>The winner is ${carNames[racingWinnerIndex].name} !</div>`;
});

let racingWinnerIndex = 0;

function racing() {
  racingWinnerIndex = Math.floor(Math.random() * carNames.length);
  racingWinner.innerHTML = `<h2>The winner is ${carNames[racingWinnerIndex].name}!</h2>`;
}

// setInterval(racing, 1000);
