import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    if (!form.name || !form.email || !form.message) {
      setErrorMsg("Name, email and message are required.");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Submission failed");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      setErrorMsg("Network error. Try again later.");
      setStatus("error");
    }
  };

  return (
    <>
      <div className="many">
        <h1>Contact Us</h1>
        <p>Kothiwal Institute of Technology & Professional Studies, Pachokra, Haridwar Road, Moradabad</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h1 style={{ color: " #5d0929ff" }}>Contact Us</h1>
          <p>Fill out the form below to get in touch with us directly.</p>
          <div className="info-details">
            <p>📍 Kothiwal Institute, Moradabad</p>
            <p>📞 +91-0591-2479700 / 2479707</p>
            <p>📧 kitps_mbd@kothiwalinstitutetechnology.com</p>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} />
            <input name="phone" type="text" placeholder="Phone" value={form.phone} onChange={handleChange} />
            <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
            <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} />
            <button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "SUBMIT"}
            </button>
          </form>
          {status === "success" && <p style={{ color: "green" }}>Message sent!</p>}
          {status === "error" && <p style={{ color: "red" }}>{errorMsg}</p>}
        </div>
      </div>
    </>
  );
};

export default Contact;




// import React, { useState } from "react";

// const Contact = () => {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     message: "",
//   });
//   const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
//   const [errorMsg, setErrorMsg] = useState("");

//   const handleChange = (e) => {
//     setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('loading');
//     setErrorMsg('');

//     // Basic client-side validation
//     if (!form.name || !form.email || !form.message) {
//       setErrorMsg("Name, email and message are required.");
//       setStatus('error');
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:5000/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setErrorMsg(data.error || "Submission failed");
//         setStatus('error');
//         return;
//       }

//       setStatus('success');
//       setForm({ name: "", phone: "", email: "", message: "" });
//     } catch (err) {
//       console.error(err);
//       setErrorMsg("Network error. Try again later.");
//       setStatus('error');
//     }
//   };

//   return (
//     <>
//       <div className="many">
//         <h1>Contact Us</h1>
//         <p>
//           Kothiwal Institute of Technology & Professional Studies, Pachokra,
//           Haridwar Road, Moradabad - 244 001 (U.P.) INDIA
//         </p>
//       </div>

//       <div className="contact-container">
//         <div className="contact-info">
//           <h1 style={{ color: " #5d0929ff" }}>Contact Us</h1>
//           <p>
//             Fill out the form below to get in touch with us directly. Our team
//             will get back to you as soon as possible to assist you with your
//             inquiry.
//           </p>

//           <div className="info-details">
//             <p>
//               📍 Kothiwal Institute of Technology & Professional Studies,
//               Pachokra, Haridwar Road, Moradabad - 244 001 (U.P.) INDIA
//             </p>
//             <p>📞 +91-0591-2479700 / 2479707 / 9897868221 </p>
//             <p>📞 6395933390</p>
//             <p>📧 kitps_mbd@kothiwalinstitutetechnology.com</p>
//           </div>
//         </div>

//         <div className="contact-form">
//           <form onSubmit={handleSubmit}>
//             <input
//               name="name"
//               type="text"
//               placeholder="Name"
//               value={form.name}
//               onChange={handleChange}
//             />
//             <input
//               name="phone"
//               type="text"
//               placeholder="Phone Number"
//               value={form.phone}
//               onChange={handleChange}
//             />
//             <input
//               name="email"
//               type="email"
//               placeholder="Email Id"
//               value={form.email}
//               onChange={handleChange}
//             />
//             <div className="guv">
//               <textarea
//                 name="message"
//                 placeholder="Message"
//                 value={form.message}
//                 onChange={handleChange}
//               />
//             </div>

//             <button type="submit" disabled={status === 'loading'}>
//               {status === 'loading' ? 'Sending...' : 'SUBMIT'}
//             </button>
//           </form>

//           {status === 'success' && <p style={{ color: 'green' }}>Message sent! We will contact you soon.</p>}
//           {status === 'error' && <p style={{ color: 'red' }}>Error: {errorMsg}</p>}
//         </div>
//       </div>

//       {/* the rest of your laiay block */}
//       <div className="laiya">
//         <div className="laiya-content">
//           <div className="laiya-text">
//             <h1>
//               Take The First Step Towards
//               <br />
//               Your Dream College.
//             </h1>
//             <p>
//               Enquire now at <b>Colleges18.com</b> for custom guidance from our
//               education consultants!
//             </p>

//             <button className="laiya-btn">Request a call back →</button>

//             <div className="laiya-contacts">
//               <p>
//                 📞 Call <a href="tel:+916395933390">+916395933390 </a>
//               </p>

//               <p>
//                 💬 Whatsapp{" "}
//                 <a
//                   href="https://wa.me/6395933390"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   +91 6395933390
//                 </a>
//               </p>
//               <p>
//                 Are you a college? Call us at{" "}
//                 <a href="tel:+91729000175">+91 6395933390</a>
//               </p>
//             </div>
//           </div>

//           <div className="laiya-image">
//             <img
//               src="https://kothiwalinstitutetechnology.com/slider/images/slider3.jpg"
//               alt="Student"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;
