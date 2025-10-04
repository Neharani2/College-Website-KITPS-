import React from "react";
import "./fees.css";

const Fees = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      branchSemester: e.target[0].value,
      aadhaar: e.target[1].value,
      rollNo: e.target[2].value,
      candidateName: e.target[3].value,
      dob: e.target[4].value,
      fatherName: e.target[5].value,
      address: e.target[6].value,
      contactNo: e.target[7].value,
      email: e.target[8].value,
      subjects: e.target[9].value,
    };

    try {
      const res = await fetch("http://localhost:5000/api/fees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      alert(data.message || "Submitted successfully");
    } catch {
      alert("Error submitting form");
    }
  };

  return (
    <>
      <div className="fees-container-unique">
        <div className="fees-image-unique">
          <img src="https://kothiwalinstitutetechnology.com/slider/images/slider1.jpg" alt="College" />
        </div>

        <div className="fees-table-unique">
          <h2>Course Fee Structure 2025-2026</h2>
          {/* table same as tumne diya tha */}
        </div>
      </div>

      {/* Form Section */}
      <div className="fees-wrapper-unique">
        <div className="fees-form-unique">
          <h2>Student Details Form Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group-unique"><label> Name of Branch & Semester</label><input type="text" /></div>
            <div className="form-group-unique"><label>Aadhaar No</label><input type="text" /></div>
            <div className="form-group-unique"><label>Roll No</label><input type="text" /></div>
            <div className="form-group-unique"><label>Name of Candidate</label><input type="text" /></div>
            <div className="form-group-unique"><label>Date of Birth</label><input type="date" /></div>
            <div className="form-group-unique"><label>Father's Name</label><input type="text" /></div>
            <div className="form-group-unique"><label>Address</label><textarea></textarea></div>
            <div className="form-group-unique"><label>Contact No</label><input type="text" /></div>
            <div className="form-group-unique"><label>Email ID</label><input type="email" /></div>
            <div className="form-group-unique"><label>Subjects Name</label><input type="text" /></div>
            <button type="submit" className="fees-btn-unique">Submit</button>
          </form>
        </div>
        <div className="fees-image-unique">
          <img src="https://universitykart.b-cdn.net/Content/upload/admin/xurelkmi.0g5.jpg" alt="student" />
        </div>
      </div>
    </>
  );
};

export default Fees;



// import React from "react";
// import "./fees.css";

// const Fees = () => {
//   return (
//     <>
//       <div className="fees-container-unique">
//         {/* Big Picture */}
//         <div className="fees-image-unique">
//           <img
//             src="https://kothiwalinstitutetechnology.com/slider/images/slider1.jpg"
//             alt="College"
//           />
//         </div>

//         {/* Fees Table */}
//         <div className="fees-table-unique">
//           <h2>Course Fee Structure 2025-2026</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>S.No</th>
//                 <th>Course</th>
//                 <th>Seats</th>
//                 <th>Fees (per year)</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td>Computer Science</td>
//                 <td>60</td>
//                 <td>₹35,000/-*</td>
//               </tr>
//               <tr>
//                 <td>2</td>
//                 <td>Electronics & Communication</td>
//                 <td>60</td>
//                 <td>₹35,000/-*</td>
//               </tr>
//               <tr>
//                 <td>3</td>
//                 <td>Civil Engineering</td>
//                 <td>60</td>
//                 <td>₹35,000/-*</td>
//               </tr>
//               <tr>
//                 <td>4</td>
//                 <td>Mechanical Engineering</td>
//                 <td>90</td>
//                 <td>₹35,000/-*</td>
//               </tr>
//             </tbody>
//           </table>

//           {/* Additional Fees Table */}
//           <h2>Other Fees</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>S.No</th>
//                 <th>Fee Type</th>
//                 <th>Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td>Registration Fees</td>
//                 <td>₹5,000</td>
//               </tr>
//               <tr>
//                 <td>2</td>
//                 <td>Admission Fees</td>
//                 <td>₹12,500</td>
//               </tr>
//               <tr>
//                 <td>3</td>
//                 <td>Examination Fees</td>
//                 <td>₹8,000</td>
//               </tr>
//               <tr>
//                 <td>4</td>
//                 <td>Bus Fees</td>
//                 <td>₹12,000</td>
//               </tr>
//               <tr>
//                 <td>5</td>
//                 <td>Hostel Fees</td>
//                 <td>₹10,000</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Form Section */}
     



//       <div className="fees-wrapper-unique">
//   <div className="fees-form-unique">
//     <h2>Student Details Form Registration</h2>
//     <form>
//       <div className="form-group-unique">
//         <label> Name of Branch & Semester</label>
//         <input type="text" placeholder="Enter Branch & Semester" />
//       </div>
//       <div className="form-group-unique">
//         <label>Aadhaar No</label>
//         <input type="text" placeholder="Enter Aadhaar No" />
//       </div>
//       <div className="form-group-unique">
//         <label>Roll No</label>
//         <input type="text" placeholder="Enter Roll No" />
//       </div>
//       <div className="form-group-unique">
//         <label>Name of Candidate</label>
//         <input type="text" placeholder="Enter Full Name" />
//       </div>
//       <div className="form-group-unique">
//         <label>Date of Birth</label>
//         <input type="date" />
//       </div>
//       <div className="form-group-unique">
//         <label>Father's Name</label>
//         <input type="text" placeholder="Enter Father's Name" />
//       </div>
//       <div className="form-group-unique">
//         <label>Address</label>
//         <textarea placeholder="Enter Address"></textarea>
//       </div>
//       <div className="form-group-unique">
//         <label>Contact No</label>
//         <input type="text" placeholder="Enter Contact Number" />
//       </div>
//       <div className="form-group-unique">
//         <label>Email ID</label>
//         <input type="email" placeholder="Enter Email" />
//       </div>
//       <div className="form-group-unique">
//         <label>Subjects Name</label>
//         <input type="text" placeholder="Enter Subjects" />
//       </div>
//       <button type="submit" className="fees-btn-unique">Submit</button>
//     </form>
//   </div>


//   <div className="fees-image-unique">
//     <img src="https://universitykart.b-cdn.net/Content/upload/admin/xurelkmi.0g5.jpg" alt="student" />
//   </div>
// </div> 

// {/* updated node.js form */}


// {/* updated node.js form */}


// {/* good */}

//  <div className="minki">
//   <h2 className="venture-heading">Our <span>Ventures</span></h2>
//   <div className="minki-cards">

//     <div className="minki-card">
//       <div className="minki-inner">
//         <div className="minki-front">
//           <img src="https://kothiwalinstitutetechnology.com/slider/images/slider1.jpg" alt="front" />
//           <div className="minki-overlay">MORADABAD  INSITUTE OF TECHNOLOGY (year of Estd. - 2009) </div>
//         </div>
//         <div className="minki-back">

//            <img src="https://kothiwalinstitutetechnology.com/slider/images/slider1.jpg" alt="front" />
//             <div className="minki-overlay">MORADABAD  INSITUTE OF TECHNOLOGY (year of Estd. - 2009) </div>
        
       
//         </div>
//       </div>
//     </div>

//     <div className="minki-card">
//       <div className="minki-inner">
//         <div className="minki-front">
//           <img src="https://tse4.mm.bing.net/th/id/OIP.PyLE4-cO1oLPIP-rqy_t7wHaFj?pid=Api&P=0&h=180" alt="front" />
//           <div className="minki-overlay">KITPS FACULTY OF PHARMACY (year of Estd. - 2009) </div>
//         </div>
//         <div className="minki-back">
//          <img src="https://kothiwalinstitutetechnology.com/slider/images/slider1.jpg" alt="front" />
//             <div className="minki-overlay">MORADABAD  INSITUTE OF TECHNOLOGY (year of Estd. - 2009) </div>
//         </div>
//       </div>
//     </div>

//     <div className="minki-card">
//       <div className="minki-inner">
//         <div className="minki-front">
//           <img src="https://tse2.mm.bing.net/th/id/OIP.jv5WoLJ3XCIfvpBeJUGNJQHaFj?pid=Api&P=0&h=180" alt="front" />
//           <div className="minki-overlay">KITPS COLLEGE OF PHARMACY (year of Estd. - 2012)</div>
//         </div>
//         <div className="minki-back">
//          <img src="https://kothiwalinstitutetechnology.com/slider/images/slider1.jpg" alt="front" />
//             <div className="minki-overlay">MORADABAD  INSITUTE OF TECHNOLOGY (year of Estd. - 2009) </div>
//         </div>
//       </div>
//     </div>

//     <div className="minki-card">
//       <div className="minki-inner">
//         <div className="minki-front">
//           <img src="https://media.getmyuni.com/azure/college-images-test/kothiwal-institute-of-technology-and-professional-studies-kitps-moradabad/b1bc0bfe76d54ebaa5f993dd43b1df99.jpeg" alt="front" />
//           <div className="minki-overlay">KITPS WORLD COLLEGE (year of Estd. - 2009)</div>
//         </div>
//         <div className="minki-back">
//           <img src="https://kothiwalinstitutetechnology.com/slider/images/slider1.jpg" alt="front" />
//             <div className="minki-overlay">MORADABAD  INSITUTE OF TECHNOLOGY (year of Estd. - 2009) </div>
//         </div>
//       </div>
//     </div>

//   </div>
// </div>

// {/* good */}

//     </>
//   );
// };

// export default Fees;


