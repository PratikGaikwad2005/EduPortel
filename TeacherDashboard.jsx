import React from "react";
import  TeacherSidebar  from "./TeacherSidebar";
import RecentActivities from "./RecentActivities"; // Import RecentActivities component
import QuickActions from "./QuickActions";

const TeacherDashboard = () => {
  return (
    
      <div className="container-fluid p-4 ">
        <h2 className="fw-bold row mb-4">Teacher Dashboard</h2>

        {/* Stats Section */}
        <div className="row mb-4">
          <div className="col-md-12 row mb-4">
            <div className="card p-3 shadow-sm">
              <h5>Total Students</h5>
              <h3>150</h3>
            </div>
          </div>
          <div className="col-md-12 row mb-4">
            <div className="card p-3 shadow-sm">
              <h5>Courses Assigned</h5>
              <h3>10</h3>
            </div>
          </div>
          <div className="col-md-12 row mb-4">
            <div className="card p-3 shadow-sm">
              <h5>Pending Assignments</h5>
              <h3>5</h3>
            </div>
          </div>
        </div>

        {/* Recent Activities Section */}
        <div className="row">
          <div className="col-md-12  row mb-4">
            <RecentActivities />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12  row mb-4">
            <QuickActions/>
          </div>
        </div>
      </div>
    
  );
};

export default TeacherDashboard;
