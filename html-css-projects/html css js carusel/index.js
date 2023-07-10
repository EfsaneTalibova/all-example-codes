const carousel = document.querySelector(".carousel");

let isDragStart = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;

const showHideIcons = () => {
  const scrollWidth = carousel.scrollWidth - carousel.clientWidth; // maksimum kaydırma genişliğini al

  arrowIcons[0].style.display = carousel.scrollLeft === 0 ? 'none' : 'block';
  arrowIcons[1].style.display = carousel.scrollLeft === scrollWidth ? 'none' : 'block';
};

const arrowIcons = document.querySelectorAll(".wrapper i");
const firstImg = carousel.querySelectorAll("img")[0];

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const firstImgWidth = firstImg.clientWidth + 14;
    carousel.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60);
  });
});

const autoSlide = () => {
  positionDiff = Math.abs(positionDiff);

  const firstImgWidth = firstImg.clientWidth + 14;
  const valDifference = firstImgWidth - positionDiff;

  if (carousel.scrollLeft > prevScrollLeft) {
    return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
  }

  carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
};

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  carousel.classList.add('dragging');
  showHideIcons();
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove('dragging');
  autoSlide();
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);