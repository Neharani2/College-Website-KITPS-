// import React from "react"

// const Nextproject=()=>{
//     return(
//          <>
//          <div className="work">
//             <div className="syii" >

//             </div>

//          </div>
     
//         </>
//     )
// }
// export default Nextproject;

import React, { useState, useEffect } from "react";
import "./project.css";   // sirf is file ke liye css

const Nextproject = () => {
  const projects = [
    {
      id: 1,
      name: "Software Engineers  ",
      img: "https://image-static.collegedunia.com/public/college_data/images/campusimage/1500275412labshf.JPG",
      desc: "Skills Development Program."
    },
    {
      id: 2,
      name: "Engineers ERP Portal",
      img: "https://image-static.collegedunia.com/public/college_data/images/campusimage/1500275412labsnfdb.JPG",
      desc: "Complete portal for student data and academics."
    },
    {
      id: 3,
      name: " Mechanical Engineers ",
      img: "https://image-static.collegedunia.com/public/college_data/images/campusimage/1500275412labvsdd.JPG",
      desc: " An Engineering projects are the Team projects "



  
    }
  ];

  const [current, setCurrent] = useState(0);

  // ✅ Auto Slide (Responsive UX ke liye)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 4000); // har 4 sec mein slide change
    return () => clearInterval(timer);
  }, [projects.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="work">
      <div className="syii">
        <h2 className="carousel-title">✨ Student Projects ✨</h2>
        <div className="carousel-container">
          <button className="arrow left" onClick={prevSlide}>
            ❮
          </button>

          <div className="carousel-slide">
            <img src={projects[current].img} alt={projects[current].name} />
            <h3>{projects[current].name}</h3>
            <p>{projects[current].desc}</p>
          </div>

          <button className="arrow right" onClick={nextSlide}>
            ❯
          </button>
        </div>

        <div className="dots">
          {projects.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nextproject;
