let numBtns = document.querySelectorAll(".num");
let extraBtns = document.querySelectorAll(".extra-operator");
let operatorBtns = document.querySelectorAll(".operator");
let textArea = document.querySelector(".text-area");
let textListArea = document.querySelector(".text-list-area");
let equalBtn = document.querySelector("#equal");

let lastInput = ""; // 마지막 입력된 문자
let expressionList = []; // 입력된 수식들을 담을 배열
let selectedOperator = null;
let currentSelectedBtn = null;

// 초기화 함수에서 색상 초기화
function resetColors() {
  operatorBtns.forEach(function (btn) {
    btn.style.color = "white";
    btn.style.backgroundColor = "#f69906";
  });

  currentSelectedBtn = null;
}
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
      // expressionList = [];
    }
    resetColors();
    lastInput = this.textContent;
    textArea.textContent += this.textContent;
  });
});

equalBtn.addEventListener("click", () => {
  // textArea에 있는 수식을 가져옴
  // textlistarea에 있는거라 textarea의 값과 연산하자.
  var expression = textListArea.textContent + textArea.textContent;
  textListArea.textContent = expression + "=";

  expression = expression.split(" ").join("");
  // "x"를 "*"로 변환
  expression = expression.replace(/x/g, "*");

  // "÷"를 "/"로 변환
  expression = expression.replace(/÷/g, "/");
  // 수식을 분리하여 계산
  var result = eval(expression);
  console.log(expression);

  // push to expressionList
  // expressionList.push(expression + " = ");

  // 출력
  textArea.textContent = result;

  lastInput = equalBtn.textContent;
  resetColors();
  updateTextList();
  expressionList = [];
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
      textListArea.textContent = textListArea.textContent.slice(0, -1); // 마지막 연산자 지우기
      updateTextList();
    }
    resetColors();
    // 클릭한 버튼 색상 변경
    btn.style.backgroundColor = "white";
    btn.style.color = "#f69906";

    // 현재 선택된 버튼 저장
    currentSelectedBtn = btn;

    lastInput = this.textContent;
    expressionList.push(textArea.textContent + this.textContent);
    textListArea.textContent = expressionList.join("");
    textArea.textContent = "";
  });
});

extraBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (this.textContent == "AC") {
      textArea.textContent = 0;
      lastInput = ""; // 초기화
      expressionList = []; // 수식 리스트 초기화
      textListArea.textContent = "";

      resetColors();
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
  // expressionList.forEach((exp) => {
  //   textListArea.textContent = exp;
  //   // textListArea.appendChild(listItem)
  // });
}
