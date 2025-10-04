
// import React from "react";
// import "./depart.css";

// const Civil=()=>{
//     return(
//         <>
//      <div className="departy">
//         <img src="https://images.pexels.com/photos/5265274/pexels-photo-5265274.jpeg" alt="" />

//      </div>

//      <div className="smart">
//         <div className="smart">
//         <h1>Civil Engineering</h1>
//         <p>
//           Civil engineering is one of the oldest and broadest fields of
//           engineering. It focuses on the planning, design, construction, and
//           maintenance of infrastructure that supports modern society. From
//           bridges, roads, and railways to water supply systems, irrigation,
//           environmental protection, flood control, and transportation networks,
//           civil engineers play a vital role in shaping the world around us.
//         </p>
//         <p>
//           The profession combines science, mathematics, and creativity to make
//           the world a safer, more sustainable, and agreeable place to live.
//           Civil engineering continues to evolve with modern technology, covering
//           specialties like structural, transportation, geotechnical,
//           environmental, and water resources engineering.
//         </p>
//       </div>


//      </div>

//         </>
//     )
// }
// export default Civil;
import React from "react";
import "./depart.css";

const Civil = () => {
  return (
    <>
      <div className="departy">
        <img
          src="https://images.pexels.com/photos/5265274/pexels-photo-5265274.jpeg"
          alt="Civil Department"
          className="animated-img"
        />
      </div>

      <div className="smart">
        <h1>Civil Engineering</h1>
        <p>
          Civil engineering is one of the oldest and broadest fields of
          engineering. It focuses on the planning, design, construction, and
          maintenance of infrastructure that supports modern society. From
          bridges, roads, and railways to water supply systems, irrigation,
          environmental protection, flood control, and transportation networks,
          civil engineers play a vital role in shaping the world around us.
        </p>
      </div>

      <div className="labs-section">
        <h2>Laboratories</h2>
        <div className="labs-grid">
          <div className="lab-card">
            <h3>CAD Lab</h3>
            <p>
              Covers STAAD-PRO (structure analysis and design software), Project
              Planning & MS Project latest versions to make students proficient
              in design and analysis of structures.
            </p>
          </div>

          <div className="lab-card">
            <h3>Structural Analysis Lab</h3>
            <ul>
              <li>Deflected beam apparatus</li>
              <li>Coupled beam apparatus</li>
              <li>Clarks Maxwell reciprocal theorem</li>
              <li>Two hinged & three hinged arch apparatus</li>
              <li>Curved member & redundant joint apparatus</li>
              <li>Unsymmetrical bending apparatus</li>
              <li>Column and strut apparatus</li>
            </ul>
          </div>

          <div className="lab-card">
            <h3>Environmental Engineering Lab</h3>
            <p>
              Assess pollutants of water & air, monitor noise levels, conduct
              BOD testing, turbidity checks, and analyze types of pollutants.
            </p>
          </div>

          <div className="lab-card">
            <h3>Surveying Lab</h3>
            <p>
              Equipment includes Chains, Tapes, Theodolites, Automatic Levels,
              Plane Tables, Ranging Rods, Plumb Bob, Pegs, Tripods, and
              accessories.
            </p>
          </div>

          <div className="lab-card">
            <h3>Geoinformatics Lab</h3>
            <p>
              Equipped with Total Station, GPS devices, Ranging Rods, Tripods,
              Pegs, and Mirror Stereoscopes for advanced geospatial studies.
            </p>
          </div>

          <div className="lab-card">
            <h3>Geotechnical Engineering Lab</h3>
            <p>
              Includes sieves, pycnometers, Casagrande’s apparatus, direct shear
              test setup, permeability and consolidation apparatus, Proctor test
              and core cutter.
            </p>
          </div>

          <div className="lab-card">
            <h3>Transportation Engineering Lab</h3>
            <p>
              Aggregate tests, crushing & impact tests, abrasion, flakiness and
              elongation index tests. Bitumen penetration, softening, ductility,
              and fire point tests.
            </p>
          </div>

          <div className="lab-card">
            <h3>Fluid Mechanics & Hydraulics Lab</h3>
            <p>
              Experiments on flow over open channel, jet impact setup,
              venturimeter, orifice-plate, pitot tube, rotometer, etc.
            </p>
          </div>
        </div>
      </div>

      
   
    </>
  );
};

export default Civil;
