const diaryTitle = document.querySelector(".input-style");
const diaryContent = document.querySelector(".diary-textarea");
const btnSubmit = document.querySelector(".black-btn");
const listDiaryTitle = document.querySelector(".article-title");
const listDiaryContent = document.querySelector(".article-content");
const btnDeleteImg = document.querySelector(".img-btn-delete");
const saveDate = document.querySelector(".heart");

let currdate;
let allMemo = JSON.parse(localStorage.getItem("allMemo"));
allMemo = allMemo ?? [];
render();

btnSubmit.addEventListener("click", () => {
  listDiaryTitle.textContent = diaryTitle.value;
  listDiaryContent.textContent = diaryContent.value;

  let title = listDiaryTitle.textContent;
  let content = listDiaryContent.textContent;
  allMemo.push({ title, content, len: allMemo.length, currdate });

  localStorage.setItem("allMemo", JSON.stringify(allMemo));
  render();
  diaryTitle.value = "";
  diaryContent.value = "";
});

function render() {
  const display = document.querySelector(".diary-list");
  display.innerHTML = "";

  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let day = today.getDay();
  currdate = year + "." + month + "." + date;

  saveDate.setAttribute("class", "heart");
  saveDate.textContent = currdate + "의 비밀일기";

  for (const item of allMemo) {
    const saveActicle = document.createElement("article");
    const saveTitleBtn = document.createElement("button"); // replace h3 with button
    const saveContentDiv = document.createElement("div"); // add div to contain memo content
    const saveContent = document.createElement("p");
    const deleteMemoBtn = document.createElement("button");
    const editMemoBtn = document.createElement("button");
    const btnGroup = document.createElement("div");
    const listUl = document.createElement("ul");
    const listLi = document.createElement("li");
    const saveDate = document.createElement("time");

    saveTitleBtn.setAttribute("class", "article-title"); // set class to button
    saveContentDiv.setAttribute("class", "article-content-div"); // set class to div
    saveContent.setAttribute("class", "article-content");
    saveActicle.setAttribute("class", "diary-article");
    btnGroup.setAttribute("class", "button-group");
    saveDate.setAttribute("class", "article-time");

    saveDate.textContent = item.currdate;
    saveTitleBtn.textContent = item.title; // set text content on button
    saveContent.textContent = item.content;

    deleteMemoBtn.setAttribute("id", item.len);
    deleteMemoBtn.setAttribute("class", "btn-delete");
    deleteMemoBtn.setAttribute("onclick", "remove()");

    editMemoBtn.setAttribute("id", item.len);
    editMemoBtn.setAttribute("class", "btn-edit");

    display.appendChild(listUl);
    listUl.appendChild(listLi);
    listLi.appendChild(saveActicle);

    saveActicle.appendChild(saveTitleBtn); // append button instead of h3
    saveActicle.appendChild(saveDate);
    saveActicle.appendChild(saveContentDiv); // append div to contain memo content
    saveContentDiv.appendChild(saveContent); // append memo content to div

    saveActicle.appendChild(btnGroup);

    btnGroup.appendChild(deleteMemoBtn);
    btnGroup.appendChild(editMemoBtn);

    // add event listener to toggle button
    saveTitleBtn.addEventListener("click", () => {
      saveContentDiv.classList.toggle("show-content");
    });
  }
}

// function render() {
//   const display = document.querySelector(".diary-list");
//   display.innerHTML = "";

//   let today = new Date();
//   let year = today.getFullYear(); // 년도
//   let month = today.getMonth() + 1; // 월
//   let date = today.getDate(); // 날짜
//   let day = today.getDay(); // 요일
//   currdate = year + "." + month + "." + date;

//   saveDate.setAttribute("class", "heart");

//   saveDate.textContent = currdate + "의 비밀일기";

//   for (const item of allMemo) {
//     const saveActicle = document.createElement("article");
//     const saveTitle = document.createElement("h3");
//     const saveContent = document.createElement("p");
//     const deleteMemoBtn = document.createElement("button");
//     const editMemoBtn = document.createElement("button");
//     const btnGroup = document.createElement("div");
//     const listUl = document.createElement("ul");
//     const listLi = document.createElement("li");
//     const saveDate = document.createElement("time");

//     saveTitle.setAttribute("class", "article-title");
//     saveContent.setAttribute("class", "article-content");
//     saveActicle.setAttribute("class", "diary-article");
//     btnGroup.setAttribute("class", "button-group");
//     saveDate.setAttribute("class", "article-time");

//     saveDate.textContent = item.currdate;
//     saveTitle.textContent = item.title;
//     saveContent.textContent = item.content;
//     // saveId.textContent = item.len + 1;

//     deleteMemoBtn.setAttribute("id", item.len);
//     deleteMemoBtn.setAttribute("class", "btn-delete");
//     deleteMemoBtn.setAttribute("onclick", "remove()");

//     editMemoBtn.setAttribute("id", item.len);
//     editMemoBtn.setAttribute("class", "btn-edit");
//     // editMemoBtn.setAttribute("onclick", "remove()");

//     display.appendChild(listUl);
//     listUl.appendChild(listLi);
//     listLi.appendChild(saveActicle);

//     // saveActicle.appendChild(saveId);
//     saveActicle.appendChild(saveTitle);
//     saveActicle.appendChild(saveDate);
//     saveActicle.appendChild(saveContent);

//     saveActicle.appendChild(btnGroup);

//     btnGroup.appendChild(deleteMemoBtn);
//     btnGroup.appendChild(editMemoBtn);
//   }
// }

function remove() {
  const idx = allMemo.find((item) => item.len == event.srcElement.id);
  if (idx) {
    allMemo.splice(
      allMemo.findIndex((item) => item.len == idx.len),
      1
    );
  }
  localStorage.setItem("allMemo", JSON.stringify(allMemo));
  render();
}
