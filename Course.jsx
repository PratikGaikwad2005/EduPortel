import React from 'react'

import { CourseCard } from './CourseCard'

export const Course = () => {
  return (
    <>
    <div className="mt-3">
        <CourseCard 
          id="1" 
          title="Introduction to Computer Science" 
          description="Learn the fundamentals of programming." 
          students="32" 
          progress={75}  
        />
        <CourseCard 
          id="2" 
          title="Advanced Mathematics" 
          description="Deep dive into mathematical concepts." 
          students="28" 
          progress={40} 
        />
      </div>

    <div className="card p-4 shadow-sm">
        <h5 className="fw-bold"><i className="bi bi-person"></i> Add Course</h5>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Enter email address" />
        </div>
        <div className="mb-3">
          <label className="form-label">PRN Number</label>
          <input type="email" className="form-control" placeholder="Enter PRN" />
        </div>
        <div className="mb-3">
          <label className="form-label">Course code</label>
          <input type="email" className="form-control" placeholder="Enter Course Code" />
        </div>
        <button className="btn btn-dark w-100">Add </button>
      </div>
   </>
  )
}
