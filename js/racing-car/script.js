const carNameInput = document.querySelector("#car-names-input");
const btnCarName = document.querySelector("#car-names-submit");
const racingCountInput = document.querySelector("#racing-count-input");
const btnRacingCount = document.querySelector("#racing-count-submit");
const racingWinner = document.querySelector("#racing-winners");

const result = document.querySelector(".result");

const resultDiv = document.createElement("div");
resultDiv.className = "result-div";
result.after(resultDiv);

function Car(name) {
  this.name = name;
}

let carNames = "";

btnCarName.addEventListener("click", () => {
  console.log(carNameInput.value);

  console.log(carNames);
  racingCarName();
});

function racingCarNameSplit() {
  carNames = carNames.name.split(",");
}
const carNameList = document.createElement("div");

function racingCarName() {
  carNames = new Car(carNameInput.value);
  console.log(carNames);
  racingCarNameSplit();
  console.log(carNames);

  resultDiv.appendChild(carNameList);
  carNameList.innerHTML = `<div>참여한 자동차들은 ${carNames} 입니다 !</div>`;
  carNameInput.value = "";
}

let racingCount = "";

btnRacingCount.addEventListener("click", () => {
  racingStart();
});

function racingStart() {
  if (racingCountInput.value) {
    racingCount = racingCountInput.value;
    racingCountInput.value = "";
  } else {
    alert("숫자를 입력해주세요!");
    return;
  }
  racingProcess(parseInt(racingCount));
  console.log(racingCount);
  // resultDiv.innerHTML = `<div>The winner is ${carNames} !</div>`;
}
function racingProcess(count) {
  let racingCar = [];

  for (let i = 0; i < count; i++) {
    const carListSection = document.createElement("div");
    carNameList.appendChild(carListSection);
    carListSection.className = "car-list-section";
    for (let j = 0; j < carNames.length; j++) {
      carListSection.innerHTML += `<div>${carNames[j]}</div>`;
    }
  }
  console.log(racingCar);
}

let racingWinnerIndex = 0;
