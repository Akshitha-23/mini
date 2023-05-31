import React, { useState } from 'react';
import './LoginPage.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


function LoginPage() {
  const history = useHistory();

  const [rollNumber, setRollNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleRollNumberChange = (event) => {
    setRollNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit =async (event) => {
    event.preventDefault();
    // Perform login logic here, e.g., sending login request to the server
    console.log('Login submitted');
    console.log('Roll Number:', rollNumber);
    console.log('Password:', password);
    var res = await axios.post('http://localhost:5000/students', {"rollnumber": rollNumber });
    console.log(res.data);
    // Reset the form after submission
    setRollNumber('');
    setPassword('');

    // Navigate to the profile page
    // history.push('/profile-page',{res});
    const query = `?roll=${encodeURIComponent(res.data.rollnumber)}&name=${encodeURIComponent(res.data.name)}`;
    history.push({
      pathname: '/profile-page',
      search: query

    });
  };

  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label>Roll Number:</label>
          <input type="text" value={rollNumber} onChange={handleRollNumberChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        <br />
        <button
          type="button"
          className="register-button"
          onClick={() => history.push('/registration-page')}
        >
          Register
        </button>
      </form>
    </div>
  );
}

function RegPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegistrationSubmit = (event) => {
    event.preventDefault();
    // Perform registration logic here, e.g., sending registration request to the server
    console.log('Registration submitted');
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset the form after submission
    setFullName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="registration-page">
      <h1>Registration Page</h1>
      <form onSubmit={handleRegistrationSubmit}>
        <div>
          <label>Full Name:</label>
          <input type="text" value={fullName} onChange={handleFullNameChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit" className="register-button">
          New Use ? Please Register Yourself!!
        </button>
        <br />
        <Link to="/login">Back to Login</Link>
      </form>
    </div>
  );
}

export default LoginPage;
export { RegPage };
