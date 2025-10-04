

import React from "react";
import "./App.css";
import {
  FaFileAlt,
  FaUserLock,
  FaRegIdBadge,
  FaCalendarAlt,
  FaUserGraduate,
} from "react-icons/fa";

const Dashboard = () => {
  const cards = [
    { icon: <FaFileAlt />, title: "📊 Student Analysis", desc: "View Details" },
    { icon: <FaUserLock />, title: "📈 About Performance", desc: "View Details" },
     { icon: <FaUserGraduate />, title: "Student Portal", desc: "Student Portal" },
      { icon: <FaCalendarAlt />, title: "📅 Faculties Perform", desc: "View Details" },
    { icon: <FaUserGraduate />, title: "💰 Fees Report", desc: "View Details" }, 
         { icon: <FaRegIdBadge />, title: "Download Student's Admit Card", desc: "View Details" },
          { icon: <FaRegIdBadge />, title: "Contact us", desc: "View Details" },

  ];

  return (
    <>
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        <aside className="dashboard-sidebar">
          <h2 className="dashboard-logo">ERP Portal</h2>
          <ul className="dashboard-menu">
            <li>Dashboard</li>
            <li>Students</li>
            <li>Teachers</li>
            <li>Reports</li>
            <li>Settings</li>
          </ul>
        </aside>

        <main className="dashboard-main">
          <div className="dashboard-topbar">
            <h2>Welcome to Dashboard</h2>
            <div className="dashboard-user-info">
              <img
                src="https://i.pravatar.cc/40"
                alt="user"

                className="dashboard-user-img"
              />
             
              <span>Admin</span>
            </div>
          </div>

          <div className="dashboard-content">
            {cards.map((card, index) => (
              <div className="dashboard-card" key={index}>
                <div className="dashboard-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>

   {/* 3456 */}

    

 

    
   </>
     
      
      
  );
};

export default Dashboard;
