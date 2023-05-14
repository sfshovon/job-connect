import React from 'react';
import { Link } from 'react-router-dom';
import createMeeting from '../../assets/images/CreateMeeting.png';
import meeting from '../../assets/images/Meeting.png';

const Dashboard = () => {
  return (
    <div className="hero h-screen bg-green-100 mt-8">
      <div className="flex md:justify-evenly justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-10 md:gap-5">
          <div className="card w-96 bg-base-100 shadow-xl mr-20">
            <figure className="px-10 pt-10">
              <img src={createMeeting} alt="Meetings" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <Link to="/createMeetings" className="card-title btn glass text-white bg-red-500 hover:bg-red-500 hover:text-white">Create A Meeting</Link>
              <p>Create a new meeting and invite people</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl ml-20">
            <figure className="px-10 pt-10">
              <img src={meeting} alt="Meetings" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <Link to="/allMeetings" className="card-title btn glass text-white bg-green-500 hover:bg-green-500 hover:text-white">My Meetings</Link>
              <p>View your created meetings or the meetings you've been invited to</p>
            </div>
          </div>
        </div>
      </div>    
    </div>
  );
};

export default Dashboard;