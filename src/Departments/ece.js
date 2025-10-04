import React from "react";
import "./depart.css";

const Ece = () => {
  return (
    <>
      {/* Top Banner Image */}
      <div className="departy">
        <img
          src="https://i.pinimg.com/originals/a2/e7/6c/a2e76c031098d522e8a2039e0e972a5e.jpg"
          alt="Electronics & Communication Department"
          className="animated-img"
        />
      </div>

      {/* Intro Section */}
      <div className="smart">
        <h1>Electronics & Communication Engineering</h1>
        <p>
          The Electronics & Communication Engineering branch represents one of
          the fastest growing technology areas in view of exponential growth
          taking place in communication networks across the globe. The
          department is organized with the latest developments in terms of
          curriculum, well-qualified faculty, and state-of-the-art laboratories.
          It conducts the B.Tech. course in Electronics & Communication
          Engineering, which started in the academic session 2009-2010 with an
          intake of 60 students.
        </p>
        <p>
          The department also has its technical society which organizes quizzes,
          technical seminars, mock interviews, aptitude tests, and paper
          presentations. Additionally, seminars and workshops are conducted to
          help students become successful professionals.
        </p>
      </div>

      {/* Labs Section */}
      <div className="labs-section">
        <h2>Laboratories</h2>
        <div className="labs-grid">
          <div className="lab-card">
            <h3>Basic Electronics Lab</h3>
            <p>
              Helps students enhance their knowledge about various electronics
              equipments, both passive as well as active.
            </p>
          </div>

          <div className="lab-card">
            <h3>Digital Electronics Lab</h3>
            <p>
              Fully equipped with C.R.O., Multimeters, Signal Generators, and
              other instruments required for digital experiments.
            </p>
          </div>

          <div className="lab-card">
            <h3>Analog & Digital Communication Lab</h3>
            <p>
              Equipped with Digital Storage Oscilloscopes, CROs, Function
              Generators, and kits for implementing communication circuits and
              techniques.
            </p>
          </div>

          <div className="lab-card">
            <h3>Microwave & Optical Fiber Lab</h3>
            <p>
              Features microwave benches with Klystron and Gunn diode sources,
              enabling analysis of couplers, tees, circulators, and isolators.
            </p>
          </div>

          <div className="lab-card">
            <h3>Microprocessor Lab</h3>
            <p>
              Provides hands-on training on programming and interfacing with
              microprocessors (8085, 8086) and microcontrollers (8051).
            </p>
          </div>

          <div className="lab-card">
            <h3>Digital Signal Processing Lab</h3>
            <p>
              Equipped with MATLAB for computationally intensive tasks,
              simulations, and DSP algorithm implementations.
            </p>
          </div>

          <div className="lab-card">
            <h3>Electronics Circuit Design Lab</h3>
            <p>
              Focuses on design-oriented projects using analog/digital building
              blocks, circuit design, and filter design.
            </p>
          </div>

          <div className="lab-card">
            <h3>Analog Integrated Circuit Lab</h3>
            <p>
              Equipped with OrCAD PSpice simulation software for accurate
              measurement and analysis of circuits.
            </p>
          </div>

          <div className="lab-card">
            <h3>Electronics Workshop & PCB Lab</h3>
            <p>
              Useful for research work, higher studies, and project work,
              including PCB design and fabrication.
            </p>
          </div>

          <div className="lab-card">
            <h3>Project Lab</h3>
            <p>
              Students work on real-world projects, exploring amplifiers,
              circuits, lighting effects, radio transmitters, and receivers to
              gain hands-on exposure.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ece;
