let numBtns = document.querySelectorAll(".num");
let extraBtns = document.querySelectorAll(".extra-operator");
let operatorBtns = document.querySelectorAll(".operator");
let textArea = document.querySelector(".text-area");
let textListArea = document.querySelector(".text-list-area");
let equalBtn = document.querySelector("#equal");

let lastInput = ""; // 마지막 입력된 문자
let expressionList = []; // 입력된 수식들을 담을 배열

// 초기화 함수에서 색상 초기화
function resetColors() {
  operatorBtns.forEach(function (btn) {
    btn.style.color = "white";
    btn.style.backgroundColor = "#f69906";
  });
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
    if (textArea.textContent === "0") {
      textArea.textContent = "";
      if (this.textContent === "0") {
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
    equalCheck = false;
  });
});

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (/^[0-9]$/.test(key)) {
    // 숫자 키인 경우
    textArea.textContent += key;
  }
});
let equalCheck = false;
let lastNumCheck;
equalBtn.addEventListener("click", () => {
  console.log(lastoperatorCheck);
  if (textListArea.textContent === "") {
    return;
  }
  if (
    lastInput === "÷" ||
    lastInput === "x" ||
    lastInput === "+" ||
    lastInput === "-"
  ) {
    return;
  }
  if (equalCheck) {
    let expression =
      textListArea.textContent.slice(0, -1) + lastoperatorCheck + lastNumCheck;

    textListArea.textContent = expression + "=";

    expression = expression.split(" ").join("");
    // "x"를 "*"로 변환
    expression = expression.replace(/x/g, "*");

    // "÷"를 "/"로 변환
    expression = expression.replace(/÷/g, "/");

    // 새로운 Function 객체 생성
    let calculate = new Function("return " + expression);

    // 수식을 계산
    let result = calculate();

    // 출력
    textArea.textContent = result;
  } else {
    lastNumCheck = textArea.textContent;

    // textlistarea에 있는거랑 textarea의 값과 연산하자.
    let expression = textListArea.textContent + textArea.textContent;
    textListArea.textContent = expression + "=";

    expression = expression.split(" ").join("");
    // "x"를 "*"로 변환
    expression = expression.replace(/x/g, "*");

    // "÷"를 "/"로 변환
    expression = expression.replace(/÷/g, "/");

    // 새로운 Function 객체 생성
    let calculate = new Function("return " + expression);

    // 수식을 계산
    let result = calculate();

    // 출력
    textArea.textContent = result;
  }

  lastInput = equalBtn.textContent;
  resetColors();
  expressionList = [];
  btnClickCheck = false;
  equalCheck = true;
});

let lastoperatorCheck;
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
      lastTextCheck === "÷" ||
      lastTextCheck === "x" ||
      lastTextCheck === "+" ||
      lastTextCheck === "-"
    ) {
      textListArea.textContent = textListArea.textContent.slice(0, -1); // 마지막 연산자 지우기
    }

    if (textArea.textContent === "" && textListArea.textContent === "") {
      return;
    }
    if (textArea.textContent === "") {
      console.log(lastInput);
      textListArea.textContent = textListArea.textContent + lastInput;
      return;
    }

    lastoperatorCheck = lastInput;
    console.log(lastoperatorCheck);
    expressionList.push(textArea.textContent + this.textContent);
    textListArea.textContent = expressionList.join("").trim();
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
      equalCheck = false;
      if (textArea.textContent === "") {
        // textArea.innerHTML = "&nbsp;";
      }

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
    btn.style.transition = "all 0.3s";
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
