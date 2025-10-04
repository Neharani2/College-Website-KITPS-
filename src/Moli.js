
// import React from "react"

// const Moli=()=>{
//     return(
//     <>
    
    
    
//     </>
//     )
// }

// export default Moli;


import React, { useEffect, useState } from "react";
import "./moli.css";

const stats = [
  { value: 10000, label: "PLACEMENTS", icon: "🏆" },
  { value: 12000, label: "ALUMNI", icon: "🏆" },
  { value: 400, label: "TOP RECRUITERS", icon: "🏆" },
  { value: 250, label: "MNC'S VISITS", icon: "🏆" },
];

const Counter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let totalDuration = 2000; // 2s animation
    let incrementTime = 10;
    let step = (end / (totalDuration / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <h1>{count}+</h1>;
};

const Moli = () => {
  return (
    <div className="moli-container">
      {stats.map((item, i) => (
        <div key={i} className="moli-card">
          <Counter value={item.value} />
          <p className="moli-label">{item.label}</p>
          <div className="moli-line"></div>
          <span className="moli-icon">{item.icon}</span>
        </div>
      ))}
    </div>
  );
};

export default Moli;
