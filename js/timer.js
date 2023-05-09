const formContainer = document.querySelector(".form-container");
const inputContainer = document.querySelector(".input-container");

const inputHour = document.querySelector("#hour");
const inputMinute = document.querySelector("#minute");
const inputSeconds = document.querySelector("#second");

const btnStart = document.querySelector(".btn-start");
const btnReset = document.querySelector(".btn-reset");

const inputBox = document.querySelectorAll(".inputBox");

let stopFlag;
btnStart.addEventListener("click", () => {
  startTimer();
});
btnReset.addEventListener("click", resetTimer);

inputBox.forEach((element) => {
  element.addEventListener("keydown", (e) => {
    activeBtn(true);
  });
  element.addEventListener("click", (e) => {
    element.value = "";
  });
});

function activeBtn(active) {
  if (active) {
    btnStart.style.backgroundImage =
      "url(../../assets/img_timer/start-default.svg)";
    btnReset.style.backgroundImage =
      "url(../../assets/img_timer/reset-default.svg)";
  } else {
    btnStart.style.backgroundImage =
      "url(../../assets/img_timer/start-disabled.svg)";
    btnReset.style.backgroundImage =
      "url(../../assets/img_timer/reset-disabled.svg)";
  }
}

function changeBtnImage(stop) {
  if (stop) {
    btnStart.style.backgroundImage =
      "url(../../assets/img_timer/start-default.svg)";
  } else {
    btnStart.style.backgroundImage = "url(../../assets/img_timer/pause.svg)";
  }
}

let timer;
let hour;
let minute;
let second;
let totaltime;

function startTimer() {
  if (
    (inputHour.value === "00" &&
      inputMinute.value == "00" &&
      inputSeconds.value == "00") ||
    inputMinute.value > 60 ||
    inputSeconds.value > 60
  ) {
    alert("숫자를 확인해주세요!!");
    return;
  }
  if (stopFlag) {
    pauseTimer();
    stopFlag = false;
    changeBtnImage(true);
    return;
  } else {
    stopFlag = true;
    changeBtnImage(false);
  }

  hour = parseInt(inputHour.value);
  minute = parseInt(inputMinute.value);
  second = parseInt(inputSeconds.value);

  totaltime = hour * 3600 + minute * 60 + second;

  hour = Math.floor(totaltime / 3600);
  minute = Math.floor((totaltime % 3600) / 60);
  second = totaltime % 60;
  timer = setInterval(countTimer, 1000);
}
function countTimer() {
  if (hour === 0 && minute === 0 && second === 0) {
    alert("time over");
    resetTimer();
    changeBtnImage(true);

    return;
  }
  if (second !== 0) {
    second--;
    if (hour < 10) {
      inputHour.value = "0" + hour;
    } else {
      inputHour.value = hour;
    }
    if (minute < 10) {
      inputMinute.value = "0" + minute;
    } else {
      inputMinute.value = minute;
    }
    if (second < 10) {
      console.log(second);
      inputSeconds.value = "0" + second;
    } else {
      inputSeconds.value = second;
    }
  } else if (minute !== 0) {
    minute--;
    second = 60;
  } else {
    hour--;
    minute = 60;
  }
}

function resetTimer() {
  totaltime = 0;
  inputHour.value = "00";
  inputMinute.value = "00";
  inputSeconds.value = "00";
  activeBtn(false);

  clearInterval(timer);
}

function pauseTimer() {
  clearInterval(timer);
}
