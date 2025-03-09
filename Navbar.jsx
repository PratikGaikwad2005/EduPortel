import React from 'react';
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-white shadow-sm px-4">
      <h5 className="fw-bold">Education Portal</h5>
      <div className="dropdown">
        <button className="btn btn-light position-relative" data-bs-toggle="dropdown">
          🔔
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            2
          </span>
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li><Link className="dropdown-item" to="#">New assignment due tomorrow</Link></li>
          <li><Link className="dropdown-item" to="#">Course materials updated</Link></li>
        </ul>
      </div>
    </nav>
  );
};
