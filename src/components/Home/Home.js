import React from 'react';
import '../../App.css';
import logo2 from '../../assets/images/logo2.png';
import useChangeScroll from '../CustomHook/useChangeScroll';
import Footer from '../Footer/Footer';
import PageTitle from '../PageTitle/PageTitle';
const Home = () => {
  const scrollStyle = useChangeScroll();

  return (
    <div className="mt-auto">
      <PageTitle title="Home"/>
      <section className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/4N7WFd5/background2.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="-mt-20 mb-5 text-5xl font-bold animated-text-left">Job Connect</h1>
            <p className="text-2xl animated-text-right">We are Job Connect</p>
            <br />
            <p className="text-xl mb-5 animated-text-bottom">Your artificial intelligence software solution provider anytime, anywhere</p>
          </div>
        </div>
      </section>
      <section className="bg-emerald-100">
        <div className="grid max-w-screen-xl mx-auto gap-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">A little about us...</h1>
            <p className={`max-w-2xl mb-6 font-normal text-gray-500 lg:mb-8 md:text-lg lg:text-xl tracking-widest text-justify ${scrollStyle ? "animated-text-left" : "hidden"}`}>Job Connect connects our institutional clients to our exclusive expert network , to gain much needed insight on various industry specific subject matters .The unique interactive approach to knowledge gathering sets Job Connect apart from all the typical third party research firms, where information is never objective and mostly biased and many cases unreliable. </p>
          </div>
          <div className={`hidden lg:mt-0 lg:col-span-5 lg:flex ${scrollStyle ? "animated-text-right": "hidden"}`}>
            <img src={logo2} className="h-96" alt="Logo"/>
          </div>                
        </div>
      </section>
      <section className="text-gray-700 body-font border-t border-gray-200 bg-emerald-100 shadow-lg">
        <h1 className="text-center text-5xl text-dark font-bold"> What We Provide</h1>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4 h-auto">
            <div className={`xl:w-1/3 md:w-1/2 p-4 ${scrollStyle ? "animated-text-left": "hidden"}`}>
              <div className="border border-gray-300 p-6 rounded-lg">
                <figure><img className="md:h-72 md:w-full shadow-lg" src="https://i.ibb.co/cgtbkDX/custom-software-2.png" alt="QA" /></figure>
                <h2 className="mt-3 text-2xl text-center text-gray-900 font-medium title-font mb-2">Custom Software Creation</h2>
                <p className="mt-3 text-lg text-justify text-gray-600 h-56">Job Connect's goal is to help you create various and complicated software solutions for your company. After listening to your ideas, we integrate and create unique software solutions from scratch, designed specifically for your company or organization. Job Connect always provides high-quality software and excellent customer service.</p>
              </div>
            </div>
            <div className={`xl:w-1/3 md:w-1/2 p-4 ${scrollStyle ? "animated-text-bottom": "hidden"}`}>
              <div className="border border-gray-300 p-6 rounded-lg">
                <figure><img className="md:h-72 md:w-full shadow-lg" src="https://i.ibb.co/cTVZMrF/Dynamic-Web.png" alt="QA" /></figure>
                <h2 className="mt-3 text-2xl text-center text-gray-900 font-medium title-font mb-2">Dynamic Web Application</h2>
                <p className="mt-3 text-lg text-justify text-gray-600 h-56">Job Connect develops disruptive web products by looking beyond conventional solutions. Our talented and committed web development team understands your requirements and uses the vibrancy of dynamic web architectures to create professional web applications.</p>
              </div>
            </div>
            <div className={`xl:w-1/3 md:w-1/2 p-4 ${scrollStyle ? "animated-text-right": "hidden"}`}>
              <div className="border border-gray-300 p-6 rounded-lg">
                <figure><img className="md:h-72 md:w-full shadow-lg" src="https://i.ibb.co/9w4L0MW/Quality-Assurance.jpg" alt="QA" /></figure>
                <h2 className="mt-3 text-2xl text-center text-gray-900 font-medium title-font mb-2">Quality Assurance & Testing</h2>
                <p className="mt-3 text-lg text-justify text-gray-600 h-56">While it is human to make mistakes, the cost of a mistake can sometimes be prohibitively expensive. So, we Job Connect guarantee the best quality of software solutions for you by following Agile development techniques and Rational Unified Process practices in testing. Our software testing strategy ensures that every component of your software is -ba ug and issue-free.</p>
              </div>
            </div>
          </div>
        </div>  
      </section>
      <Footer/>
    </div>
  );
};

export default Home;