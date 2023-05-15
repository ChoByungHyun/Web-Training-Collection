const carNameInput = document.querySelector("#car-names-input");
const btnCarName = document.querySelector("#car-names-submit");
const racingCountInput = document.querySelector("#racing-count-input");
const btnRacingCount = document.querySelector("#racing-count-submit");
const racingWinner = document.querySelector("#racing-winners");
const result = document.querySelector(".result");

const resultDiv = document.createElement("div");
const carNameList = document.createElement("div");

result.after(resultDiv);
resultDiv.className = "result-div";

function Car(name) {
  this.name = name;
}

let carNames = "";

btnCarName.addEventListener("click", () => {
  racingCarName();
});

// 자동차 이름 함수.
function racingCarName() {
  carNames = new Car(carNameInput.value);
  carNames = carNames.name.split(",");

  resultDiv.appendChild(carNameList);
  carNameList.innerHTML = `<div>참여한 자동차들은 ${carNames} 입니다 !</div>`;
  carNameInput.value = "";
}

btnRacingCount.addEventListener("click", () => {
  racingStart();
});
let racingCount = "";

//횟수입력함수.
function racingStart() {
  if (racingCountInput.value) {
    racingCount = racingCountInput.value;
    racingCountInput.value = "";
  } else {
    alert("숫자를 입력해주세요!");
    return;
  }
  racingProcess(parseInt(racingCount));
}
let firstCheck = true;

//메인 레이싱 함수.
function racingProcess(count) {
  const moveSign = "-";

  for (let i = 0; i < count; i++) {
    const carListSection = document.createElement("div");
    carNameList.appendChild(carListSection);
    carListSection.className = `car-list-section${i} car-list-section`;
    if (firstCheck) {
      for (let j = 0; j < carNames.length; j++) {
        carListSection.innerHTML += `<div class="car-move-section">${carNames[j]}: <div class="${carNames[j]} ${carNames[j]}${i}"></div> </div>`;
        let tempRandomNumber = randomRacingProcess();

        const moveCar = document.querySelector(`.${carNames[j]}`);
        let moveCarClass = document.querySelector(`.${carNames[j]}${i}`);
        moveCarClass.textContent = moveCar.textContent;
        if (tempRandomNumber >= 4) {
          moveCarClass.textContent += moveSign;
        }
      }
      firstCheck = false;
    } else {
      for (let j = 0; j < carNames.length; j++) {
        carListSection.innerHTML += `<div class="car-move-section">${carNames[j]}: <div class="${carNames[j]} ${carNames[j]}${i}"></div> </div>`;
        let tempRandomNumber = randomRacingProcess();
        let moveCarClass = document.querySelector(`.${carNames[j]}${i}`);

        const preMoveCarClass = document.querySelector(
          `.${carNames[j]}${i - 1}`
        );
        moveCarClass = document.querySelector(`.${carNames[j]}${i}`);
        moveCarClass.textContent = preMoveCarClass.textContent;
        if (tempRandomNumber >= 4) {
          moveCarClass.textContent += moveSign;
        }
      }
    }
  }
  printWinner();
}

// 우승자 출력 함수.
function printWinner() {
  let winner = findWinner();
  const winnerContainer = document.querySelector(".winner-container");
  winnerContainer.style.display = "block";
  result.style.display = "block";
  if (winner.length > 1) {
    for (let i = 0; i < winner.length; i++) {
      racingWinner.innerHTML += `${carNames[winner[i]]} `;
    }
  } else {
    racingWinner.innerHTML = `${carNames[winner]}`;
  }
}

// 우승자 인덱스 찾는 함수.
function findWinner() {
  const resultCar = document.querySelector(
    `.car-list-section${[parseInt(racingCount) - 1]}`
  );

  let temp = resultCar.childNodes;
  let winningCar = [];
  for (let i = 0; i < temp.length; i++) {
    winningCar[i] = temp[i].textContent.split("-").length - 1;
  }
  let max = Math.max(...winningCar);
  let maxIndex = [];

  winningCar.forEach((el, idx) => {
    if (el === max) {
      maxIndex.push(idx);
    }
  });

  return maxIndex;
}
//움직이는 랜덤값 함수.
function randomRacingProcess() {
  let randomNum = 0;
  return (randomNum = Math.floor(Math.random() * 10));
}
