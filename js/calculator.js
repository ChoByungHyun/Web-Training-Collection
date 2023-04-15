let numBtns = document.querySelectorAll(".num");
let extraBtns = document.querySelectorAll(".extra-operator");
let operatorBtns = document.querySelectorAll(".operator");
let textArea = document.querySelector(".text-area");
let textListArea = document.querySelector(".text-list-area");

let lastInput = ""; // 마지막 입력된 문자

numBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (textArea.textContent == "0") {
      textArea.textContent = "";
      if (this.textContent === ".") {
        textArea.textContent = "0.";
        return;
      }
    }
    if (this.textContent === "." && textArea.textContent.includes(".")) {
      return;
    }
    lastInput = this.textContent;
    textArea.textContent += this.textContent;
  });
});

operatorBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (this.textContent == "=") {
      // textArea에 있는 수식을 가져옴
      var expression = textArea.textContent;

      // "x"를 "*"로 변환
      expression = expression.replace(/x/g, "*");

      // "÷"를 "/"로 변환
      expression = expression.replace(/÷/g, "/");

      // 수식을 분리하여 계산
      var result = eval(expression);

      // 출력
      textArea.textContent = result;

      return;
    }
    if (lastInput !== "" && isNaN(lastInput)) {
      // 마지막 입력된 문자가 연산자인 경우
      textArea.textContent = textArea.textContent.slice(0, -1); // 마지막 연산자 지우기
    }
    if (textArea.textContent === "0") {
      return;
    }

    lastInput = this.textContent;

    textArea.textContent += this.textContent;
  });
});

extraBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (this.textContent == "AC") {
      textArea.textContent = 0;
      lastInput = ""; // 초기화
      return;
    }
    if (this.textContent == "+/-") {
      textArea.textContent = textArea.textContent * -1;
      return;
    }
    if (this.textContent == "%") {
      textArea.textContent = textArea.textContent * 0.01;
      return;
    }
    if (lastInput !== "" && isNaN(lastInput)) {
      // 마지막 입력된 문자가 연산자인 경우
      textArea.textContent = textArea.textContent.slice(0, -1); // 마지막 연산자 지우기
    }
    lastInput = this.textContent;
    textArea.textContent += this.textContent;
  });
});
