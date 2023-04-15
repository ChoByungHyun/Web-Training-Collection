let numBtns = document.querySelectorAll(".num");
let ExtraBtns = document.querySelectorAll(".extra-operator");
let operatorBtns = document.querySelectorAll(".operator");
let textArea = document.querySelector(".text-area");

numBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (textArea.textContent == "0") {
      textArea.textContent = "";
    }
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
    textArea.textContent += this.textContent;
  });
});

ExtraBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (this.textContent == "AC") {
      textArea.textContent = 0;
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
    textArea.textContent += this.textContent;
  });
});
