import React, { useState } from "react";
import pepole from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  let [index, setIndex] = useState(0);
  let { name, job, image, text } = pepole[index];
  function checkIndex(number){
    if(number<0){
      return pepole.length-1
    }
    if(number>pepole.length-1){
      return 0
    }
    return number
  }
  function nextbtn() {
    // if (index >= 0) index--;
    // if (index < 0) index = pepole.length - 1;
    // setIndex(index);
    setIndex((index)=>{
      let newindex = index+1;
      return checkIndex(newindex)
    })
  }
  function prevbtn() {
    // if (index <= 3) index++;
    // if (index == pepole.length) index = 0;
    // setIndex(index);
    setIndex((index)=>{
      let newindex = index-1;
      return checkIndex(newindex)
    })
  }
  function surprise(){
   const randomnumber = Math.floor(Math.random()*pepole.length)
   setIndex(randomnumber)
  }
  // surprise()
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button
          className="prev-btn"
          onClick={prevbtn}
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          onClick={nextbtn}
        >
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={surprise} >surprise me</button>
    </article>
  );
};

export default Review;
