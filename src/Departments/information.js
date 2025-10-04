import React from "react";
import "./depart.css";

const Ite = () => {
  return (
    <>
      {/* Banner Image */}
      <div className="departy">
        <img
          src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg"
          alt="Information Technology Department"
          className="animated-img"
        />
      </div>

      {/* Intro Section */}
      <div className="smart">
        <h1>Information Technology</h1>
        <p>
          The Information Technology Department is committed to achieving high
          academic standards and values, preparing IT graduates to meet global
          challenges. The department believes that understanding the nature of
          information and communication technologies is the cornerstone of
          economic development and plays a vital role in building India into a
          developed nation.
        </p>
        <p>
          The department attracts bright students from across the country by
          offering quality education in Information Technology, focusing on both
          theoretical foundations and practical applications.
        </p>
      </div>

      {/* Labs Section */}
      <div className="labs-section">
        <h2>Laboratories</h2>
        <div className="labs-grid">
          <div className="lab-card">
            <h3>Computer Centre</h3>
            <p>
              Open to all branches beyond institute hours, equipped with 30 Dell
              computers, high-speed leased line internet, and maintained by the
              IT department for institute-wide access.
            </p>
          </div>

          <div className="lab-card">
            <h3>Project Lab</h3>
            <p>
              Equipped with 30 Dell computers connected to a Xenon server.
              Supports multiple platforms like Red-hat Linux, Visual Studio,
              MATLAB, .NET, Oracle, and more. Students develop real-world
              projects under expert guidance.
            </p>
          </div>

          <div className="lab-card">
            <h3>System Programming Lab</h3>
            <p>
              Provides facilities to implement symbol tables, assemblers, macro
              processors, loaders, and text editors with server-based Dell
              computers.
            </p>
          </div>

          <div className="lab-card">
            <h3>Logic Design & Microprocessor Lab</h3>
            <p>
              Focuses on hardware logic design concepts and microprocessor
              training using modern computing infrastructure.
            </p>
          </div>

          <div className="lab-card">
            <h3>Data Structure & DBMS Lab</h3>
            <p>
              Students learn data structure algorithms using C language and
              develop in-depth DBMS skills. Equipped with software like Oracle,
              PL/SQL, and CodeGear C++ Builder.
            </p>
          </div>

          <div className="lab-card">
            <h3>Network Lab</h3>
            <p>
              Provides exposure to network topologies, socket programming, TCP,
              UDP, SMTP, FTP protocols, congestion control, and IPv4/IPv6
              implementation using LAN Trainer Kits.
            </p>
          </div>

          <div className="lab-card">
            <h3>Numerical Techniques & Software Engineering Lab</h3>
            <p>
              Students practice software engineering concepts like planning,
              modeling, cost estimation, and configuration management using CASE
              tools and applications such as Rational Rose and VB6.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ite;
