

import React, { useState } from "react";
import "./App.css"; 
// project.css

const Carousels = () => {
  // Sample images
  
    const images = [
    
    "https://images.collegedunia.com/public/college_data/images/campusimage/1500275412labshf.JPG?mode=stretch",

    "https://enrollacademy.com/wp-content/uploads/2022/05/k25.jpg",

    "https://images.collegedunia.com/public/college_data/images/campusimage/1500275412labvsdh.JPG?mode=stretch",

    "https://cache.careers360.mobi/media/colleges/reviews/Sri%20Sai%20Institute%20of%20Technology%20and%20Science%2C%20Rayachoti%20(1).jpg",

    "https://images.collegedunia.com/public/college_data/images/campusimage/1500275412lndjh.JPG?mode=stretch",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">My Project Gallery</h2>

      <div className="carousel-wrapper">
        {/* Left thumbnails */}
        <div className="thumbnails">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`thumb-${idx}`}
              className={`thumbnail ${idx === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="main-image-wrapper">
          <button className="piright first" onClick={handlePrev}>
            ◀
          </button>
          <img
            src={images[currentIndex]}
            alt="main"
            className="main-image"
          />
          <button className="piright second" onClick={handleNext}>
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousels;
