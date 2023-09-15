import React, { useState } from 'react';
import './NameInputForm.css'; // Import your CSS file for styling

function NameInputForm({ onNameChange }) {
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNameChange(name); // Call the callback function with the updated name
  };

  return (
    <form className="name-input-form" onSubmit={handleSubmit}>
      <label className="name-label">
        Student Name:
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter student name"
          className="name-input"
        />
      </label>
      <button type="submit" className="submit-button">Update Name</button>
    </form>
  );
}

export default NameInputForm;
