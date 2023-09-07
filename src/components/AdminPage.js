import React, { useState } from 'react';
import './AdminPage.css';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  const [pass,setPassword] = useState("");

  const handleLogin = () => {
    console.log(pass);
    window.location.href = '/admin/home';
  }

    return (
      <div className="admin-page">
        <h1>Admin Page</h1>
        <input type="password" value={pass} onChange={(e) => {const k = e.target.value;setPassword(k)}}placeholder="Enter password" />
        <button onClick={handleLogin}>Login</button>
        <Link className="/admin" to="/forgot-password">Forgot Password</Link>
      </div>
    );
  
}

export default AdminPage;
