

// import React from "react";
// import "./teacher.css";

// const Faculty = () => {
//   return (
//     <>
//     {/* principal section */}
//     <div className="arreye">

   
// <div className="big_member">
//   <h1 className="guide-title">
//     Our Guide <span className="lightbulb">💡</span>
//   </h1>

//   <p className="guide-intro">
//     "It gives me immense pleasure to welcome you all to our ERP Portal. This platform has been designed to bring transparency, efficiency, and accessibility to our academic and administrative processes. Our goal is to empower students, faculty, and parents by providing easy access to information and resources."
//   </p>

//   <div className="guide-card">
//     <div className="guide-img">
//       <img
//         src="https://codequest-frontend.onrender.com/assets/principal-B-p2rBf5.jpg"
//         alt="Principal"
//       />
//       <h3>Dr Atul Rai (Principal)</h3>
//       <div className="social-icons">
//         <a href="#"><i className="fa-brands fa-instagram"></i></a>
//         <a href="#"><i className="fa-brands fa-linkedin"></i></a>
//         <a href="#"><i className="fa-brands fa-facebook"></i></a>
//         <a href="#"><i className="fa-solid fa-up-right-from-square"></i></a>
//       </div>
//     </div>
//      </div><br></br>

//     <div className="guide-text">
//       <p>
//         <span className="bullet">▶</span> "At KITPS, we believe in nurturing talent and building future leaders. This ERP system is a step forward towards digital transformation, enabling us to provide quality education and better academic support to our students."
//         <br />
//         <span className="author">— Dr Atul Rai, [Principal of KITPS]</span>
//       </p>

//       <hr />

//       <p>
//         <span className="bullet">▶</span> I would also like to take this opportunity to commend our exceptional
//         development team. Their dedication and innovative spirit have been instrumental in bringing this vision 
//         to life, ensuring that our students receive the best possible tools to succeed in their coding endeavors. 
//         <span className="readmore"> read more...</span>
//       </p>
//     </div>
//   </div>
// </div><br></br>
// {/* our vision and metion */}

//  <div className="vinny">
//   <h2 className="vinny-title">Our Vision & Mission</h2>
//   <div className="vinny-container">
//     <div className="vinny-card">
//       <p>Provide a dynamic platform for students to showcase and hone their skills.</p>
//     </div>
//     <div className="vinny-line"></div>
//     <div className="vinny-card">
//       <p>Foster a community where students can engage, compete, and learn together.</p>
//     </div>
//     <div className="vinny-line"></div>
//     <div className="vinny-card">
//       <p>Expand access to quality education and opportunities worldwide.</p>
//     </div>
//   </div>
// </div>


//    {/* faculty section */}
//    <div className="menner">

  
//       <div className="faculty-section">
//         <h2 className="faculty-title">Our Faculty</h2>
//         <p className="faculty-subtitle">
//           Meet our experienced and dedicated faculty members
//         </p>

//         <div className="faculty-grid">
//           <div className="faculty-card">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
//               alt="CSE Faculty"
//             />
//             <h3>Computer Science</h3>
//             <p>10 Professors</p>
//             <p>15 Assistant Professors</p>
//           </div>

//           <div className="faculty-card">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
//               alt="Mechanical Faculty"
//             />
//             <h3>Mechanical</h3>
//             <p>8 Professors</p>
//             <p>12 Assistant Professors</p>
//           </div>

//           <div className="faculty-card">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png"
//               alt="Electronics Faculty"
//             />
//             <h3>Electronics</h3>
//             <p>6 Professors</p>
//             <p>10 Assistant Professors</p>
//           </div>

//           <div className="faculty-card">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/3135/3135765.png"
//               alt="Civil Faculty"
//             />
//             <h3>Civil</h3>
//             <p>7 Professors</p>
//             <p>11 Assistant Professors</p>
//           </div>
//         </div>
//       </div>
//        </div>

       
      
//     </>
//   );
// };

// export default Faculty;


// update code


import React from "react";
import "./teacher.css";

const Faculty = () => {
  return (
    <div className="faculty-page">
      {/* principal section */}
      <div className="arreye">
        <div className="big_member">
          <h1 className="guide-title">
            Our Guide <span className="lightbulb">💡</span>
          </h1>

          <p className="guide-intro">
            "It gives me immense pleasure to welcome you all to our ERP Portal. ..."
          </p>

          <div className="guide-card">
            <div className="guide-img">
              <img
                src="https://codequest-frontend.onrender.com/assets/principal-B-p2rBf5.jpg"
                alt="Principal"
              />
              <h3>Dr Atul Rai (Principal)</h3>
              <div className="social-icons">
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i className="fa-solid fa-up-right-from-square"></i></a>
              </div>
            </div>
          </div>

          <div className="guide-text">
            <p>
              <span className="bullet">▶</span> "At KITPS, we believe in nurturing talent ..."
              <br />
              <span className="author">— Dr Atul Rai, [Principal of KITPS]</span>
            </p>
            <hr />
            <p>
              <span className="bullet">▶</span> I would also like to take this opportunity...
              <span className="readmore"> read more...</span>
            </p>
          </div>
        </div>
      </div>

      {/* vision & mission */}
      <div className="vinny">
        <h2 className="vinny-title">Our Vision & Mission</h2>
        <div className="vinny-container">
          <div className="vinny-card">
            <p>Provide a dynamic platform for students...</p>
          </div>
          <div className="vinny-line"></div>
          <div className="vinny-card">
            <p>Foster a community where students...</p>
          </div>
          <div className="vinny-line"></div>
          <div className="vinny-card">
            <p>Expand access to quality education...</p>
          </div>
        </div>
      </div>

      {/* faculty */}
      <div className="menner">
        <div className="faculty-section">
          <h2 className="faculty-title">Our Faculty</h2>
          <p className="faculty-subtitle">
            Meet our experienced and dedicated faculty members
          </p>

          <div className="faculty-grid">
            <div className="faculty-card">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="CSE Faculty"/>
              <h3>Computer Science</h3>
              <p>10 Professors</p>
              <p>15 Assistant Professors</p>
            </div>
            <div className="faculty-card">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" alt="Mechanical Faculty"/>
              <h3>Mechanical</h3>
              <p>8 Professors</p>
              <p>12 Assistant Professors</p>
            </div>
            <div className="faculty-card">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png" alt="Electronics Faculty"/>
              <h3>Electronics</h3>
              <p>6 Professors</p>
              <p>10 Assistant Professors</p>
            </div>
            <div className="faculty-card">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135765.png" alt="Civil Faculty"/>
              <h3>Civil</h3>
              <p>7 Professors</p>
              <p>11 Assistant Professors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
