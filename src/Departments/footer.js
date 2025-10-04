
import React from "react"

  import { Link } from "react-router-dom";
const Footer=()=>{
    return(
        <>
{/* home.css m h ski css */}
         <div className="vaniya">
  <div className="rukku">
    <div className="boxy1">
     <h1>Social Media</h1>
     <img className="imhi" src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="" /><br></br><br></br>
      <img className="imhi" src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png" alt="" /><br></br><br></br>
      <img className="imhi" src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt="" /><br></br><br></br>
      <img className="imhi" src="https://cdn-icons-png.flaticon.com/128/4494/4494497.png" alt="" /><br></br><br></br>
      <img className="imhi" src="https://cdn-icons-png.flaticon.com/128/4187/4187272.png" alt="" /><br></br><br></br>
      
    </div>
    <div className="boxy1">
     <h1>Admissions</h1>
      <ul  className="palpari">
        <Link className="sole" to="/Facilities">
              {" "}
                <li >Facilities</li>
              {" "}
            </Link>
         <Link className="sole" to="/fees">
              {" "}
                <li >Fees</li>
              {" "}
            </Link>
            <Link className="sole" to="/Scholarship">
              {" "}
                <li >Scholarship</li>
              {" "}
            </Link>
            <Link className="sole" to="/Civil">
              {" "}
                <li >Civil Engineering</li>
              {" "}
            </Link>
            <Link className="sole" to="/Cse">
              {" "}
                <li >Computer Science $ Engineering</li>
              {" "}
            </Link>
            <Link className="sole" to="/Ece ">
              {" "}
                <li >Electronics & Communications </li>
              {" "}
            </Link>
            <Link className="sole" to="/Ite">
              {" "}
                <li >Information Technologies</li>
              {" "}
            </Link>
            <Link className="sole" to="/Mechanical">
              {" "}
                <li >Mechanical Engineering</li>
              {" "}
            </Link>
        
      </ul>
    </div>
    <div className="boxy1">
      <h1>Quick Links</h1>
      <ul className="palpari">

        <Link className="sole" to="/Insitute">
              {" "}
                <li > The Insitute</li>
              {" "}
            </Link>
            <Link className="sole" to="/Insitute">
              {" "}
                <li >History</li>
              {" "}
            </Link>
            <Link className="sole" to="/Mission">
              {" "}
                <li >Mission & Vision</li>
              {" "}
            </Link>
            <Link className="sole" to="/Culture">
              {" "}
                <li >Cultural Events</li>
              {" "}
            </Link>
            <Link className="sole" to="/Society">
              {" "}
                <li > Student Societies</li>
              {" "}
            </Link>
            <Link className="sole" to="/Sports">
              {" "}
                <li >Sports</li>
              {" "}
            </Link>
            <Link className="sole" to="/Hostal ">
              {" "}
                <li >Hostals </li>
              {" "}
            </Link>
            <Link className="sole" to="/Placementcell">
              {" "}
                <li >Placement Cell</li>
              {" "}
            </Link>
       
      </ul>
    </div>
    <div className="boxy1">
       <h1>Contact Us</h1>
      <p className="puddi"> Kothiwal Institute of Technology & Professional Studies,
Pachokra, Haridwar Road, Moradabad - 244 001 (U.P.) INDIA</p>
   <p   className="puddi">+91-0591-2479700, 2479707,</p>
  
   

    
        <p className="puddi">📞 Call <a style={{color:"white"}} href="tel:+916395933390">+916395933390 </a></p>
        
        <p className="puddi">💬 Whatsapp <a style={{color:"white"}}href="https://wa.me/6395933390" target="_blank" rel="noreferrer">+91 6395933390</a></p>
        <p className="puddi">Are you a college? Call us at <a style={{color:"white"}} href="tel:+91729000175">+91 6395933390</a></p><br></br>
        <button className="laiya-btn"  >Request a call back      </button>
        
    </div>   
  </div>
 <div className="cllii">
   <h5 style={{textAlign:"center",marginTop:"2%",color:"white"}}>© KITPS - 2016-23 - All rights reserved.</h5>
  
    </div>
  
  </div> 
   
        
        
        </>
    )
}


export default Footer;