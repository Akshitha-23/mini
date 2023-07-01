import React, { useState } from 'react';
import './LoginPage.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


function LoginPage() {
  const history = useHistory();

  const [rollnumber, setRollNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleRollNumberChange = (event) => {
    setRollNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // const handleLoginSubmit =async (event) => {
  //   event.preventDefault();
  //   // Perform login logic here, e.g., sending login request to the server
  //   console.log('Login submitted');
  //   console.log('Roll Number:', rollnumber);
  //   console.log('Password:', password);
  //   var res = await axios.post('http://localhost:5000/students', {"rollnumber": rollnumber });
  //   console.log(res.data);
  //   // Reset the form after submission
  //   setRollNumber('');
  //   setPassword('');

  //   // Navigate to the profile page
  //   // history.push('/profile-page',{res});
  //   const query = `?roll=${encodeURIComponent(res.data.rollnumber)}&name=${encodeURIComponent(res.data.name)}`;
  //   history.push({
  //     pathname: '/profile-page',
  //     search: query

  //   });
  // };

  async function loginUser(event) {
    event.preventDefault()
     const response = await fetch('http://localhost:5000/user/login',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        rollnumber,
        password,
      })
    })

    const data = await response.json()
    console.log(data)

    if(data.user)
    {
      alert('Login successful')
      window.location.href="/profile-page?roll="+rollnumber;
    }
    else{
      alert('Please check your username and password')
    }

    setRollNumber('');
    setPassword('');
  }


  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <br></br>
      <form onSubmit={loginUser}>
        <div>
          <label>Roll Number:</label>
          <input type="text" value={rollnumber} onChange={handleRollNumberChange} />
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



export default LoginPage;
