import React, { useState } from 'react';
import './RegPage.css';
function RegPage() {
  const [firstname, setFirstName] = useState('');
  const [secondname, setSecondName] = useState('');
  const [rollnumber, setRollNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile,setMobile] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRollNumberChange = (event) => {
    setRollNumber(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleSecondNameChange = (event) => {
    setSecondName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleMobileChange = (event) =>
  {
    setMobile(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform registration logic here, e.g., sending registration request to the server
    console.log('Registration submitted');
    console.log('Roll Number:', rollnumber);
    console.log('First Name:', firstname);
    console.log('Second Name:', secondname);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Mobile No.',mobile)
    // Reset the form after submission

    setRollNumber('');
    setFirstName('');
    setSecondName('');
    setEmail('');
    setPassword('');
    setMobile('');
    // Set registration status to true
    setIsRegistered(true);
  };

  async function registerUser(event) {
    event.preventDefault()
     const response = await fetch('http://localhost:5000/user/register',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname,
        secondname,
        rollnumber,
        password,
        mobile
      })
    })

    const data = await response.json()
    console.log(data)

    setRollNumber('');
    setPassword('');
    setFirstName('');
    setSecondName('');
    setEmail('');
    setMobile('');
    // Set registration status to true
    setIsRegistered(true);
  }

  return (
    <div className="registration-page">
      <h1>Registration Page</h1>
      {isRegistered ? (
        <p>Registration successful! You have registered successfully.</p>
      ) : (
        <form onSubmit={registerUser}>
          <div>
            <label>Roll Number:</label>
            <input type="text" value={rollnumber} onChange={handleRollNumberChange} />
          </div>
          <div>
            <label>First Name:</label>
            <input type="text" value={firstname} onChange={handleFirstNameChange} />
          </div>
          <div>
            <label>Second Name:</label>
            <input type="text" value={secondname} onChange={handleSecondNameChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <div>
            <label>Phone no.:</label>
            <input type="number" value={mobile} onChange={handleMobileChange} />
          </div>
          {/* Add more registration fields here */}
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
}

export default RegPage;
