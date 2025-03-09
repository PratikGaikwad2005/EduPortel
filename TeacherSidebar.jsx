import React from 'react';
import { Link, useLocation } from "react-router-dom";

const TeacherSidebar = () => {
  const location = useLocation(); // Get current route
  const basePath = "/teacherdashboard"; // Teacher-specific base path

  return (
    <div className="d-flex flex-column vh-100 p-3 bg-light" style={{ width: "250px" }}>
      <h4 className="text-primary">Teacher Panel</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to={`${basePath}`} className={`nav-link ${location.pathname === basePath ? 'active' : 'text-dark'}`}>
            📊 Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to={`${basePath}/course`} className={`nav-link ${location.pathname.includes('course') ? 'active' : 'text-dark'}`}>
            📚 Manage Courses
          </Link>
        </li>
        <li className="nav-item">
          <Link to={`${basePath}/students`} className={`nav-link ${location.pathname.includes('students') ? 'active' : 'text-dark'}`}>
            📩Calender
          </Link>
        </li>
        <li className="nav-item">
          <Link to={`${basePath}/TeacherAssignment`} className={`nav-link ${location.pathname.includes('TeacherAssignment') ? 'active' : 'text-dark'}`}>
            📝 Assignments
          </Link>
        </li>
        <li className="nav-item">
          <Link to={`${basePath}/TeacherMessages`} className={`nav-link ${location.pathname.includes('TeacherMessages') ? 'active' : 'text-dark'}`}>
            📩 Messages
          </Link>
        </li>
        <li className="nav-item">
          <Link to={`${basePath}/settings`} className={`nav-link ${location.pathname.includes('settings') ? 'active' : 'text-dark'}`}>
            ⚙️ Settings
          </Link>
        </li>
      </ul>
      <Link to="/" className="mt-auto text-danger">🚪 Logout</Link>
    </div>
  );
};

export default TeacherSidebar;
