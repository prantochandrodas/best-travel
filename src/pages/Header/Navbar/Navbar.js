import React, { useContext, useState } from 'react';
import logo from "../../../assets/travelfreak-logo-400x100.jpg"
import { AuthContext } from '../../Contexts/AuthProvider';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [state, setState] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handelLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }
    const menu = <>
        <Link to='/'  onClick={() => setState(!state)}> <li className='lg:ml-5 text-lg lg:mt-0 mt-4  font-[500]'>Home</li></Link>
        <Link to='/login'  onClick={() => setState(!state)}> <li className='lg:ml-5 text-lg lg:mt-0 mt-4 font-[500]'>Skills</li></Link>
        <Link to='/signup'  onClick={() => setState(!state)}> <li className='lg:ml-5 text-lg lg:mt-0 mt-4 font-[500]'>About</li></Link>
        </>
    return (
        <nav className={` ${state ? 'mobileNavSticky lg:text-white textBlack' : 'NavSticky'} w-full border-b md:border-0 md:static`}>
        <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
                  <a href="javascript:void(0)">
                      <img
                          src={logo} 
                          width={120} 
                          height={50}
                          alt="Float UI logo"
                      />
                  </a>
                <div className="md:hidden">
                    <button className="text-white outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                        onClick={() => setState(!state)}
                    >
                        {
                            state ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                </svg>
                            )
                        }
                    </button>
                </div>
            </div>
            <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}>
                <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    {menu}
                </ul>
            </div>
            <div className="hidden md:inline-block">
                 <a className="btn" variant="contained"  download>Logout</a>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;