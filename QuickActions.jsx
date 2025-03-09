import React from "react";

const QuickActions = () => {
  return (
    <div className="card shadow-sm p-4" style={{ width: "100%", minHeight: "250px" }}>
      <h5 className="card-title mb-3">Quick Actions</h5>
      <div className="row g-3">
        <div className="col-md-6">
          <button className="btn btn-primary w-100 p-3" style={{height:"100px"}}>➕ Add Course</button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-secondary w-100 p-3" style={{height:"100px"}}>👤 New User</button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-info w-100 p-3" style={{height:"100px"}}>🔔 Announcements</button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-dark w-100 p-3" style={{height:"100px"}}>⚙️ Settings</button>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
