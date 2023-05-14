import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import PageTitle from '../PageTitle/PageTitle';
import Job from './Job';
import JoinUs from './JoinUs';
import Recruitment from './Recruitment';

const Career = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  
  return (
    <div className="pt-2">
      <PageTitle title="Career"/>
      <h1 className="text-4xl pt-2 mt-16 font-bold text-center bg-emerald-100 font-mono animated-text-top">Career at Job Connect</h1>
      <div className="bg-emerald-100 font-sans font-semibold p-4 flex grid grid-cols-4 gap-4">
        <div className='md:col-span-3 col-span-4 md:order-first order-last'>
          {activeTab === "tab1" && <JoinUs></JoinUs>}
          {activeTab === "tab2" && <Job></Job>}
          {activeTab === "tab3" && <Recruitment></Recruitment>}
        </div>
        <div className='md:col-span-1 col-span-4 flex md:flex-col flex-row'>
          <aside aria-label="Sidebar">
            <div className={`px-3 py-4 overflow-y-auto rounded bg-green-50`}>
                <ul className="space-y-2">
                  <li className="flex gap-5 items-center">
                    <i className="fa fa-user-plus" aria-hidden="true"></i>
                    <button onClick={() => setActiveTab('tab1')}>Why Join Us?</button>
                  </li>
                </ul>
            </div>
          </aside>
          <aside aria-label="Sidebar">
            <div className={`px-3 py-4 overflow-y-auto rounded bg-green-50`}>
                <ul className="space-y-2">
                  <li className="flex gap-5 items-center">
                    <i className="fa fa-tasks" aria-hidden="true"></i>
                    <button onClick={() => setActiveTab('tab2')}>Open Position</button>
                  </li>
                </ul>
            </div>
          </aside>
          <aside aria-label="Sidebar">
            <div className="px-3 py-4 overflow-y-auto rounded bg-green-50">
                <ul className="space-y-2">
                  <li className="flex gap-5 items-center">
                    <i className="fa-solid fa-stairs" aria-hidden="true"></i>
                    <button onClick={() => setActiveTab('tab3')}>Recruitment Process</button>
                  </li>
                </ul>
            </div>
          </aside>
        </div>
      </div> 
      <Footer/>          
    </div>
  );
};

export default Career;