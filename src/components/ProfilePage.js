import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ProfilePage.css';

function ProfilePage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const rollnumber = params.get('roll');
  const [users, setUsers] = useState({});

  const url = `http://localhost:5000/students/${rollnumber}`;

  const fetchUserData = async () => {
    try {
      const response = await fetch(url, {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
        setUsers(data);
        console.log(data);
      } else {
        console.log('Error');
        console.log(users);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  async function viewPerformance() {
    // window.location.href="/performance-page?roll="+users.rollnumber;
    window.location.href = "/sem1-chart?roll=" + users.rollnumber;
  }

  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      <div className="profile-details">
        <div className="profile-detail">
          <p className="side-heading">Roll Number:</p>
          <p className="value">{users.rollnumber}</p>
        </div>
        <div className="profile-detail">
          <p className="side-heading">Name:</p>
          <p className="value">{users.name}</p>
        </div>
        <div className="profile-detail">
          <p className="side-heading">Degree:</p>
          <p className="value">{users.degree}</p>
        </div>
        <div className="profile-detail">
          <p className="side-heading">Year:</p>
          <p className="value">{users.year}</p>
        </div>
        <div className="profile-detail">
          <p className="side-heading">Branch:</p>
          <p className="value">{users.branch}</p>
        </div>
        <div className="profile-detail">
          <p className="side-heading">Section:</p>
          <p className="value">{users.section}</p>
        </div>
      </div>
      <button onClick={viewPerformance} className="view-performance-button">
        View Performance
      </button>
    </div>
  );
}

export default ProfilePage;
