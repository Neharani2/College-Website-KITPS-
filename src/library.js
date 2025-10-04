
import React from "react";
import "./project"; 

const Library = () => {
  return (

  <>
   <div className="tinku">
        <img src="https://tse1.mm.bing.net/th/id/OIP.oAavSZ_C6hyeNSduzlspzAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />

       </div>
    <div className="library-section">
      {/* Title */}
      <h1 style={{color:" #5d0929"}}  className="rid-title">LIBRARY</h1>
      <p className="jin-subtitle">KITPS</p>

      {/* Description */}
      <p className="library-desc">
        The central library is double story central library spreads over a large
        area with seating capacity of more than 200 students. It is well
        furnished, illuminated and ventilated hall with separate staff reading
        room and is fully computerized. It has computerized collection of books,
        journals & other resources in Sciences, Engineering and Technology,
        Humanities, and Management ranging from printed books, e-books, back
        volumes, CDs/DVDs, video cassettes to audio cassettes. The Central
        Library subscribes to national and international journals in print and
        e-Journals.
      </p>

      {/* Info Cards */}
      <div className="library-stats">
        <div className="stat-card grey"> 
          <span>Total No. of Books</span> 
          <span className="count">14132</span>
        </div>
        <div className="stat-card light"> 
          <span>Total No. of Journals</span> 
          <span className="count">69</span>
        </div>
        <div className="stat-card green"> 
          <span>National</span> 
          <span className="count">42</span>
        </div>
        <div className="stat-card light"> 
          <span>International</span> 
          <span className="count">27</span>
        </div>
        <div className="stat-card blue"> 
          <span>CD / DVD</span> 
          <span className="count">522</span>
        </div>
      </div>
    </div>

    {/* 0345678 */}
    
    </>
  );
};

export default Library;
