import React from "react";

const RecentActivities = () => {
  const activities = [
    { id: 1, user: "Dr. Smith", action: "Added new course: Advanced Mathematics", time: "2 hours ago" },
    { id: 2, user: "Admin Team", action: "System maintenance scheduled", time: "5 hours ago" },
    { id: 3, user: "Prof. Johnson", action: "Updated Biology 101 materials", time: "1 day ago" },
  ];

  return (
    <div className="card shadow-sm p-3">
      <h5 className="card-title">Recent Activities</h5>
      <ul className="list-group list-group-flush">
        {activities.map((activity) => (
          <li key={activity.id} className="list-group-item">
            <strong>{activity.user}</strong> <br />
            {activity.action} <br />
            <small className="text-muted">{activity.time}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivities;
