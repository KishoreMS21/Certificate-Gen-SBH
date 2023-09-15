import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <label>
        Student Name:
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter student name"
        />
      </label>
      <button type="submit">Update Name</button>
    </form>
  );
}

export default NameInputForm;
