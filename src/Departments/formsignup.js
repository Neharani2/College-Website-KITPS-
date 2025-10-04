import React, { useState } from "react";
import "./formsignup.css";

const Signup = () => {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmPassword, SetConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        try {
          const res = await fetch("http://localhost:5000/api/users/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
          });
          const data = await res.json();
          alert(data.message || "Signup successful");
        } catch {
          alert("Error submitting signup form");
        }
      } else {
        alert("ERR : password & confirmPassword must match!");
      }
    } else {
      alert("All Fields are Mandatory");
    }
  };

  return (
    <div className="back">
      <form onSubmit={handleSubmit}>
        <p className="heading">Sign Up</p>
        <div><p className="fieldName">Name</p><input type="text" onChange={(e)=>SetName(e.target.value)} /></div>
        <div><p className="fieldName">Email</p><input type="email" onChange={(e)=>SetEmail(e.target.value)} /></div>
        <div><p className="fieldName">Password</p><input type="password" onChange={(e)=>SetPassword(e.target.value)} /></div>
        <div><p className="fieldName">Confirm Password</p><input type="password" onChange={(e)=>SetConfirmPassword(e.target.value)} /></div>
        <button className="bttnm">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;


// import React, { useState } from "react";
// import "./formsignup.css";

// const Signup = () =>{

//   const [name, SetName] = useState();
//    const [email, SetEmail] = useState();
//    const [password, SetPassword] = useState();
//    const [confirmPassword, SetConfirmPassword] = useState();

//    console.log(name);
//    console.log(email);
//   //  handleSubmit se sign per click kro refresh ho rha h ese avoid krne ke liye .(event.pre...
  
//     const handleSubmit = (event)=>{
//       event.preventDefault();
//       if(name && email && password && confirmPassword){
        
//         if(password === confirmPassword){
//           alert("sign up successfully")

//         }else{
//           alert("ERR : password & confirmpassword Must be save !")
//         }
//       }else(
//         alert("All Fields are Mandatory")
//       )

//     }


//     return(
//         <>
//         <div className="back">
//         <div>
//        <form onSubmit={handleSubmit}>

//         <p className="heading">Sign Up</p>
//        <div>
//        <p className="fieldName">Name</p>
//        <input type="text" onChange={(event)=>SetName(event.currentTarget.value)}/>
//        <p className={name?"data":"noData"}>{name? "" : "Name is required"}</p>
//        </div>


//         <div>
//        <p className="fieldName">Email</p>
//        <input type="email" onChange={(event)=>SetEmail(event.currentTarget.value)}/>
//        <p className={email?"data":"noData"}>{email? "" : "Email is required"}</p>
//        </div>


//         <div>
//        <p className="fieldName">Passward</p>
//        <input type="password" onChange={(event)=>SetPassword(event.currentTarget.value)}/>
//        <p className={password?"data":"noData"}>{password? "" : "password is required"}</p>
//        </div>

//         <div>
//        <p className="fieldName"> Confirm Passward</p>
//        <input type="password" onChange={(event)=>SetConfirmPassword(event.currentTarget.value)}/>
//        <p className={confirmPassword?"data":"noData"}>{confirmPassword? "" : "Confirm password is required"}</p>
//        </div>

//          <div>
//           <button className="bttnm">Sign Up</button>
//          </div>
//        </form>
//        </div>
//          </div>
//         </>
//     )
// }

// export default Signup;
