import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../../assets/images/logo.png';
import auth from '../../firebase.init';
import useChangeScroll from '../CustomHook/useChangeScroll';
import CustomLink from '../CustomLink/CustomLink';


const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [zoom, setZoom] = useState(1);
  const navStyle = useChangeScroll();
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }

  return (
    <nav className={`fixed top-0 z-50 w-full shadow-lg ${navStyle ? "bg-green-100" : "bg-green-200"}`}>
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-3 md:block">
            <div
              className="relative flex items-center justify-between gap-5"
              onMouseEnter={() => setZoom(1.5)}
              onMouseLeave={() => setZoom(1)}
            >
              <img src={logo} alt="logo" className="h-12 w-12" style={{ transform: `scale(${zoom})` }} />
              <h2 className="text-lg font-bold text-dark font-mono">Job Connect</h2>
            </div>     
            <div className="md:hidden">
              <button
                className="p-2 text-dark rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setMenu(!menu)}
              >
                {
                  menu
                  ? (<i className="fa-solid fa-xmark text-dark h-6 w-6 flex justify-center items-center"></i>) 
                  : (<i className="fa-solid fa-bars text-dark h-6 w-6 flex justify-center items-center"></i>)
                }
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${menu ? "block" : "hidden"}`}> {/* Menu For Mobile Devices */}
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="md:ml-4">
                <CustomLink to="/" className="no-underline font-bold md:border-none md:mx-5 md:p-0 md:text-lg p-2"> 
                <span className="text-lg hover:text-teal-900 hover:border-b-2 hover:border-teal-500 hover:animation-ease-in-out hover:animatoin-pulse hover:duration-500 hover:text-xl"> Home </span> 
                </CustomLink>
              </li>
              {
                user && user.emailVerified &&
                <li className="md:ml-4">
                  <CustomLink to="/dashboard" className="no-underline font-bold md:border-none md:mx-5 md:p-0 md:text-l p-2"> 
                  <span className="text-lg hover:text-teal-900 hover:border-b-2 hover:border-teal-500 hover:animation-ease-in-out hover:animatoin-pulse hover:duration-500 hover:text-xl"> Meetify Dashboard </span> 
                  </CustomLink>
                </li>
              }
              <li className="md:ml-4">
                <CustomLink to="/career" className="no-underline font-bold md:border-none md:mx-5 md:p-0 md:text-lg p-2"> 
                  <span className="text-lg hover:text-teal-900 hover:border-b-2 hover:border-teal-500 hover:animation-ease-in-out hover:animation-pulse hover:duration-500 hover:text-xl"> Career </span> 
                </CustomLink>
              </li>
              <li className="md:ml-4">
                <CustomLink to="/contact" className="no-underline font-bold md:border-none md:mx-5 md:p-0 md:text-lg p-2"> 
                  <span className="text-lg hover:text-teal-900 hover:border-b-2 hover:border-teal-500 hover:animation-ease-in-out hover:animation-pulse hover:duration-500 hover:text-xl"> Contact Us </span> 
                </CustomLink>
              </li>
              { 
                user && user.emailVerified
                ?
                <span className="group relative inline-block">
                  <button className="inline-flex items-center rounded py-2 px-4 font-semibold">{user.displayName}</button>
                  <ul className="absolute hidden pt-1 text-gray-700 group-hover:block bg-green-200 shadow-2xl w-full text-center">
                    <li className="md:ml-4 mb-2">
                      <CustomLink to="/profile" className="no-underline font-bold md:border-none md:mx-5 md:p-0 md:text-l p-2"> 
                        <span className="hover:text-teal-900 hover:border-b-2 hover:border-teal-500 hover:animation-ease-in-out hover:animatoin-pulse hover:duration-500 hover:text-xl"> Profile </span> 
                      </CustomLink>
                    </li>
                    <li className="md:ml-4 mb-2">
                      <CustomLink onClick={handleSignOut} className="no-underline font-bold md:border-none md:mx-5 md:p-0 md:text-l p-2"> 
                        <span className="hover:text-teal-900 hover:border-b-2 hover:border-teal-500 hover:animation-ease-in-out hover:animatoin-pulse hover:duration-500 hover:text-xl"> Logout </span> 
                      </CustomLink>
                    </li>
                  </ul>
                </span>
                : 
                <li className="md:ml-4">
                  <CustomLink to="/signin" className="no-underline font-bold md:border-none md:mx-5 md:p-0 md:text-lg p-2"> 
                  <span className="text-lg hover:text-teal-900 hover:border-b-2 hover:border-teal-500 hover:animation-ease-in-out hover:animatoin-pulse hover:duration-500 hover:text-xl"> Sign In </span> 
                  </CustomLink>
                </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;