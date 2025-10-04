// const  Insitution = () =>{
//     return(
//         <>
        
//         </>
//     )
// }
// export default Insitution;
import React from "react";
import "./dropdown.css";

const Insitution = () => {
  return (
    <>
      <nav className="mega-navbar">
        <ul className="mega-menu">
          <li><a href="#">Home</a></li>

          <li className="has-mega-dropdown">
            <a href="#">Admission ▾</a>
            
            {/* Mega Dropdown */}
            <div className="mega-dropdown">
              {/* Left side links */}
              <div className="mega-links">
                <h3>B.Tech</h3>
                <ul>
                  <li><a href="#">Civil Engineering</a></li>
                  <li><a href="#">Computer Science</a></li>
                  <li><a href="#">Electronics & Communication</a></li>
                  <li><a href="#">Information Technology</a></li>
                  <li><a href="#">Mechanical Engineering</a></li>
                </ul>
                <a href="#" className="apply-link">Apply for Admission</a>
              </div>

              {/* Right side images */}
              <div className="mega-images">
                <img src="https://via.placeholder.com/150" alt="Lab" />
                <img src="https://via.placeholder.com/150" alt="Students" />
                <img src="https://via.placeholder.com/150" alt="Workshop" />
                <img src="https://via.placeholder.com/150" alt="Classroom" />
              </div>
            </div>
          </li>

          <li><a href="#">Campus</a></li>
          <li><a href="#">Department</a></li>
          <li><a href="#">Student Corner</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Insitution;
