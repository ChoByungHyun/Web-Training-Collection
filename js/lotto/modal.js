import lottoMain from "./buylotto.js";
const lottoScript = new lottoMain();
class Modal {
  constructor() {
    this.showResultButton = document.querySelector(".open-result-modal-button");
    this.modalClose = document.querySelector(".modal-close");
    this.modal = document.querySelector(".modal");
    this.lottoNumbersToggleButton = document.querySelector(
      ".lotto-numbers-toggle-button"
    );
    this.btnLottoReset = document.querySelector(".btn-reset");
  }
  modalInit() {
    const onModalShow = () => {
      this.modal.classList.add("open");
      this.winStatistics();
    };

    const onModalClose = () => {
      this.modal.classList.remove("open");
    };

    this.showResultButton.addEventListener("click", onModalShow);
    this.modalClose.addEventListener("click", onModalClose);

    this.btnLottoReset.addEventListener("click", () => {
      onModalClose();
      lottoScript.lottoReset();
    });
  }

  //통계창 render
  winStatistics() {
    const buyLotto = document.querySelectorAll(".buyLotto");
    const winNum = document.querySelectorAll(".winning-number");
    const win5th = document.querySelector(".win-5th");
    const win4th = document.querySelector(".win-4th");
    const win3rd = document.querySelector(".win-3rd");
    const win2nd = document.querySelector(".win-2nd");
    const win1st = document.querySelector(".win-1st");
    const lose = document.querySelector(".win-lose");
    const winRate = document.querySelector(".rate-percentage");
    let zero = 0;
    let five = 0;
    let four = 0;
    let three = 0;
    let two = 0;
    let one = 0;
    let numArr = [];
    let winningNumbers = [];
    for (let i = 0; i < buyLotto.length; i++) {
      numArr.push(buyLotto[i].textContent);
    }
    winNum.forEach((item) => {
      winningNumbers.push(parseInt(item.value));
    });
    // let winningNumbers = [tempWinningNumbers];

    let count = 0;
    let bonusNum = winningNumbers.pop();
    let buyLottoNumbers = [];
    for (let i = 0; i < numArr.length; i++) {
      let stringArr = numArr[i].split(",");
      buyLottoNumbers.push(stringArr.map(Number));
    }

    //당첨통계 함수.
    const winRanking = () => {
      for (let i = 0; i < buyLottoNumbers.length; i++) {
        for (let j = 0; j < 6; j++) {
          if (winningNumbers.includes(buyLottoNumbers[i][j])) {
            count++;
          }
        }
        if (count === 3) {
          five++;
          win5th.innerHTML = `${five}개`;
          count = 0;
        } else if (count === 4) {
          if (buyLottoNumbers[i].includes(bonusNum)) {
            two++;
            win2nd.innerHTML = `${two}개`;
            count = 0;
          } else {
            four++;
            win4th.innerHTML = `${four}개`;
            count = 0;
          }
        } else if (count === 5) {
          three++;
          win3rd.innerHTML = `${three}개`;
          count = 0;
        } else if (count === 6) {
          one++;
          win1st.innerHTML = `${one}개`;
          count = 0;
        } else {
          zero++;
          lose.innerHTML = `${zero}개`;
          count = 0;
        }
      }
    };
    //수익률 함수.
    const ratePercentage = () => {
      let totalUse = (five + four + three + two + one + zero) * 1000;
      let totalWin =
        five * 5000 +
        four * 50000 +
        three * 1500000 +
        two * 30000000 +
        one * 2000000000;
      let totalRate = ((totalWin - totalUse) / totalUse) * 100;
      if (totalUse === isNaN || totalUse === 0) {
        totalRate = 0;
      }
      winRate.innerHTML = `당신의 총 수익률은 ${totalRate.toFixed(
        2
      )}%입니다.<br />당신은 ${totalUse.toLocaleString()}원을 투자하여 ${totalWin.toLocaleString()}원을 벌었습니다.`;
    };

    winRanking();
    ratePercentage();
  }
}
export default Modal;
