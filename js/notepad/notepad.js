// import setPaint from "./canvas.js";
console.log(1);

const diaryTitle = document.querySelector(".input-style");
const diaryContent = document.querySelector(".diary-textarea");
const btnSubmit = document.querySelector(".black-btn");
const listDiaryTitle = document.querySelector(".article-title");
const listDiaryContent = document.querySelector(".article-content");
const saveDate = document.querySelector(".heart");
const inputForm = document.querySelector(".input-form");
const newDiary = document.querySelector(".new-diary");
const btnOnOff = document.createElement("button");

let saveActicle = document.querySelector(".date-List");

const imgContainer = document.createElement("div");

// Swal.fire(
//   "많은 잔버그가 존재합니다.\n 최초 작성은 메모장으로 부탁드려요."
// );

let currdate;
let allMemo = JSON.parse(localStorage.getItem("allMemo"));
allMemo = allMemo ?? [];
render();
let allPaint = JSON.parse(localStorage.getItem("allPaint"));
allPaint = allPaint ?? [];
let paintByDate = {};
setPaint();

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

newDiary.addEventListener("click", () => {
  if (inputForm.style.display === "none") {
    inputForm.style.display = "block";
    newDiary.textContent = "접기";
  } else {
    inputForm.style.display = "none";
    newDiary.textContent = "새 메모 작성";
  }
});

let checkToggle = true;
btnOnOff.addEventListener("click", () => {
  const checkAllDisplay = document.querySelectorAll(".date-List");
  if (checkToggle) {
    for (let i = 0; i < checkAllDisplay.length; i++) {
      checkAllDisplay[i].style.display = "none";
      btnOnOff.textContent = "모두 펼치기";
    }
    checkToggle = false;
  } else if (!checkToggle) {
    for (let i = 0; i < checkAllDisplay.length; i++) {
      checkAllDisplay[i].style.display = "block";
      btnOnOff.textContent = "모두 접기";
    }
    checkToggle = true;
  }
});

function render() {
  const display = document.querySelector(".diary-list");
  display.innerHTML = "";
  btnOnOff.setAttribute("class", "btn-onoff");
  display.appendChild(btnOnOff);
  btnOnOff.textContent = "모두 접기";

  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  currdate = year + "." + month + "." + date;
  // currdate = "2023.4.25";

  saveDate.setAttribute("class", "heart");
  saveDate.textContent = currdate + "의 메모";

  // 빈 객체 생성
  let diaryByDate = {};

  // allMemo를 순회하면서 일기를 날짜별로 분류하여 diaryByDate에 저장
  for (const item of allMemo) {
    // 현재 일기의 날짜를 date변수에 저장
    let date = item.currdate;
    // diaryByDate에 date를 key로 가지는 객체가 없으면 빈 객체로 초기화
    if (!diaryByDate[date]) {
      diaryByDate[date] = {};
    }
    // 해당 날짜의 일기 목록 배열이 없으면 빈 배열로 초기화
    if (!diaryByDate[date].list) {
      diaryByDate[date].list = [];
    }
    // 현재 일기를 해당 날짜의 일기 목록에 push
    diaryByDate[date].list.push(item);
  }

  // diaryByDate 객체를 순회하면서 날짜별로 일기를 표시
  for (const [date, diary] of Object.entries(diaryByDate)) {
    const dateCategory = document.createElement("h2");
    const dateList = document.createElement("ul");
    const toggleBtn = document.createElement("button");

    dateCategory.setAttribute("class", "date-Category");
    dateCategory.textContent = date;

    display.appendChild(dateCategory);
    dateCategory.appendChild(toggleBtn);

    dateCategory.appendChild(dateList);

    dateList.setAttribute("class", "date-List");
    toggleBtn.textContent = "▲";
    toggleBtn.addEventListener("click", () => {
      if (dateList.style.display === "block") {
        dateList.style.display = "none";
        toggleBtn.textContent = "▼";
      } else {
        dateList.style.display = "block";
        toggleBtn.textContent = "▲";
      }
    });

    for (const item of diary.list) {
      const saveActicle = document.createElement("article");
      const saveTitle = document.createElement("h3");
      const saveContentDiv = document.createElement("div");
      const saveContent = document.createElement("p");
      const deleteMemoBtn = document.createElement("button");
      // const editMemoBtn = document.createElement("button");
      const btnGroup = document.createElement("div");
      const listLi = document.createElement("li");
      const saveDate = document.createElement("time");

      saveTitle.setAttribute("class", "article-title");
      saveContentDiv.setAttribute("class", "article-content-div");
      saveContent.setAttribute("class", "article-content");
      saveActicle.setAttribute("class", "diary-article");
      btnGroup.setAttribute("class", "button-group");
      saveDate.setAttribute("class", "article-time");
      toggleBtn.setAttribute("class", "toggle-btn");

      saveDate.textContent = item.currdate;
      saveTitle.textContent = item.title;
      saveContent.textContent = item.content;

      deleteMemoBtn.setAttribute("id", item.len);
      deleteMemoBtn.setAttribute("class", "btn-delete");
      deleteMemoBtn.setAttribute("onclick", "remove()");
      // deleteMemoBtn.addEventListener("click", remove);

      dateList.appendChild(listLi);
      listLi.appendChild(saveActicle);

      saveActicle.appendChild(saveTitle);
      saveActicle.appendChild(saveDate);
      saveActicle.appendChild(saveContentDiv);
      saveContentDiv.appendChild(saveContent);
      saveContentDiv.appendChild(btnGroup);

      saveContent.appendChild(imgContainer); //canvas

      btnGroup.appendChild(deleteMemoBtn);

      saveActicle.addEventListener("click", () => {
        if (event.target === saveContent) {
          return;
        }
        saveContentDiv.classList.toggle("show-content");
        if (saveContentDiv.classList.contains("show-content")) {
          saveTitle.style.display = "block";
        } else {
          saveTitle.style.display = "-webkit-box";
        }
      });
    }
  }
}

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

// ================================================================ Canvas ========================================================================

const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");
const deleteBtn = document.getElementById("jsDelete");
const testDiv = document.querySelector(".canvas-container");

const INITIAL_COLOR = "#000000";
const CANVAS_SIZE = 450;

ctx.strokeStyle = "#2c2c2c";

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5; /* 라인 굵기 */

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}

function handleSaveClick() {
  let image = canvas.toDataURL();
  let len = allPaint.length;
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let currdate = year + "." + month + "." + date;
  allPaint.push({
    currdate,
    image,
    len,
  });
  localStorage.setItem("allPaint", JSON.stringify(allPaint));

  setPaint();
}

function setPaint() {
  imgContainer.innerHTML = "";
  imgContainer.setAttribute("class", "img-container");

  for (const item of allPaint) {
    let img_Paint = document.createElement("img");
    const deletePaintBtn = document.createElement("button");
    const imgGroup = document.createElement("div");

    deletePaintBtn.setAttribute("class", "btn-paint-delete");
    deletePaintBtn.setAttribute("id", item.len);
    deletePaintBtn.setAttribute("onclick", "removePaint()");
    deletePaintBtn.textContent = "삭제";
    imgGroup.setAttribute("class", "img-group");

    img_Paint.setAttribute("class", "img-element");
    img_Paint.style.width = "330px";
    img_Paint.style.height = "330px";
    img_Paint.src = item.image;
    img_Paint.setAttribute("id", item.len);
    imgContainer.appendChild(imgGroup);
    imgGroup.appendChild(img_Paint);

    imgGroup.appendChild(deletePaintBtn);
  }
}

function removePaint() {
  const idx = allPaint.find((item) => item.len == event.srcElement.id);
  // const idx = event.srcElement.id;
  console.log(idx);
  if (idx) {
    allPaint.splice(
      allPaint.findIndex((item) => item.len == idx.len),
      1
    );
  }
  localStorage.setItem("allPaint", JSON.stringify(allPaint));
  setPaint();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  // canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

if (saveBtn) {
  saveBtn.addEventListener("click", handleSaveClick);
}

deleteBtn.addEventListener("click", () => {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
});
