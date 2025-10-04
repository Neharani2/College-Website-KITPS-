


import React from "react";
import { Link } from "react-router-dom";
import Slider from "./slider";
import './home.css';
import Part1 from "./Departments/1carouselspart";
import Moli from "./Moli";
const Home = () => {
  return (
    <>
<div className="ayt">
<Part1/>
</div>
       <div className="mout-y">
        <div className="you">
          <div className="to">
            <img
              className="j"
              src="https://kothiwalinstitutetechnology.com/wp-content/uploads/sites/7/2015/02/news3.jpg"
              alt=""/>
           </div> <br></br><br></br><br></br>
          <div className="also">
            <h1 style={{ color: "#5d0929ff" }}>PLACEMENT</h1><br></br>
            <p
              style={{
                textAlign: "justify",
                paddingLeft: "5px",
                paddingRight: "5px",
              }}
            >
              Student’s employment is facilitated by the placement cell.
              Placement cell invites companies for Campus Drives, arranges off
              campus drives at companies nodal centers.
            </p><br></br>

            <Link to="/about">
              {" "}
              <h5 style={{ color: "#5d0929ff" }}>view more</h5>{" "}
            </Link>
          </div>
        </div>
        <div className="dd">
          <div className="hu">
            <img
              className="imy"
              src="https://kothiwalinstitutetechnology.com/wp-content/uploads/sites/7/2015/02/news1.jpg"
              alt=""
            />
            
          </div>
          <br></br><br></br>
          <h1 style={{color:"#5d0929ff",paddingRight:"20%"}}><b>PROJECTS</b></h1>
          
        </div>
        <div className="di">
          <div className="do">
            <img
              className="o"
              src="https://kothiwalinstitutetechnology.com/wp-content/uploads/sites/7/2015/02/news4.jpg"
              alt=""
            />
          </div><br></br>

          <h1 style={{ color: "#5d0929ff" }}>LIBRARY</h1><br></br>
          <p
            style={{
              textAlign: "justify",
              paddingLeft: "5px",
              paddingRight: "5px",
            }}
          >
            The central library is double story central library spreads over a
            large area with seating capacity of more than 200 students.
          </p><br></br>

         <Link to="/library">
              {" "}
              <h5 style={{ color: "#5d0929ff" }}>view more</h5>{" "}
            </Link>
        </div>
      </div>
      {/* part 222222 */}
      
      
     <div className="secondpart">
        <div className="elart">
          
          <div className="suity">
          <div className="taniya">
         
          <img  src="https://images.collegedunia.com/public/college_data/images/campusimage/1500275412labshf.JPG?mode=stretch" alt="" />
          </div>
          <div className="souii"><br></br>
            <h1 style={{ color: "#5d0929ff" }} >SOFTWARE ENGINEERS</h1><br></br>
            <p>KITPS initiative to set up this ‘Skills Development Program’ to appendage the B. Tech curriculum with the campus based Personality Development Program, which provides a unique opportunity for all the students of the college to develop their software skills, update their communication and presentation skills</p>
            <Link to="/student">
              {" "}
              <h5 style={{ color: "#5d0929ff" }}>view more</h5>{" "}
            </Link>
           </div>        
          </div>
           
             {/* 7890- */}
             
            <div className="chklll">
              <div className="swary">
               <p>
                An Engineering projects are the Team projects. Final year Engineering projects, which they may have to create as a aspect of their educational curriculum.
               </p>
          
                <Link to="/Student">
              {" "}
              <h5 style={{ color: "#5d0929ff" }}>view more</h5>{" "}
            </Link><br></br>
              </div>
              <div className="gharyo">
                     <img src="https://www.kothiwalinstitutetechnology.com/wp-content/uploads/sites/7/2016/02/menu_campusfacility.jpg" alt="" />
              </div><br></br>
              <h1 style={{color:" #5d0929ff "}}>CAMPUS LIFE</h1><br></br>
              <p style={{textAlign:"justify"}}>
                Student’s employment is facilitated by the placement cell. Placement cell invites companies for Campus Drives, arranges off campus drives at companies nodal centers.
              </p><br></br>
               {/* <h4 style={{color:" #5d0929ff"}}>view more</h4> */}
                <Link to="/Society">
              {" "}
              <h5 style={{ color: "#5d0929ff" }}>view more</h5>{" "}
            </Link>

            </div>
           
           {/* 456789 */}
           
            
       
          <div className="queve">
            <div className="quence">
              <img src="https://www.kothiwalinstitutetechnology.com/wp-content/uploads/sites/7/2016/02/menu_stdntsocieties.jpg" alt="" />

            </div><br></br>
          
            
            <div className="child">
           <h1 style={{color:" #5d0929ff "}}>SCHOLARSHIP</h1><br></br>
           <ul>
            <li>Scholarship for economically weaker students</li>
            <li>Special scheme for SC/ST students  </li>
            <li> Scholarship for meritorious students</li>
            <li>Book bank scheme</li>
           </ul>
           <br></br>
               <Link to="/scholarship">
              {" "}
              <h5 style={{ color: "#5d0929ff" }}>view more</h5>{" "}
            </Link>
            </div>
            

          </div>
        
          
      

        </div>
     </div><br></br><br></br>

     {/* 3456789 */}
       {/* home.css */}
    <div className="karishma">
      <h1 style={{textAlign:'center',fontSize:"50px"}}> <span style={{color:'#5d0929ff'}}>KITPS</span> <span style={{color:'BLUE'}}>MORADABAD</span> </h1><br></br><br></br>

      <p style={{textAlign:"justify",paddingLeft:"20%",paddingRight:"20%",fontFamily:"initial",fontSize:"26px"}}>KITPS stands for “Motivation, Innovation and Transformation” which symbolizes the true meaning of education and we literally meet these. Our Campus placement is 100% of registered students in leading companies of the world with a very high pay package.</p>

    <div className="eyy">

      <Link to="/About">
              {" "}

               <button className="dunky">MORE ABOUT KITPS </button>
              {" "}
            </Link>

     

    </div>

    </div><br></br>
       
     {/* 547968798092u */}
      {/* moli.cssssss */}
     <div className="slidery">
        
      <Moli/>
      
     </div>

      <div className="india">
      {/* <div className="idia"> */}

        <div className="left">
          <div className="kaluo">
            <h1 style={{textAlign:"center",color:"blue"}}>“Words From the Director Sir”</h1><br></br>

            <p>
              “Our vision is to create future leaders who manage and create powerful organization in the emerging  corporate landscape.”<br></br><br></br>

Various pedagogy tools help our students develop not only a holistic business perspective but an ability to seize opportunities in a competitive business environment.
            </p>


          </div>
          <div className="kaluoo">
            <img src="https://kothiwalinstitutetechnology.com/wp-content/uploads/sites/7/2016/02/menu_director.jpg" alt="" />


          </div>

        </div>



         <div className="right">
          <div className="sunder">
           <h2 style={{textAlign:"center",fontSize:"40px"}}>  <span style={{color:"#5d0929ff"}}>OUR</span> <span style={{color:"blue"}}>AFFILIATIONS</span> </h2><br></br>
        <p style={{textAlign:"justify",paddingLeft:"4%",paddingRight:"4%",fontSize:"20px",color:'green'}}>
          KITPS Group of Institutions strives to create technically competent
          professionals who can contribute productively towards the betterment
          of the Industry and the Society as a whole.
        </p>

          </div>
         <div className="kaluoooo">


             <div className="next">
       

        <div className="carousel">
          <div className="carousel-track">
            <div className="carousel-card">
              <img
                src="https://kothiwalinstitutetechnology.com/slider/images/slider3.jpg"
                alt="naac"
              />
            </div>
            <div className="carousel-card">
              <img
                src="https://kothiwalinstitutetechnology.com/placement2024.jpg"
                alt="aicte"
              />
            </div>
            <div className="carousel-card">
              <img
                src="https://www.mitmoradabad.edu.in/wp-content/uploads/2023/01/aktu.jpg"
                alt="aktu"
              />
            </div>
            <div className="carousel-card">
              <img
                src="https://www.mitmoradabad.edu.in/wp-content/uploads/2023/03/naac.jpg"
                alt="up-govt"
              />
            </div>

           
            <div className="carousel-card">
              <img
                src="https://www.mitmoradabad.edu.in/wp-content/uploads/2023/03/ISTE.png"
                alt="naac"
              />
            </div>
           
            <div className="carousel-card">
              <img
                src="https://www.mitmoradabad.edu.in/wp-content/uploads/2023/01/aicte.jpg"
                alt="aktu"
              />
            </div>
           
          </div>
        </div>
      </div>
     
           

          </div> 
           

        </div>
         
        {/* <div className="box1">                 
        
                    
                    <input className="forrm" type="text" placeholder="Name"></input>
                     
                    <input className="forrm"  type="number" placeholder="Number"></input>
                    
                    <input className="forrm"  type="email" placeholder="Email"></input> 
                    <textarea  className="forryy"   placeholder="Message"></textarea><br></br>
                    
                   
                    <button className="formiii" >Send Now</button>
                    
                         
                 
        
          </div>  */}
         {/* <div className="box2">

        </div> */}

      </div>
     {/* </div> */}


      {/* 345678 good */}
       {/* home.css */}
       <div className="minki">
  <h2 className="venture-heading"><span style={{color:"#5d0929ff"}}>OUR</span>  <span>Ventures</span></h2>
  <div className="minki-cards">

    <div className="minki-card">
      <div className="minki-inner">
        <div className="minki-front">
          <img src="https://kothiwalinstitutetechnology.com/slider/images/slider1.jpg" alt="front" />
          <div className="minki-overlay">MORADABAD  INSITUTE OF TECHNOLOGY (year of Estd. - 2009) </div>
        </div>
        <div className="minki-back">

           <img src="https://kothiwalinstitutetechnology.com/slider/images/slider1.jpg" alt="front" />
            <div className="minki-overlay">MORADABAD  INSITUTE OF TECHNOLOGY (year of Estd. - 2009) </div>
        
       
        </div>
      </div>
    </div>

    <div className="minki-card">
      <div className="minki-inner">
        <div className="minki-front">
          <img src="https://tse4.mm.bing.net/th/id/OIP.PyLE4-cO1oLPIP-rqy_t7wHaFj?pid=Api&P=0&h=180" alt="front" />
          <div className="minki-overlay">KITPS FACULTY OF PHARMACY (year of Estd. - 2009) </div>
        </div>
        <div className="minki-back">
         <img src="https://kothiwalinstitutetechnology.com/slider/images/slider1.jpg" alt="front" />
            <div className="minki-overlay">MORADABAD  INSITUTE OF TECHNOLOGY (year of Estd. - 2009) </div>
        </div>
      </div>
    </div>

    <div className="minki-card">
      <div className="minki-inner">
        <div className="minki-front">
          <img src="https://tse2.mm.bing.net/th/id/OIP.jv5WoLJ3XCIfvpBeJUGNJQHaFj?pid=Api&P=0&h=180" alt="front" />
          <div className="minki-overlay">KITPS COLLEGE OF PHARMACY (year of Estd. - 2012)</div>
        </div>
        <div className="minki-back">
         <img src="https://kothiwalinstitutetechnology.com/slider/images/slider1.jpg" alt="front" />
            <div className="minki-overlay">MORADABAD  INSITUTE OF TECHNOLOGY (year of Estd. - 2009) </div>
        </div>
      </div>
    </div>

    <div className="minki-card">
      <div className="minki-inner">
        <div className="minki-front">
          <img src="https://media.getmyuni.com/azure/college-images-test/kothiwal-institute-of-technology-and-professional-studies-kitps-moradabad/b1bc0bfe76d54ebaa5f993dd43b1df99.jpeg" alt="front" />
          <div className="minki-overlay">KITPS WORLD COLLEGE (year of Estd. - 2009)</div>
        </div>
        <div className="minki-back">
          <img src="https://kothiwalinstitutetechnology.com/slider/images/slider1.jpg" alt="front" />
            <div className="minki-overlay">MORADABAD  INSITUTE OF TECHNOLOGY (year of Estd. - 2009) </div>
        </div>
      </div>
    </div>

  </div>
</div>

      {/* 345678 good */}
      
   
    </>
  );
};

export default Home;
