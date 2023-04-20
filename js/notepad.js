const diaryTitle = document.querySelector(".input-style");
const diaryContent = document.querySelector(".diary-textarea");
const btnSubmit = document.querySelector(".black-btn");
const listDiaryTitle = document.querySelector(".article-title");
const listDiaryContent = document.querySelector(".article-content");

btnSubmit.addEventListener("click", () => {
  listDiaryTitle.textContent = diaryTitle.value;
  listDiaryContent.textContent = diaryContent.value;

  let list1 = listDiaryTitle.textContent;
  let list2 = listDiaryContent.textContent;
  let allMemo = [list1, list2];
  localStorage.setItem("리스트", JSON.stringify(allMemo));
  console.log(JSON.parse(localStorage.getItem("리스트")));
});

function render() {
  const display = document.getElementById("display");
  display.innerHTML = "";

  for (const item of allMemo) {
    const saveTitle = document.createElement("h3");
    const saveContent = document.createElement("p");
    const saveId = document.createElement("p");
    const deleteMemoBtn = document.createElement("button");

    saveTitle.textContent = item.title;
    saveContent.textContent = item.content;
    saveId.textContent = item.len + 1;
    deleteMemoBtn.textContent = "삭제";
    deleteMemoBtn.setAttribute("id", item.len);
    deleteMemoBtn.setAttribute("onclick", "remove()");

    display.appendChild(saveId);
    display.appendChild(saveTitle);
    display.appendChild(saveContent);
    display.appendChild(deleteMemoBtn);
  }
}

//sample code
// let allMemo = JSON.parse(localStorage.getItem("allMemo"));
// allMemo = allMemo ?? [];
// render();

// function saveNote() {
//   const title = document.getElementById("title").value;
//   const content = document.getElementById("content").value;

//   allMemo.push({ title, content, len: allMemo.length });

//   localStorage.setItem("allMemo", JSON.stringify(allMemo));
//   render();
// }

// function render() {
//   const display = document.getElementById("display");
//   display.innerHTML = "";

//   for (const item of allMemo) {
//     const saveTitle = document.createElement("h2");
//     const saveContent = document.createElement("p");
//     const saveId = document.createElement("p");
//     const deleteMemoBtn = document.createElement("button");

//     saveTitle.textContent = item.title;
//     saveContent.textContent = item.content;
//     saveId.textContent = item.len + 1;
//     deleteMemoBtn.textContent = "삭제";
//     deleteMemoBtn.setAttribute("id", item.len);
//     deleteMemoBtn.setAttribute("onclick", "remove()");

//     display.appendChild(saveId);
//     display.appendChild(saveTitle);
//     display.appendChild(saveContent);
//     display.appendChild(deleteMemoBtn);
//   }
// }

// function remove() {
//   // console.log(event.srcElement.id);
//   // console.log(allMemo);
//   const idx = allMemo.find((item) => item.len == event.srcElement.id);
//   if (idx) {
//     allMemo.splice(
//       allMemo.findIndex((item) => item.len == idx.len),
//       1
//     );
//   }
//   localStorage.setItem("allMemo", JSON.stringify(allMemo));
//   render();
// }