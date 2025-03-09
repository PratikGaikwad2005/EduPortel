import React, { useState  } from "react";


const TeacherCourses = () => {
  // const [courses, setCourses] = useState([
  //   { id: 1, name: "Introduction to Computer Science", students: 32, notes: null },
  //   { id: 2, name: "Advanced Mathematics", students: 28, notes: null },
  // ]);

  // Function to handle file upload
  // const handleFileUpload = (event, courseId) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     setCourses(
  //       courses.map((course) =>
  //         course.id === courseId ? { ...course, notes: file.name } : course
  //       )
  //     );
  //   }
  // };


  return (
    <>
    
    {/* manage course */}
    {/* <div className="container mt-4">
      <h2 className="fw-bold">📚 Manage Courses</h2>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Students Enrolled</th>
            <th>Actions</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.students}</td>
              <td>
                <button className="btn btn-sm btn-warning">Edit</button>
                <button className="btn btn-sm btn-danger ms-2">Delete</button>
              </td>
              <td>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => handleFileUpload(e, course.id)}
                />
                {course.notes && <p className="mt-2 text-success">📄 {course.notes} uploaded</p>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div> */}

   
      {/* Add Course Section */}
      {/* <div className="card p-4 mb-4 shadow-sm">
        <h5 className="fw-bold"><i className="bi bi-book"></i> Add Course</h5>
        <div className="mb-3">
          <label className="form-label">Course Title</label>
          <input type="text" className="form-control" placeholder="Enter course title" />
        </div>
        <div className="mb-3">
          <label className="form-label">Instructor</label>
          <select className="form-select">
            <option>Select instructor</option>
          </select>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label className="form-label">Start Date</label>
            <input type="date" className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">End Date</label>
            <input type="date" className="form-control" />
          </div>
        </div>
        <button className="btn btn-dark mt-3 w-100">Add Course</button>
      </div>
     */}




    </>
  );
};

export default TeacherCourses;
