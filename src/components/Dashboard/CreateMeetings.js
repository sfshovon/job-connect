import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyMeetings from './MyMeetings';

const CreateMeetings = () => {
  const [user] = useAuthState(auth);
  const [meetings, setMeetings] = useState([]);
  const [meetingName, setMeetingName] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [meetingTime, setMeetingTime] = useState("");
  const [meetingType, setMeetingType] = useState("");
  const [addPeopleEmail, setAddPeopleEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setMeetings([
      ...meetings,
      {
        name: meetingName,
        date: meetingDate,
        time: meetingTime,
        type: meetingType,
        email: addPeopleEmail,
      },
    ]);
  };

  return (
  <div className="hero h-screen bg-green-100 mt-8">
    <div className="hero min-h-screen bg-green-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Welcome {user.displayName}</h1>
          {
            meetings.map(meeting => 
              <MyMeetings 
                meeting={meeting} 
                key={meeting.name}>
              </MyMeetings>
            )
          }
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Meeting Name</span>
              </label>
              <input
                className="input input-bordered"
                type="text"
                value={meetingName}
                onChange={(e) => setMeetingName(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Meeting Date</span>
              </label>
                <input
                  className="input input-bordered"
                  type="date"
                  value={meetingDate}
                  onChange={(e) => setMeetingDate(e.target.value)}
                />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Meeting Time</span>
              </label>
              <input
                className="input input-bordered"
                type="time"
                value={meetingTime}
                onChange={(e) => setMeetingTime(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Meeting Type</span>
              </label>
              <select value={meetingType} onChange={(e) => setMeetingType(e.target.value)}>
                <option value="One-to-One">One-to-One</option>
                <option value="Group Call">Group Call</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Add People</span>
              </label>
              <input
                className="input input-bordered"
                type="email"
                value={addPeopleEmail}
                onChange={(e) => setAddPeopleEmail(e.target.value)}
              />
            </div>
            <div className="form-control mt-6">
              <button to="submit" className="btn glass bg-red-800 text-white hover:bg-red-800 hover:text-white">Create A Meeting</button>
            </div>
          </form>
        </div>
      </div>
    </div>     
  </div>
  );
};

export default CreateMeetings;