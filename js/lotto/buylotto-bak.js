const inputMoney = document.querySelector("#inputMoney");
const btnConfirm = document.querySelector(".btn_confirm");
const flexWrapper = document.querySelector(".flex-wrap");
const toggleNumber = document.querySelector(".toggle-number");
const btnCreateNum = document.querySelector(".btn-create-win-num");
const winNumInput = document.querySelectorAll(".winning-number");

let getLotto = [];
let toggleCheck = false;

const inputMoneyFuc = () => {
  inputMoney.addEventListener("invalid", () => {
    inputMoney.preventDefault();
    alert("1000원단위로 넣어주세요!");
  });
};

//Enter키로 로또 구매.
inputMoney.addEventListener("keydown", () => {
  if (event.keyCode === 13) {
    createLottoDiv();
    totalLottoCount();
  }
});

//몇개인지 구별하는 함수.
const buyLottoValue = () => {
  return inputMoney.value / 1000;
};

//구매확인 버튼.
btnConfirm.addEventListener("click", () => {
  createLottoDiv();
  totalLottoCount();
});

//구매한 로또 갯수 표시 함수.
const totalLottoCount = () => {
  const totalLotto = document.querySelector(".total-lotto");
  const buyLotto = document.querySelectorAll(".buyLotto");
  totalLotto.innerHTML = `총 ${buyLotto.length}개를 구매하였습니다.`;
};

//구매한 로또번호 표시 함수.
const createLottoDiv = () => {
  let lottoCount = buyLottoValue();
  getLotto = [];
  for (let i = 0; i < lottoCount; i++) {
    randomNumber(false);
    const buyLotto = document.createElement("div");
    buyLotto.className = "buyLotto";
    buyLotto.innerText = ` - ${getLotto[i]}`;
    flexWrapper.appendChild(buyLotto);
  }
};

//로또 번호 생성 함수.
const randomNumber = (win) => {
  let lottoNum = [];
  let numLength = 6;
  if (win) {
    numLength = 7;
  }
  while (lottoNum.length < numLength) {
    let number = Math.floor(Math.random() * 45) + 1;
    if (lottoNum.indexOf(number) < 0) {
      lottoNum.push(number);
    }
  }
  if (win) {
    return lottoNum;
  } else {
    getLotto.push(lottoNum);
    return getLotto;
  }
};

//로또 번호 보는 토글.
toggleNumber.addEventListener("click", () => {
  toggleNumberView();
});

//로또 당첨번호 생성버튼 클릭.
btnCreateNum.addEventListener("click", () => {
  const winNumber = randomNumber(true);
  for (let i = 0; i < winNumInput.length; i++) {
    winNumInput[i].value = winNumber[i];
  }
});

//로또번호 보는 토글 함수.
const toggleNumberView = () => {
  if (!toggleCheck) {
    const imgLotto = document.querySelectorAll(".img-lotto");
    const buyLotto = document.querySelectorAll(".buyLotto");
    for (let i = 0; i < imgLotto.length; i++) {
      imgLotto[i].style.display = "none";
    }
    for (let i = 0; i < buyLotto.length; i++) {
      buyLotto[i].style.display = "block";
    }
    toggleCheck = true;
  } else {
    const imgLotto = document.querySelectorAll(".img-lotto");
    const buyLotto = document.querySelectorAll(".buyLotto");
    for (let i = 0; i < imgLotto.length; i++) {
      imgLotto[i].style.display = "block";
    }
    for (let i = 0; i < buyLotto.length; i++) {
      buyLotto[i].style.display = "none";
    }
    toggleCheck = false;
  }
};
