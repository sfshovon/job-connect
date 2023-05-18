import React from 'react';
import '../../App.css';

const Recruitment = () => {
  return (
    <div>
      <div className="bg-sky-100 text-center py-4 shadow-2xl">
        <div className="container px-4 pt-6 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-4 animated-text-left">
                <h2 className="text-3xl font-bold">Hiring Process</h2>
                <h3 className="mt-6 text-2xl text-center font-semibold tracking-wider uppercase">4 Steps</h3>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8">
                <div class="w-10/12 md:w-7/12 lg:6/12 mx-auto relative -mt-10 animated-text-bottom">
                  <div class="border-l-2 mt-8">
                    <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-orange-100 text-dark rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                      <div class="w-5 h-5 bg-orange-200 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                      <div class="w-10 h-1 bg-orange-200 absolute -left-10 z-0"></div>
                      <div class="flex-auto">
                        <h1 class="text-2xl">Step 1</h1>
                        <h1 class="text-xl font-normal">Resume Shortlisting</h1>
                      </div>
                    </div>
                    <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-violet-200 text-dark rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                      <div class="w-5 h-5 bg-violet-400 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                      <div class="w-10 h-1 bg-violet-400 absolute -left-10 z-0"></div>
                      <div class="flex-auto">
                        <h1 class="text-2xl">Step 2</h1>
                        <h1 class="text-xl font-normal">Take Home Assessment (Project)</h1>
                      </div>
                    </div>
                    <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-red-200 text-dark rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                      <div class="w-5 h-5 bg-red-800 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                      <div class="w-10 h-1 bg-red-800 absolute -left-10 z-0"></div>
                      <div class="flex-auto">
                        <h1 class="text-2xl">Step 3</h1>
                        <h1 class="text-xl font-normal">Final Interview</h1>
                      </div>
                    </div>
                    <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-400 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                      <div class="w-5 h-5 bg-blue-300 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                      <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>
                      <div class="flex-auto">
                        <h1 class="text-2xl">Step 4</h1>
                        <h1 class="text-xl font-normal">Join The Team</h1>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;