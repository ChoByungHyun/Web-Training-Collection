class LottoMainScript {
  constructor() {
    this.inputMoney = document.querySelector("#inputMoney");
    this.btnConfirm = document.querySelector(".btn_confirm");
    this.flexWrapper = document.querySelector(".flex-wrap");
    this.toggleNumber = document.querySelector(".toggle-number");
    this.btnCreateNum = document.querySelector(".btn-create-win-num");
    this.winNumInput = document.querySelectorAll(".winning-number");
    this.btnClickGetLotto = document.querySelectorAll(".btn-get-lotto");
    this.getLotto = [];
  }

  //리셋.
  lottoReset() {
    console.log(this.getLotto);
    this.getLotto = [];
    for (let i = 0; i < this.winNumInput.length; i++) {
      this.winNumInput[i].value = "";
    }
    const buyLotto = document.querySelectorAll(".buyLotto");
    buyLotto.forEach((element) => {
      element.remove();
    });
    const totalLotto = document.querySelector(".total-lotto");
    totalLotto.innerHTML = `총 0개를 구매하였습니다.`;
  }

  //메인.
  lottoScript() {
    //Enter키로 로또 구매.
    this.inputMoney.addEventListener("keydown", () => {
      if (event.keyCode === 13) {
        createLottoDiv();
        totalLottoCount();
      }
    });
    //구매 확인 버튼.
    this.btnConfirm.addEventListener("click", () => {
      createLottoDiv();
      totalLottoCount();
    });

    //button 구매.
    this.btnClickGetLotto.forEach((element) => {
      element.addEventListener("click", () => {
        this.inputMoney.value = parseInt(element.textContent);
      });
    });

    //몇개인지 구별하는 함수.
    const buyLottoValue = () => {
      if (this.inputMoney.value % 1000 !== 0) {
        return alert("1000원 단위로 입력하세요!!!");
      }
      return this.inputMoney.value / 1000;
    };

    //구매한 로또 갯수 표시 함수.
    const totalLottoCount = () => {
      const totalLotto = document.querySelector(".total-lotto");
      const buyLotto = document.querySelectorAll(".buyLotto");

      totalLotto.innerHTML = `총 ${buyLotto.length}개를 구매하였습니다.`;
      inputMoney.value = "";
    };

    //구매한 로또번호 표시 함수.
    const createLottoDiv = () => {
      let lottoCount = buyLottoValue();
      this.getLotto = [];
      const buyLotto = document.querySelectorAll(".buyLotto");
      if (buyLotto.length + lottoCount > 100) {
        alert("한 주에 한명당 100개만 구매가 가능합니다.");
        return;
      }
      for (let i = 0; i < lottoCount; i++) {
        randomNumber(false);
        const buyLotto = document.createElement("div");
        buyLotto.className = "buyLotto";
        buyLotto.innerText = `${this.getLotto[i]}`;
        this.flexWrapper.appendChild(buyLotto);
        if (toggleCheck) {
          buyLotto.style.display = "block";
        }
      }
      inputMoney.value = "";
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
        this.getLotto.push(lottoNum);

        return this.getLotto;
      }
    };

    //로또 번호 보는 토글.
    this.toggleNumber.addEventListener("click", () => {
      toggleNumberView();
    });

    //로또 당첨번호 생성버튼 클릭.
    this.btnCreateNum.addEventListener("click", () => {
      const winNumber = randomNumber(true);
      for (let i = 0; i < this.winNumInput.length; i++) {
        this.winNumInput[i].value = parseInt(winNumber[i]);
      }
    });

    //로또번호 보는 토글 함수.
    let toggleCheck = false;
    const toggleNumberView = () => {
      const lottoContainer = document.querySelector(".img-lotto-container");
      if (!toggleCheck) {
        const imgLotto = document.querySelectorAll(".img-lotto");
        const buyLotto = document.querySelectorAll(".buyLotto");
        for (let i = 0; i < imgLotto.length; i++) {
          imgLotto[i].style.display = "none";
        }
        for (let i = 0; i < buyLotto.length; i++) {
          buyLotto[i].style.display = "block";
        }
        lottoContainer.classList.add("flex-col");
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
        lottoContainer.classList.remove("flex-col");
        toggleCheck = false;
      }
    };
  }
}
export default LottoMainScript;
