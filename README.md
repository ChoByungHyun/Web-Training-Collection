# 웹페이지 연습장.

여러 예제들을 연습해볼 수 있습니다.

메인화면 url - https://chobyunghyun.github.io/Web-Training-Collection/

메모장 url - https://chobyunghyun.github.io/Web-Training-Collection/training/notepad/notepad.html

계산기 url - https://chobyunghyun.github.io/Web-Training-Collection/training/calculator/calculator.html

로또 url - https://chobyunghyun.github.io/Web-Training-Collection/training/lotto/lotto.html

타이머 url - https://chobyunghyun.github.io/Web-Training-Collection/training/timer/timer.html

자동차 경주 - https://chobyunghyun.github.io/Web-Training-Collection/training/racing-car/index.html

<details>
<summary>계산기 수정사항 체크리스트.</summary>
<div markdown="1">

## - 해결완료.

- [x] 소수점 이하 숫자 콤마처리.(comma,uncomma 함수 문제)
- [x] "-" 연산자처리.(comma 정규표현식 문제)
- [x] 연산자 바뀔때 처리.(comma 정규표현식 문제)
- [x] "=" 연속처리 콤마 미출력처리.(comma 함수 문제)
- [x] +/- 버튼 문제.(comma 정규표현식 문제)
- [x] 배경색 밝게.
- [x] 연산자 눌린 상태로 "=" 클릭이 연산 안됨.

## - 수정 예정사항.

- [ ] 숫자에 '.' 하나만 있을 때 백 스크린 "." 제거
- [ ] 결과창 디폴트값 0 (일부로 지운건데..ㅠ)
- [ ] "%" 부동소수점?인지 오류처리.
- [ ] 소수점 이하 3자리까지 밖에 출력 안됨.

</div>
</details>

<details>
<summary>로또 생성기 체크리스트.</summary>
<div markdown="1">

### 🎯 step1 구입 기능

- [x] 로또 구입 금액을 입력하면, 금액에 해당하는 로또를 발급해야 한다.
- [x] 로또 1장의 가격은 1,000원이다.
- [x] 소비자는 **자동 구매**를 할 수 있어야 한다.
- [x] 복권 번호는 번호보기 토글 버튼을 클릭하면, 볼 수 있어야 한다.

### 🎯🎯 step2 당첨 결과 기능

- [x] 결과 확인하기 버튼을 누르면 당첨 통계, 수익률을 모달로 확인할 수 있다.
- [x] 로또 당첨 금액은 고정되어 있는 것으로 가정한다.
- [x] 다시 시작하기 버튼을 누르면 초기화 되서 다시 구매를 시작할 수 있다.

### 🎯🎯🎯 step3 수동 구매(선택사항)

- [ ] 소비자는 수동 구매(스스로 구매 번호를 입력)를 할 수 있어야 한다.
  - 수동 구매를 위한 input UI는 스스로 구현한다.
- [ ] 수동 구매 후 남는 금액이 있다면 자동으로 구매할 수 있어야 한다.

</div>
</details>

<details>
<summary>초간단 자동차 경주 게임 체크리스트.</summary>
<div markdown="1">

### 🎯 기능 요구사항.

- [ ] 주어진 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다.
- [ ] 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- [ ] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
  - 자동차 n대 입력.
- [ ] 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
  - 전체 이동 횟수.
- [ ] 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- [ ] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- [ ] 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
  - 동점자처리 해줘야함.
- [ ] 사용자가 잘못된 입력 값을 작성한 경우 alert을 이용해 메시지를 보여주고, 다시 입력할 수 있게 한다.

</div>
</details>
