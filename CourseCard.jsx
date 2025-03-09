import React from 'react'
export const CourseCard = ({title, description, students, progress = 0}) => {
  return (
<div className="card my-3 shadow-sm" style={{ cursor: "pointer" }}>
      <div className="card-body">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="text-muted">👨‍🎓 {students} Students Enrolled</p>

        {/* Progress Bar */}
        <div className="progress mt-2" style={{ width:"30%"}}>
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${progress}%` ,}}
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {progress}%
          </div>
        </div>
      </div>
    </div>
  )
}
