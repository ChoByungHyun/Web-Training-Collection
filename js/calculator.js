let numBtns = document.querySelectorAll(".num");
let extraBtns = document.querySelectorAll(".extra-operator");
let operatorBtns = document.querySelectorAll(".operator");
let textArea = document.querySelector(".text-area");
let textListArea = document.querySelector(".text-list-area");
let equalBtn = document.querySelector("#equal");

let lastInput = ""; // 마지막 입력된 문자
let expressionList = []; // 입력된 수식들을 담을 배열

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
    if (lastInput === "=") {
      textArea.textContent = "";
      textListArea.textContent = "";
      expressionList = [];
    }
    lastInput = this.textContent;
    textArea.textContent += this.textContent;
  });
});

equalBtn.addEventListener("click", () => {
  // textArea에 있는 수식을 가져옴
  var expression = textArea.textContent;

  // "x"를 "*"로 변환
  expression = expression.replace(/x/g, "*");

  // "÷"를 "/"로 변환
  expression = expression.replace(/÷/g, "/");

  // 수식을 분리하여 계산
  var result = eval(expression);

  // push to expressionList
  expressionList.push(textArea.textContent + " = ");

  // 출력
  textArea.textContent = result;

  lastInput = equalBtn.textContent;

  updateTextList();
});

operatorBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (this.textContent === "=") {
      return;
    }

    if (textArea.textContent === "0") {
      return;
    }
    if (lastInput !== "" && isNaN(lastInput)) {
      // 마지막 입력된 문자가 연산자인 경우
      textArea.textContent = textArea.textContent.slice(0, -1); // 마지막 연산자 지우기
      updateTextList();
    }

    lastInput = this.textContent;

    textArea.textContent += this.textContent;

    // 현재까지의 수식과 해당 연산자를 displayText에 저장
    let currentExp = textArea.textContent.trim();
    let displayText = "";
    if (currentExp !== "" && !isNaN(currentExp[currentExp.length - 1])) {
      displayText = currentExp + " " + this.textContent;
    } else {
      displayText = currentExp;
    }
    textListArea.textContent = displayText;
  });
});

extraBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (this.textContent == "AC") {
      textArea.textContent = 0;
      lastInput = ""; // 초기화
      expressionList = []; // 수식 리스트 초기화
      textListArea.textContent = "";
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

function updateTextList() {
  // 추가된 표현식을 표시
  expressionList.forEach((exp) => {
    textListArea.textContent = exp;
    // textListArea.appendChild(listItem)
  });
}
