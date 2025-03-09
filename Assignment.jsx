import React from 'react';


const Assignment = () => {  // Changed export to default
  const assignments = [
    { title: "Math Quiz", description: "Solve 10 algebra problems", marks: 20, deadline: "2025-02-15" },
    { title: "Science Report", description: "Write about Newton's laws", marks: 20, deadline: "2025-02-18" },
  ];

  const handleSolve = (title) => {
    alert(`You are solving: ${title}`);
  };

  return (
    <div className="container mt-4">
      <h2 className="fw-bold">📚 Student Assignments</h2>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Marks</th>
            <th>Deadline</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment, index) => (
            <tr key={index}>
              <td>{assignment.title}</td>
              <td>{assignment.description}</td>
              <td>{assignment.marks}</td>
              <td>{assignment.deadline}</td>
              <td>
                <button className="btn btn-primary" onClick={() => handleSolve(assignment.title)}>
                  Submit Assignment
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Assignment;  // ✅ Added default export
