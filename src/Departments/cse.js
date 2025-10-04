
// import React from "react";
// import "./depart.css";
// const Cse=()=>{
//     return(
//         <>


//         </>
//     )
// }

// export default Cse;
import React from "react";
import "./depart.css";

const Cse = () => {
  return (
    <>
      {/* Banner Section */}
      <div className="departy">
        <img
          src="https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg"
          alt="Computer Science Department"
          className="animated-img"
        />
      </div>

      {/* About Section */}
      <div className="smart">
        <h1>Computer Science & Engineering</h1>
        <p>
          Computer Science & Engineering Department laboratories are equipped
          with more than 200 workstations and high-speed servers with all the
          required software and peripherals as per Dr. A.P.J.A.K. Technical
          University syllabus. All nodes are connected to internet through high
          speed dedicated lease line.
        </p>
        <p>
          Equipped with state-of-the-art facilities, the lab acts as a research
          ground for the young technocrats of our college by providing them with
          the latest hardware and software. Our laboratories have excellent
          facilities enabling efficient learning in areas of Internet
          Programming, Database Management, Operating Systems, Microprocessor,
          Object-Oriented Programming, Computer Networks, Software Engineering
          and Testing.
        </p>
      </div>

      {/* Labs Section */}
      <div className="labs-section">
        <h2>Laboratories</h2>
        <div className="labs-grid">
          <div className="lab-card">
            <h3>Computer Centre</h3>
            <p>
              Open to all students beyond institute hours. Equipped with 30 Dell
              computers with latest configurations, connected with 20 Mbps BSNL
              optical fiber leased line.
            </p>
          </div>

          <div className="lab-card">
            <h3>Project Lab</h3>
            <p>
              Equipped with 30 Dell computers connected to Xenon server.
              Supports multiple platforms such as Linux, Visual Studio, MATLAB,
              .NET, Turbo C/C++, Java, PL/SQL, Oracle 11G, and more. Students
              develop real-world projects under faculty guidance.
            </p>
          </div>

          <div className="lab-card">
            <h3>System Programming Lab</h3>
            <p>
              Contains 30 Dell systems connected to server. Students implement
              symbol tables, assemblers, macro processors, loaders, and text
              editors for hands-on learning of system software.
            </p>
          </div>

          <div className="lab-card">
            <h3>Logic Design & Computer Organization Lab</h3>
            <p>
              Provides hands-on training with microprocessor kits and digital
              design experiments to understand hardware-level concepts.
            </p>
          </div>

          <div className="lab-card">
            <h3>Data Structure & DBMS Lab</h3>
            <p>
              Students implement algorithms in C language and gain in-depth
              knowledge of DBMS. Equipped with Oracle 11G, PL/SQL, and
              CodeGear C++ Builder Pro.
            </p>
          </div>

          <div className="lab-card">
            <h3>Network Lab</h3>
            <p>
              Focuses on network topologies, socket programming, and protocols
              (TCP, UDP, SMTP, FTP). Students learn congestion control,
              IPv4/IPv6, and implement programs on LAN Trainer Kits.
            </p>
          </div>

          <div className="lab-card">
            <h3>Numerical Techniques & Software Engineering Lab</h3>
            <p>
              Students solve problems using CASE tools for planning, cost
              estimation, modeling, and configuration management. Tools like
              Rational Rose and VB6 are used for real-time applications.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cse;
