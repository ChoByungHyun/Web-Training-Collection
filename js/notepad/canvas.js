// const canvas = document.getElementById("jsCanvas");
// const ctx = canvas.getContext("2d");
// const colors = document.getElementsByClassName("jsColor");
// const range = document.getElementById("jsRange");
// const mode = document.getElementById("jsMode");
// const saveBtn = document.getElementById("jsSave");
// const deleteBtn = document.getElementById("jsDelete");
// const testDiv = document.querySelector(".canvas-container");
// let saveActicle = document.querySelector(".date-List");

// const imgContainer = document.createElement("div");
// saveActicle.appendChild(imgContainer);

// const INITIAL_COLOR = "#000000";
// const CANVAS_SIZE = 450;

// ctx.strokeStyle = "#2c2c2c";

// canvas.width = CANVAS_SIZE;
// canvas.height = CANVAS_SIZE;

// ctx.fillStyle = "white";
// ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

// ctx.strokeStyle = INITIAL_COLOR;
// ctx.fillStyle = INITIAL_COLOR;
// ctx.lineWidth = 2.5; /* 라인 굵기 */

// let painting = false;
// let filling = false;

// function stopPainting() {
//   painting = false;
// }

// function startPainting() {
//   painting = true;
// }

// function onMouseMove(event) {
//   const x = event.offsetX;
//   const y = event.offsetY;
//   if (!painting) {
//     ctx.beginPath();
//     ctx.moveTo(x, y);
//   } else {
//     ctx.lineTo(x, y);
//     ctx.stroke();
//   }
// }

// function handleColorClick(event) {
//   const color = event.target.style.backgroundColor;
//   ctx.strokeStyle = color;
//   ctx.fillStyle = color;
// }

// function handleRangeChange(event) {
//   const size = event.target.value;
//   ctx.lineWidth = size;
// }

// function handleModeClick() {
//   if (filling === true) {
//     filling = false;
//     mode.innerText = "Fill";
//   } else {
//     filling = true;
//     mode.innerText = "Paint";
//   }
// }

// function handleCanvasClick() {
//   if (filling) {
//     ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
//   }
// }

// // 우클릭 방지
// /*
// function handleCM(event) {
//    event.preventDefault();
//  }
//  */

// let allPaint = JSON.parse(localStorage.getItem("allPaint"));
// allPaint = allPaint ?? [];
// let paintByDate = {};
// setPaint();

// function handleSaveClick() {
//   saveActicle = document.querySelector(".date-List");
//   let image = canvas.toDataURL();
//   let today = new Date();
//   let year = today.getFullYear();
//   let month = today.getMonth() + 1;
//   let date = today.getDate();
//   let currdate = year + "." + month + "." + date;
//   currdate = allPaint.push({
//     currdate,
//     image,
//   });
//   localStorage.setItem("allPaint", JSON.stringify(allPaint));

//   setPaint();

//   // let test = document.createElement("img");
//   // test.style.width = "300px";
//   // test.style.height = "300px";
//   // test.src = image;
//   // console.log(test);

//   // saveActicle.appendChild(test);
// }

// function setPaint() {
//   imgContainer.innerHTML = "";

//   for (const item of allPaint) {
//     let test = document.createElement("img");
//     test.style.width = "300px";
//     test.style.height = "300px";
//     test.src = item.image;
//     test.setAttribute("id", item.len);
//     imgContainer.appendChild(test);
//     console.log("?");
//   }
// }

// if (canvas) {
//   canvas.addEventListener("mousemove", onMouseMove);
//   canvas.addEventListener("mousedown", startPainting);
//   canvas.addEventListener("mouseup", stopPainting);
//   canvas.addEventListener("mouseleave", stopPainting);
//   canvas.addEventListener("click", handleCanvasClick);
//   // canvas.addEventListener("contextmenu", handleCM);
// }

// Array.from(colors).forEach((color) =>
//   color.addEventListener("click", handleColorClick)
// );

// if (range) {
//   range.addEventListener("input", handleRangeChange);
// }

// if (mode) {
//   mode.addEventListener("click", handleModeClick);
// }

// if (saveBtn) {
//   saveBtn.addEventListener("click", handleSaveClick);
// }

// deleteBtn.addEventListener("click", () => {
//   ctx.fillStyle = "white";
//   ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
// });

// // export default { setPaint };

// // let paintByDate = {};

// // function render() {
// //   let today = new Date();
// //   let year = today.getFullYear();
// //   let month = today.getMonth() + 1;
// //   let date = today.getDate();
// //   currdate = year + "." + month + "." + date;
// //   // currdate = "2023.4.30";

// //   // 빈 객체 생성
// //   let diaryByDate = {};

// //   // allMemo를 순회하면서 일기를 날짜별로 분류하여 diaryByDate에 저장
// //   for (const item of allPaint) {
// //     // 현재 일기의 날짜를 date변수에 저장
// //     let date = item.currdate;
// //     // diaryByDate에 date를 key로 가지는 객체가 없으면 빈 객체로 초기화
// //     if (!paintByDate[date]) {
// //       paintByDate[date] = {};
// //     }
// //     // 해당 날짜의 일기 목록 배열이 없으면 빈 배열로 초기화
// //     if (!paintByDate[date].list) {
// //       paintByDate[date].list = [];
// //     }
// //     // 현재 일기를 해당 날짜의 일기 목록에 push
// //     paintByDate[date].list.push(item);
// //   }

// //   // diaryByDate 객체를 순회하면서 날짜별로 일기를 표시
// //   for (const [date] of Object.entries(diaryByDate)) {
// //     for (const item of diary.list) {
// //     }
// //   }
// // }
