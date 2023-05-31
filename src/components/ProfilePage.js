import React from 'react';
import { useLocation } from 'react-router-dom';
import './ProfilePage.css';

function ProfilePage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  // const data = params.get('data');
  
  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      <p>Roll Number: {params.get('roll')}</p>
      <p>Name: {params.get('name')}</p>
      <p>Degree: {params.get('degree')}</p>
      <p>Year: {params.get('year')}</p>
      <p>Branch: {params.get('branch')}</p>
      <p>Section: {params.get('section')}</p>
      {/* Display other profile information here */}
    </div>
  );
}

export default ProfilePage;
