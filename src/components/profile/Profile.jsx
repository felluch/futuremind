import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import './prof.css';

const Profile = () => {
  const [user] = useAuthState(auth);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile-container">
      <h1 className="profile-title">Profile</h1>
      <div className="profile-details">
        <img src={user.photoURL || 'c1.png'} alt="Profile" className="profile-picture" />
        <div className="profile-info">
          <p className="profile-item">Name: <span className="profile-value">{user.displayName}</span></p>
          <p className="profile-item">Email: <span className="profile-value">{user.email}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Profile;