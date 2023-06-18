const carousel = document.querySelector(".carousel");

let isDragStart = false,
  prevPageX,
  prevScrollLeft;
const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
  // console.log(e.pageX);
  // console.log(carousel.scrollLeft);
};

const dragging = (e) => {
  //    console.log(e.pageX);
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
  isDragStart = false;
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);

// oxlarla keçidlər

arrowIcons = document.querySelectorAll(".wrapper i ");
firstImg = carousel.querySelectorAll("img")[0];
let firstImgWidth = firstImg.clientWidth + 14; 

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
  });
});
