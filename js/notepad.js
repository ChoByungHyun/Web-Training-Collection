const diaryTitle = document.querySelector(".input-style");
const diaryContent = document.querySelector(".diary-textarea");
const btnSubmit = document.querySelector(".black-btn");
const listDiaryTitle = document.querySelector(".article-title");
const listDiaryContent = document.querySelector(".article-content");

const memoList = [];
const memo2 = {};
memo2["one"] = "메모1";
memo2["two"] = "메모2";
localStorage.setItem("메모2", JSON.stringify(memo2));

console.log(localStorage.getItem("메모2"));
console.log(JSON.parse(localStorage.getItem("메모2")));

// allMemo = allMemo ?? [];

btnSubmit.addEventListener("click", () => {
  listDiaryTitle.textContent = diaryTitle.value;
  listDiaryContent.textContent = diaryContent.value;

  let list1 = listDiaryTitle.textContent;
  let list2 = listDiaryContent.textContent;
  let allMemo = [list1, list2];
  localStorage.setItem("리스트", JSON.stringify(allMemo));
  console.log(JSON.parse(localStorage.getItem("리스트")));
});
