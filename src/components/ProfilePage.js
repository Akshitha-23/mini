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
    }
  } catch (error) {
    console.log('Error:', error);
  }
};

useEffect(() => {
  fetchUserData()
}, [])

useEffect(() => {
  console.log(users);
}, [users]);

async function viewPerformance()
{
  window.location.href="/performance-page?roll="+users.rollnumber;
}

return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      <p>Roll Number: {users.rollnumber}</p>
      <p>Name: {users.name}</p>
      <p>Degree: {users.degree}</p>
      <p>Year: {users.year}</p>
      <p>Branch: {users.branch}</p>
      <p>Section: {users.section}</p>
      <button onClick={viewPerformance} className="view-performance-button">
          View Performance
        </button>
    </div>
  );
}
export default ProfilePage;
