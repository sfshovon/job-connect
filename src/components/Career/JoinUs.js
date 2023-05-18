import React from 'react';
import '../../App.css';
import useChangeScroll from '../CustomHook/useChangeScroll';

const JoinUs = () => {
  const scrollStyle = useChangeScroll();

  return (
    <div>
      <div className="bg-sky-100 text-center pt-5 pb=10 shadow-2xl">
        <h1 className="text-5xl font-bold mt-4"> Join Us </h1>
        <p className="text-2xl text-justify mt-10 pb-4 px-5 tracking-widest animated-text-right">Job Connect connects our clients with our expert members to gain much needed credible and reliable insight into technical intel on specific topic as well as market intelligence. This connection edge help our clients make informed strategic and investment decisions.</p>
        <h1 className="text-5xl font-bold mt-2"> Privacy </h1>
        <p className="text-2xl text-justify mt-4 pb-8 px-5 tracking-widest animated-text-left">
        Job Connect recognizes the sensitivity of corporate Information that you share with our service, and we are committed to protecting your privacy. “ Information” in this Privacy Policy refers to information related to you, such as but not limited to, your name, email address, IP address, the company you work at, address of the company you work at, and your designation/role within the company. 
        </p> 
      </div>
      <div className="bg-sky-100 text-center pt-5 pb-10 mt-10 mb-5 shadow-2xl">
        <h1 className="text-5xl font-bold mt-4">Why Us?</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-stretch gap-5 px-5 mt-10">
          <div className={`flex flex-col bg-white border rounded-lg shadow-md hover:bg-gray-100 ${scrollStyle ? "animated-text-left" : "hidden"}`}>
            <img className="object-cover w-full h-64 md:h-auto rounded-t-lg" src="https://i.ibb.co/p6qRnhV/Monitoring.jpg" alt=""/>
            <div className="p-6 flex-1">
              <h5 className="mb-2 text-2xl font-bold text-gray-900">Continuous Monitoring</h5>
              <p className="mb-3 font-normal text-gray-700 text-justify">In order to plan, organize, deploy, and control key deliverables in accordance with your desired milestones, including the analysis and implementation of process improvement, a supervisor will be involved throughout the entire lifecycle of your project.</p>
            </div>
          </div>
          <div className={`flex flex-col bg-white border rounded-lg shadow-md hover:bg-gray-100 ${scrollStyle ? "animated-text-right" : "hidden"}`}>
            <img className="object-cover w-full h-64 md:h-auto rounded-t-lg" src="https://i.ibb.co/2cZRp6q/Team-Members.png" alt=""/>
            <div className="p-6 flex-1">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Dedicated Team Members</h5>
              <p className="mb-3 font-normal text-gray-700 text-justify">Members of the team are highly knowledgeable about the client's project and corporate objectives. Continual team communication through regular communication. You can also work with our internal team. We'll launch right in and quickly pick up speed. The goals you set become our goals. The dangers of software development will be negotiated jointly.</p>
            </div>
          </div>
          <div className={`flex flex-col bg-white border rounded-lg shadow-md hover:bg-gray-100 ${scrollStyle ? "animated-text-left" : "hidden"}`}>
            <img className="object-cover w-full h-64 md:h-auto rounded-t-lg" src="https://i.ibb.co/9m0vff0/Competent-Engineer.png" alt=""/>
            <div className="p-6 flex-1">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Competent Engineers</h5>
              <p className="mb-3 font-normal text-gray-700 text-justify">Job Connect is a startup, and we have started expanding our team members. By selecting engineers from prestigious universities, we continue to strive to be the best in our market. Our ability to meet the needs of various clients is made possible by team members who have experience with a variety of technology stacks. We believe in bringing out the best in oneself.</p>
            </div>
          </div>
          <div className={`flex flex-col bg-white border rounded-lg shadow-md hover:bg-gray-100 ${scrollStyle ? "animated-text-right" : "hidden"}`}>
            <img className="object-cover w-full h-64 md:h-auto rounded-t-lg" src="https://i.ibb.co/5jC6sHw/Working-Together.png" alt=""/>
            <div className="p-6 flex-1">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Working Together</h5>
              <p className="mb-3 font-normal text-gray-700 text-justify">Not as a vendor, but as an addition to your team, we work. We support your involvement in a highly collaborative process that results in the creation of the desired product. Every step of the way, we will be in frequent touch with you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
