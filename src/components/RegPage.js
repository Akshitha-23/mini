import React, { useState } from 'react';
import './RegPage.css';
function RegPage() {
  const [firstname, setFirstName] = useState('');
  const [secondname, setSecondName] = useState('');
  const [rollnumber, setRollNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile,setMobile] = useState('');
  

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
    console.log(response)
    if(response.status!==200)
    {
      alert('Registration successful')
    }
    else{
      alert('The user already exists!!')
    }


    setRollNumber('');
    setPassword('');
    setFirstName('');
    setSecondName('');
    setEmail('');
    setMobile('');
  
  }

  return (
    <div className="registration-page">
      <h1>Registration Page</h1>
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
          {}
          <button type="submit">Register</button>
        </form>
    </div>
  );
}

export default RegPage;
