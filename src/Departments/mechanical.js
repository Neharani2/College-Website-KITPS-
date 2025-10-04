import React from "react";
import "./depart.css";

const Mechanical = () => {
  return (
    <>
      {/* Banner Image */}
      <div className="departy">
        <img
          src="https://kothiwalinstitutetechnology.com/slider_aboutus/images/placeholder/dep_me.jpg"
          alt="Mechanical Engineering Department"
          className="animated-img"
        />
      </div>

      {/* Intro Section */}
      <div className="smart">
        <h1>Mechanical Engineering</h1>
        <p>
          The Department of Mechanical Engineering offers a 4-year undergraduate
          (B.Tech) programme with an intake of 120 students, successfully
          running since the academic session 2009-10. With excellent facilities
          and highly qualified faculty, the department prepares students to
          become professional Mechanical Engineers with focus on innovation,
          analysis, and development of technologies.
        </p>
      </div>

      {/* Labs Section */}
      <div className="labs-section">
        <h2>Laboratories</h2>
        <div className="labs-grid">
          <div className="lab-card">
            <h3>Workshop Practice Lab</h3>
            <p>
              Provides basic knowledge of machines, welding, carpentry, and
              fitting. Includes lathe, shaper, grinder, milling, and welding
              machines.
            </p>
          </div>

          <div className="lab-card">
            <h3>Engineering Mechanics Lab</h3>
            <p>
              Focuses on trusses, frames, beams, and material strength.
              Equipped with UTM, hardness testing machines, and structural
              models.
            </p>
          </div>

          <div className="lab-card">
            <h3>Thermodynamics Lab</h3>
            <p>
              Covers fundamentals of steam power generation. Includes boilers,
              cooling tower, calorimeters, and condenser models.
            </p>
          </div>

          <div className="lab-card">
            <h3>Material Science & Testing Lab</h3>
            <p>
              Studies structure and properties of materials using digital
              microscopes, furnaces, polishing machines, and mounting press.
            </p>
          </div>

          <div className="lab-card">
            <h3>Manufacturing Technology Lab</h3>
            <p>
              Focuses on basics of machining processes. Equipped with milling,
              drilling, shaper, and lathe machines.
            </p>
          </div>

          <div className="lab-card">
            <h3>Machine Drawing / Design Lab</h3>
            <p>
              Enhances design skills with CAD tools. Computers equipped with
              AutoCAD and modern design software.
            </p>
          </div>

          <div className="lab-card">
            <h3>Fluid Mechanics Lab</h3>
            <p>
              Covers Bernoulli’s principle, jet impact, and flow properties.
              Includes Reynolds apparatus, orifice meter, and venturimeter.
            </p>
          </div>

          <div className="lab-card">
            <h3>Heat & Mass Transfer Lab</h3>
            <p>
              Teaches conduction, convection, and radiation. Includes thermal
              conductivity, Pin-Fin, and heat exchanger apparatus.
            </p>
          </div>

          <div className="lab-card">
            <h3>Measurement & Metrology Lab</h3>
            <p>
              Provides knowledge of measurement instruments. Equipped with
              LVDT, thermocouple, pressure gauges, strain gauges, and optical
              devices.
            </p>
          </div>

          <div className="lab-card">
            <h3>Theory of Machines Lab</h3>
            <p>
              Focuses on dynamics and kinematics of machines. Includes gear
              trains, governors, gyroscope, dynamometer, and balancing machines.
            </p>
          </div>

          <div className="lab-card">
            <h3>Refrigeration & Air Conditioning Lab</h3>
            <p>
              Covers basics of refrigeration and AC systems. Includes heat
              pumps, compressors, and air conditioning test rigs.
            </p>
          </div>

          <div className="lab-card">
            <h3>Fluid Machinery Lab</h3>
            <p>
              Provides practical knowledge of turbines and pumps. Includes
              Pelton turbine, Francis turbine, centrifugal pump, and hydraulic
              ram.
            </p>
          </div>

          <div className="lab-card">
            <h3>CAD/CAM Lab</h3>
            <p>
              Teaches modern design and manufacturing techniques. Equipped with
              CNC Lathe, CNC Milling, and AutoCAD software.
            </p>
          </div>

          <div className="lab-card">
            <h3>Automobile & IC Engines Lab</h3>
            <p>
              Provides practical exposure to engines and components. Includes
              two-stroke & four-stroke engines, carburetors, and fuel injection
              systems.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mechanical;
