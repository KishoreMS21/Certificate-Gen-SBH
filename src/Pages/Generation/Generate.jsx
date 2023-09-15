import React, { useState } from 'react';
import './Generate.css';
import Login from '../Login/Login';

const Card = ({ title, content, className, buttonText1, buttonText2, onButtonClick }) => (
  <div className={`card ${className}`}>
    <h2>{title}</h2>
    <p>{content}</p>
    <button className="card-button" onClick={onButtonClick}>
      {buttonText1}
    </button>
    {buttonText2 && (
      <button className="card-button" onClick={onButtonClick}>
        {buttonText2}
      </button>
    )}
  </div>
);

const Generate = () => {
  const [selectedOption, setSelectedOption] = useState('student');
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleButtonClick = () => {
    // Handle the button click event here
    setButtonClicked(true);
  };

  let buttonText1 = '';
  let buttonText2 = '';

  if (selectedOption === 'student') {
    buttonText1 = 'Verify';
  } else if (selectedOption === 'government') {
    buttonText1 = 'Generate';
  } else if (selectedOption === 'organization') {
    buttonText1 = 'Generate';
    buttonText2 = 'Verify';
  }

  // Conditionally render the login page component when the button is clicked
  if (buttonClicked) {
    return (
      <div className="container">
          <Login />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="option-select">
        <label className="selection" htmlFor="option-select">
          Who Are You:
          <select
            id="option-select"
            value={selectedOption}
            onChange={handleOptionChange}
            className="select-input"
          >
            <option value="student">Student</option>
            <option value="government">Government</option>
            <option value="organization">Organization</option>
          </select>
        </label>
      </div>
      <div className="card-container">
        {selectedOption === 'student' && (
          <Card
            title="Validate"
            content="You can VERIFY your certificate easily by clicking below"
            className="student-card"
            buttonText1={buttonText1}
            onButtonClick={handleButtonClick}
          />
        )}
        {selectedOption === 'government' && (
          <Card
            title="Generate"
            content="You can GENERATE your certificate easily by clicking below"
            className="government-card"
            buttonText1={buttonText1}
            onButtonClick={handleButtonClick}
          />
        )}
        {selectedOption === 'organization' && (
          <>
            <Card
              title="Generate"
              content="You can VERIFY your certificate easily by clicking below"
              className="org-card1"
              buttonText1={buttonText1}
              onButtonClick={handleButtonClick}
            />
            <Card
              title="Validate"
              content="You can VERIFY your certificate easily by clicking below"
              className="student-card"
              buttonText1={buttonText2}
              onButtonClick={handleButtonClick}
            />
          </>
        )}
      </div>
    </div>
  );  
};

export default Generate;
