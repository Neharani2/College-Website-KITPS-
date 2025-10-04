import React from "react";

    import { Link } from "react-router-dom";
import navdata from "./data";
const Nav =() => {
 

    return (
        <>
         <div className="pl-pl">
          <h1 style={{textAlign:"center",color:"white",fontSize:"50px"}}><b>Kothiwal Institute of Technology and Professional Studies - KITPS - Courses     </b>  
            </h1>
             
             <div className="btn">
               <Link  to="/Signup ">
              {" "}
               <button className="buttiony">LOGIN</button>
              {" "}
            </Link>
                {/* <button className="buttiony">LOGIN</button> */}
             </div>
          </div>

        <div className="main">
         
        <div className="nav-logo">
          
           <img className="lv" src="https://www.targetadmission.com/img/logos/1791208389.png" alt="" />
        </div>

        <div className="nav-data">
        {navdata.map((data) => {
        return (
          <>
          
            <Link className="nav-link" to={data.path}>{data.name}</Link>
          </>
        );
      })}
        </div>

        </div>




        
        {navdata.map((data) => {
        return(
            <>
           
            </>
      );
    })}
        
        </>
    )

    }

  
    

export default Nav;

