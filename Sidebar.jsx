import React from 'react';
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ userType }) => {
  const location = useLocation();  // Get current route
  const basePath = userType === "teacher" ? "/teacherdashboard" : "/dashbord";  // ✅ Change base path

  return (
    <div className="d-flex flex-column vh-100 p-3 bg-light" style={{ width: "250px" }}>
      <h4 className="text-primary">{userType === "teacher" ? "Teacher Panel" : "Student Panel"}</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to={`${basePath}/course`} className={`nav-link ${location.pathname.includes('course') ? 'active' : 'text-dark'}`}>📚 Courses</Link>
        </li>
        <li className="nav-item">
          <Link to={`${basePath}/assignment`} className={`nav-link ${location.pathname.includes('assignment') ? 'active' : 'text-dark'}`}>📝 Assignments</Link>
        </li>
        <li className="nav-item">
          <Link to={`${basePath}/messages`} className={`nav-link ${location.pathname.includes('messages') ? 'active' : 'text-dark'}`}>📩 Messages</Link>
        </li>
        <li className="nav-item">
          <Link to={`${basePath}/resources`} className={`nav-link ${location.pathname.includes('resources') ? 'active' : 'text-dark'}`}>📂 Resources</Link>
        </li>
      </ul>
      <Link to="/" className="mt-auto text-danger">🚪 Logout</Link>
    </div>
  );
};

export default Sidebar;
