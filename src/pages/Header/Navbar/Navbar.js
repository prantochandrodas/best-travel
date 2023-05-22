import React, { useContext, useState } from 'react';
import logo from "../../../assets/travelfreak-logo-400x100.jpg"
import { AuthContext } from '../../Contexts/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useForm } from 'react-hook-form';
const Navbar = () => {
    const [state, setState] = useState(false);
     const [text,setText]=useState('');
    const { user, logOut } = useContext(AuthContext);
   
    console.log(text);
    const navigate = useNavigate();
    const handelLogout = () => {
        logOut()
            .then(() => {
                // console.log('hi')
                navigate('/login')
            })

    }


    const menu = <>
        <Link to='/' onClick={() => setState(!state)}> <li className='lg:ml-5 text-lg lg:mt-0 mt-4  font-[500]'>Home</li></Link>
        <Link to='/allPackage' onClick={() => setState(!state)}> <li className='lg:ml-5 text-lg lg:mt-0 mt-4 font-[500]'>All-Packages</li></Link>
        <Link to='/booking' onClick={() => setState(!state)}> <li className='lg:ml-5 text-lg lg:mt-0 mt-4 font-[500]'>Booking</li></Link>
    </>

    const handleSerch=event=>{
        event.preventDefault();
        const form=event.target;
        const serch=form.serch.value;
        console.log(serch);
        localStorage.setItem('serch_text',serch);
        navigate('/serch')
    }
    return (
        <nav className={` ${state ? 'mobileNavSticky bg-[#212121] lg:bg-[#212121] lg:text-white text-white' : 'NavSticky'} w-full  border-b md:border-0 md:static`}>
            <div className="items-center lg:w-[95%] lg:mx-auto px-4 max-w-screen-xl mx-auto md:flex md:px-8">
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
                <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {menu}
                    </ul>

                </div>
                <div className={`md:flex md:items-center md:justify-center ${state ? 'block' : 'hidden'}`}>
                    <fieldset className="w-full space-y-1 text-black md:mx-2 mx-0 md:mt-0 mt-2">
                        <label for="Search" className="hidden">Search</label>
                        <form className="relative"onSubmit={handleSerch}>
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                             <button title="search" className="p-1 focus:outline-none focus:ring text-black">
                                 <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 text-black">
                                        <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                    </svg>
                                </button> 
                            </span>
                            <input name='serch' type="text" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400" />
                        </form>
                    </fieldset>
                    <div className='md:my-0 my-2 flex'>
                        {
                            user?.uid ? <button className="btn bg-[orange] btn-sm" onClick={handelLogout}>Logout</button> : <>
                                <Link to='/signup'><button className="btn bg-[orange] btn-sm" onClick={() => setState(!state)}>SignUp</button> </Link>
                                <Link to='/login'><button className="btn bg-[orange] btn-sm ml-2" onClick={() => setState(!state)}>Login</button></Link>
                            </>
                        }
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;