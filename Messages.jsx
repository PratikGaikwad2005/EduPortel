import React, { useState } from "react";

export const Messages = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "Teacher", text: "📢 Assignment due tomorrow! Please submit on time." },
    { id: 2, sender: "Teacher", text: "📢 Class test on Friday. Be prepared!" },
    { id: 3, sender: "Teacher", text: "📢 New study materials have been uploaded to the resources section." },
  ]);


  // Function to remove a message when the button is clicked
  const handleRemoveMessage = (id) => {
    alert("Have you read it !!")
    setMessages(messages.filter((message) => message.id !== id));
  };

  return (
    <div className="container mt-4">
    <h2 className="fw-bold">📢 Messages from Teacher</h2>

    {messages.length === 0 ? (
      <p>No messages left.</p>
    ) : (
      <ul className="list-group">
        {messages.map((message) => (
          <li key={message.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>
              <strong>{message.sender}: </strong> {message.text}
            </span>
            <button className="btn btn-danger btn-sm" onClick={() => handleRemoveMessage(message.id)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>  
  )
}
