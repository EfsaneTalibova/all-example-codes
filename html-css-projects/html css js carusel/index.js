const carousel = document.querySelector(".carousel");

let isDragStart = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;

// oxlarla keçidlər

arrowIcons = document.querySelectorAll(".wrapper i ");
firstImg = carousel.querySelectorAll("img")[0];



const showHideIcons = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width

  arrowIcons[0].style.display = carousel.scrollLeft === 0 ? 'none' : 'block'
  arrowIcons[1].style.display = carousel.scrollLeft === scrollWidth ? 'none' : 'block'
}

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 14;
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60)
  });
});
const autoSlide = () => {
  positionDiff = Math.abs(positionDiff)

  let firstImgWidth = firstImg.clientWidth + 14;

  let valDifference = firstImgWidth - positionDiff

  if (carousel.scrollLeft > prevScrollLeft) {
    // return console.log(prevScrollLeft + "right"+ carousel.scrollLeft)
    return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff
  }
  carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff
  // return console.log(prevScrollLeft + "left"+ carousel.scrollLeft)
}

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;

  // console.log(e.pageX);
  // console.log(carousel.scrollLeft);
};

const dragging = (e) => {
  //    console.log(e.pageX);
  if (!isDragStart) return;
  e.preventDefault();
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  carousel.classList.add('dragging')
  showHideIcons()
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove('dragging')
  autoSlide()
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);




