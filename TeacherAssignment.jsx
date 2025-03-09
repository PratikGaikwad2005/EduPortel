import React, { useState } from "react";

const TeacherAssignment = () => {
  const [assignments, setAssignments] = useState([
    { title: "Math Quiz", description: "Solve 10 algebra problems", marks: 20, deadline: "2025-02-15" },
    { title: "Science Report", description: "Write about Newton's laws", marks: 20, deadline: "2025-02-18" },
  ]);

  const [newAssignment, setNewAssignment] = useState({
    title: "",
    description: "",
    marks: 20,
    deadline: "",
  });

  const handleChange = (e) => {
    setNewAssignment({ ...newAssignment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAssignments([...assignments, newAssignment]);
    setNewAssignment({ title: "", description: "", marks: 20, deadline: "" });
  };

  return (
    <div className="container mt-4">
      <h2 className="fw-bold">📌 Teacher Assignment</h2>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Marks</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment, index) => (
            <tr key={index}>
              <td>{assignment.title}</td>
              <td>{assignment.description}</td>
              <td>{assignment.marks}</td>
              <td>{assignment.deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form to Add Assignment */}
      <h3 className="mt-4">➕ Add Assignment</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" className="form-control my-2" value={newAssignment.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" className="form-control my-2" value={newAssignment.description} onChange={handleChange} required />
        <input type="date" name="deadline" className="form-control my-2" value={newAssignment.deadline} onChange={handleChange} required />
        <button type="submit" className="btn btn-primary">Add Assignment</button>
      </form>
    </div>
  );
};

export default TeacherAssignment;
