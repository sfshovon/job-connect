import { faAnchor, faBook, faBriefcase, faCalendarDay, faCheck, faCircleExclamation, faLocation, faMoneyBill, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../App.css';

const Job = () => {

  return (
    <div className="bg-sky-100 px-5 py-5 animated-text-left shadow-2xl">
      <h2 className='text-3xl'>Front-End Developer</h2><br />
      <ul>
        <li><FontAwesomeIcon className='mr-2' icon={faThumbsUp}/><span className='font-bold'>Vacancy</span>: Not Specific</li>
        <li><FontAwesomeIcon className='mr-2' icon={faCalendarDay}/><span className='font-bold'>Deadline</span>: As soon as possible</li>
        <li><FontAwesomeIcon className='mr-2' icon={faMoneyBill}/><span className='font-bold'>Salary</span>: Negotiable (based on experience and performance)</li>
        <li><FontAwesomeIcon className='mr-2' icon={faBriefcase}/><span className='font-bold'>Office Hour</span>: Full Time</li>
        <li><FontAwesomeIcon className='mr-2' icon={faLocation}/><span className='font-bold'>Job Location</span>: Dhaka (Hybrid option)</li>
        <li><FontAwesomeIcon className='mr-2' icon={faAnchor}/><span className='font-bold'>Experience</span>: 1 to 3 year(s)</li>
        <li><FontAwesomeIcon className='mr-2' icon={faBook}/><span className='font-bold'>Educational Requirements</span>: Bachelor/Master of Science (BSc/MSc) in CSE, CSIT, CSC or Equivalent Degree with CGPA - 3.30 above. Educational Qualification will be relaxed for experienced Candidate. </li>
      </ul>
      <br /><br />
      <h3 className='text-2xl'>Job Context</h3>
      <p className='text-justify'>Looking for an expetienced and dynamic Front-End Developer who wants to build career in working with our talented and creative team based in UK. You'll be responsible for building and maintaining web applications. You'll work with the development team, as well as UX/UI designers and graphic designers. You'll work closely with our back-end and full-stack developers to deliver consistent and reliable web experience. You'll work with our designers to improve usability for our customers. You'll optimize web design for mobile and other platforms for maximum speed. 
      <br />
      </p>
      <br /> <br />
      <h3 className='text-2xl'>Job Responsibilities</h3>
      <ul className='text-justify'>
        <li><FontAwesomeIcon className='mr-3' icon={faCheck}/> Analyze website performance, loading speed and troubleshooting errors</li>
        <li><FontAwesomeIcon className='mr-3' icon={faCheck}/> Design and develop complex and dynamic UI for different screen sizes.</li>
        <li><FontAwesomeIcon className='mr-3' icon={faCheck}/>Develop new user-facing features</li>
        <li><FontAwesomeIcon className='mr-3' icon={faCheck}/> Build reusable code and libraries for future use</li>
        <li><FontAwesomeIcon className='mr-3' icon={faCheck}/>Ensure the technical feasibility of UI/UX designs</li>
        <li><FontAwesomeIcon className='mr-3' icon={faCheck}/>Optimize application for maximum speed and scalability </li>
        <li><FontAwesomeIcon className='mr-3' icon={faCheck}/>Assure that all user input is validated before submitting to back-end</li>
        <li><FontAwesomeIcon className='mr-3' icon={faCheck}/> Collaborate with other team members and stakeholders</li>
        <li><FontAwesomeIcon className='mr-3' icon={faCheck}/>Perform quality assurance, device testing procedures, analyze test results and correct problems. </li>
        <li><FontAwesomeIcon className='mr-3' icon={faCheck}/>Ensure system design and architecture are in compliance with specifications</li>
        <li><FontAwesomeIcon className='mr-3' icon={faCheck}/>Fluent in HTML5.CSS3 and JavaScript (ES5/ES6)</li>
        <li><FontAwesomeIcon className='mr-3' icon={faCheck}/>Familiarity with Jira. Scrum and ... methodologies</li>
        <li><FontAwesomeIcon className='mr-3' icon={faCheck}/>Fluent in rxjs and ngr</li>
        <li><FontAwesomeIcon className='mr-3' icon={faCheck}/>Developing User Interface Components and Implementing Them Following Well-Known React, Workflows (Such As Redux). </li>
      </ul> 
      <br /> <br />
      <h3 className='text-2xl'>Additional Requirement</h3>
      <ul>
        <li><FontAwesomeIcon className='mr-3' icon={faCheck}/>Must have good knowledge of Algorithms and Data Structure</li>
        <li><FontAwesomeIcon className='mr-3' icon={faCheck}/>Must have Strong proficiency in English to speak and write accurately</li>
        <li><FontAwesomeIcon className='mr-3' icon={faCheck}/>Experience in Ruby on Rails will be a plus.</li>
        <li><FontAwesomeIcon className='mr-3' icon={faCheck}/>Capable to manage multiple projects within tight deadlines</li>
      </ul>
      <br /> <br />
      <h3 className='text-2xl'>Compensation & Other Benefits</h3>
      <ul>
        <li><FontAwesomeIcon className='mr-3' icon={faCheck}/>As per company policy</li>
      </ul>
      <br /><br />
      <h3 className='text-2xl'>Application Procedure</h3>
      <ul className="mb-3">
        <li><FontAwesomeIcon className='mr-3' icon={faCircleExclamation}/>Send your CV to hr@jobconnect.com. Please mention the position name in the subject line. </li>
      </ul>
      </div>
  );
};

export default Job;