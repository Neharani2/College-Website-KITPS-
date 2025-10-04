

import React from "react";
import "./App.css"; 
// project.css
import Carousels from "./studentcarousel";

const Student = () => {
  return (
  
    <>
      
     <div className="formula">
      <h1 style={{textAlign:"center",color:" #5d0929ff",fontSize:"40px" }}>Student Corner</h1>            
    </div> 




    <div className="rexy">
      <marquee  behavior="" direction=""><h3 className="mary">My Project Gallery </h3>  </marquee>
    </div>
    <div className="pintu">
      <div className="chinku">
    <Carousels/>
            
      </div>

    </div> 
    
    
       
   
    
   </>
  );
};

export default Student;







