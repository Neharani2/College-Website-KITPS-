

import React from "react"
import "./depart.css";
const Sports = () =>{
    return(

        <>
         <div className="departy">
        {/* <img
          src="https://tse4.mm.bing.net/th/id/OIP.3NbPLxps2cptfQgq1RFsMQHaEy?pid=Api&P=0&h=180"
          alt="Electronics & Communication Department"
          className="animated-img"
        /> */}
         <img
          src="https://www.shootershilllawntennisclub.co.uk/wp-content/uploads/2018/06/outdoor-tennis-1440x780-1.jpg"
          alt="Electronics & Communication Department"
          className="animated-img"
        />
      </div>

      <div className="kangna">
        <div className="sonnu">
       <h1 style={{color:" #5d0929ff"}}>Campus</h1><br></br>
       <h5>
        SPORTS@KITPS
       </h5><br></br><br></br>
       <p style={{textAlign:"justify"}}>
       The Sports committee believes in developing the overall personality of a person. It organizes inter and intra-college level football, cricket, basketball tournaments. For outdoor games KITPS has a huge playground with beautiful landscaping around it. A number of cricket and football tournaments both at Institute and Inter-institute level have already been hosted in the campus. Other outdoor games facilities available at KITPS are Volley Ball, Basket Ball and Lawn Tennis. KITPS has all the facilities for all indoor games including Table Tennis, Badminton, Billiards, Carom and Chess etc. The sports week is organized in each session where students participate with full enthusiasm.
       </p>
     
      

   {/* TABLE */}
   <div className="manassage">
  <table className="facility-table">
    <thead>
      <tr>
        <th>Outdoor Facilities</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Outdoor Facilities">Athletics (Track & Field) at Stadium Complex</td>
        <td data-label="Details">200m, 400m Track and Field</td>
      </tr>
      <tr>
        <td data-label="Outdoor Facilities">Badminton</td>
        <td data-label="Details">Two Courts</td>
      </tr>
      <tr>
        <td data-label="Outdoor Facilities">Basketball</td>
        <td data-label="Details">Two Courts</td>
      </tr>
      <tr>
        <td data-label="Outdoor Facilities">Cricket</td>
        <td data-label="Details">One Cricket Ground</td>
      </tr>
      <tr>
        <td data-label="Outdoor Facilities">Football</td>
        <td data-label="Details">Two Fields (One with grass)</td>
      </tr>
      <tr>
        <td data-label="Outdoor Facilities">Hockey</td>
        <td data-label="Details">Two Fields</td>
      </tr>
      <tr>
        <td data-label="Outdoor Facilities">Volleyball</td>
        <td data-label="Details">Two Courts with Flood light</td>
      </tr>
    </tbody>
  </table>
</div>






       
      </div>
      </div>
        
        </>
    )
}

export default Sports;