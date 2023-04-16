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
    console.log("test");
    btn.style.color = "white";
    btn.style.backgroundColor = "#f69906";
  });

  currentSelectedBtn = null;
}
numBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (textArea.textContent == "") {
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
      if (this.textContent !== ".") {
        textArea.textContent = "";
        textListArea.textContent = "";
      }
    }
    resetColors();
    lastInput = this.textContent;
    textArea.textContent += this.textContent;
    btnClickCheck = false;
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

  // 출력
  textArea.textContent = result;

  lastInput = equalBtn.textContent;
  resetColors();
  expressionList = [];
  btnClickCheck = false;
});

operatorBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (this.textContent === "=") {
      return;
    }

    if (lastInput !== this.textContent) {
      resetColors();
      btn.style.backgroundColor = "white";
      btn.style.color = "#f69906";
    }

    lastInput = this.textContent;

    const lastTextCheck = textListArea.textContent.slice(-1);
    if (
      lastTextCheck == "÷" ||
      lastTextCheck == "x" ||
      lastTextCheck == "+" ||
      lastTextCheck == "-"
    ) {
      // console.log("test");
      // console.log(lastTextCheck);

      textListArea.textContent = textListArea.textContent.slice(0, -1); // 마지막 연산자 지우기
    }
    if (textArea.textContent === "") {
      console.log(lastInput);
      textListArea.textContent = textListArea.textContent + lastInput;
      // expressionList.push(lastInput);
      return;
    }
    if (textArea.textContent === "" && textListArea.textContent === "") {
      return;
    }
    expressionList.push(textArea.textContent + this.textContent);
    textListArea.textContent = expressionList.join("");
    textArea.textContent = "";
  });
});

extraBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (this.textContent == "AC") {
      textArea.textContent = "";
      lastInput = ""; // 초기화
      expressionList = []; // 수식 리스트 초기화
      textListArea.textContent = "";
      btnClickCheck = false;

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

let btnClickCheck = false;
operatorBtns.forEach(function (btn) {
  btn.addEventListener("mouseover", function () {
    if (btnClickCheck === true) {
      return;
    }
    btn.style.backgroundColor = "white";
    btn.style.color = "#f69906";
  });
  btn.addEventListener("click", function () {
    if (this.textContent === "=") {
      return;
    }
    btnClickCheck = true;
    btn.style.backgroundColor = "white";
    btn.style.color = "#f69906";
  });

  btn.addEventListener("mouseout", function () {
    if (btnClickCheck === true) {
      return;
    }
    btn.style.backgroundColor = "#f69906";
    btn.style.color = "white";
  });
});
