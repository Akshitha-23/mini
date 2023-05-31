import React, { useState } from 'react';
import './RegPage.css';
function RegPage() {
  const [rollNumber, setRollNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRollNumberChange = (event) => {
    setRollNumber(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform registration logic here, e.g., sending registration request to the server
    console.log('Registration submitted');
    console.log('Roll Number:', rollNumber);
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    // Reset the form after submission
    setRollNumber('');
    setFullName('');
    setEmail('');
    // Set registration status to true
    setIsRegistered(true);
  };

  return (
    <div className="registration-page">
      <h1>Registration Page</h1>
      {isRegistered ? (
        <p>Registration successful! You have registered successfully.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Roll Number:</label>
            <input type="text" value={rollNumber} onChange={handleRollNumberChange} />
          </div>
          <div>
            <label>Full Name:</label>
            <input type="text" value={fullName} onChange={handleFullNameChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          {/* Add more registration fields here */}
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
}

export default RegPage;
