import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Meetify = () => {
  const [user] = useAuthState(auth);
  
  return (
    <div className="bg-green-100">
      <div className="hero min-h-screen bg-green-100">
        <div className="hero-content flex-col lg:flex-row">
          <img src={user.photoURL} alt="User" className="w-56 h-56 rounded-full shadow-2xl"/>
          <div>
            <h1 className="text-5xl font-bold">Welcome {user.displayName}</h1>
            <h3 className="text-2xl py-6">Email: <span className="underline">{user.email}</span></h3>
            <Link to="/dashboard" className="btn btn-primary">Go to Meeting Dashboard</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meetify;