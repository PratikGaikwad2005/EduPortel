import React, { useState } from "react";

const TeacherMessages = ({ setMessages }) => {
  

  const handleSendMessage = () => {
    alert("Message send sucessfully !!!")
  };

  return (
    <div className="container mt-4">
      <h2 className="fw-bold">📩 Send Message to Students</h2>

      <div className="mb-3">
        <textarea
          className="form-control"
          rows="3"
          placeholder="Type your message here..."
          value=''
          onChange=''
        />
      </div>

      <button className="btn btn-primary" onClick={handleSendMessage}>
        Send Message
      </button>
    </div>
  );
};

export default TeacherMessages;
