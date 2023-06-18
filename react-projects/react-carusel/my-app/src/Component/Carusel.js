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
    // console.log(e.pageX);
    // console.log(carouselRef.current.scrollLeft);
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
  // useEffect(() => {
  //   const carouselElement = carouselRef.current;
  //   carouselElement.addEventListener('mousedown', dragStart);
  //   carouselElement.addEventListener('mousemove', dragging);
  //   carouselElement.addEventListener('mouseup', dragStop);

  //   return () => {
  //     carouselElement.removeEventListener('mousedown', dragStart);
  //     carouselElement.removeEventListener('mousemove', dragging);
  //     carouselElement.removeEventListener('mouseup', dragStop);
  //   };
  // }, [dragStart, dragging, dragStop]);
  const handleArrowClick = (event) => {
    const carousel = carouselRef.current;
    const iconId = event.target.id;
    const firstImg = carousel.querySelectorAll("img")[0];
    const firstImgWidth = firstImg.clientWidth + 14;
    carousel.scrollLeft += iconId === "left" ? -firstImgWidth : firstImgWidth;
  };
  return (
    <div className="carouselContainer">
      <div className="carouselContainer_wrapper">
        <FontAwesomeIcon id="left" className="carousel_icon" icon={faAngleLeft} onClick={handleArrowClick}/>
        <div  ref={carouselRef} onMouseDown={dragStart} onMouseMove={dragging} onMouseUp={dragStop} className="carousel_elements">
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
          <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
          <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
          <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
          <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        </div>
        <FontAwesomeIcon id="right"  className="carousel_icon" icon={faAngleRight} onClick={handleArrowClick}/>
      </div>
    </div>
  );
};

export default Carusel;
