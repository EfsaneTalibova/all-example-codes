import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState,useEffect } from 'react';
import "./Carusel.css";
const Carusel = () => {
  
  const carouselRef = useRef(null);
  const [isDragStart, setIsDragStart] = useState(false);
  const [prevPageX, setPrevPageX] = useState(0);
  const [prevScrollLeft, setPrevScrollLeft] = useState(0);

  const dragStart = (e) => {
    setIsDragStart(true);
    setPrevPageX(e.pageX);
    setPrevScrollLeft(carouselRef.current.scrollLeft);
    console.log(e.pageX);
    console.log(carouselRef.current.scrollLeft);
  };

  const dragging = (e) => {
    // console.log(e.pageX);
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carouselRef.current.scrollLeft = prevScrollLeft - positionDiff;
  };

  const dragStop = () => {
    setIsDragStart(false);
  };
  useEffect(() => {
    const carouselElement = carouselRef.current;
    carouselElement.addEventListener('mousedown', dragStart);
    carouselElement.addEventListener('mousemove', dragging);
    carouselElement.addEventListener('mouseup', dragStop);

    return () => {
      carouselElement.removeEventListener('mousedown', dragStart);
      carouselElement.removeEventListener('mousemove', dragging);
      carouselElement.removeEventListener('mouseup', dragStop);
    };
  }, [dragStart, dragging, dragStop]);
  return (
    <div className="carouselContainer">
      <div className="carouselContainer_wrapper">
        <FontAwesomeIcon className="carousel_icon" icon={faAngleLeft} />
        <div  ref={carouselRef} className="carousel_elements">
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
        </div>
        <FontAwesomeIcon className="carousel_icon" icon={faAngleRight} />
      </div>
    </div>
  );
};

export default Carusel;
