import React from "react";
import { Link } from "react-router-dom";

const SwitchPanel = () => {
  return (
    <div className="d-flex justify-content-center gap-3 mt-4">
      <Link to="/dashbord" className="btn btn-primary">🎓 Student Panel</Link>
      <Link to="/teacherdashboard" className="btn btn-success">👨‍🏫 Teacher Panel</Link>
    </div>
  );
};

export default SwitchPanel;
