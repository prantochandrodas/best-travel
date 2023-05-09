import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
// import banner from '../../../assets/New folder/banner.jpg';
// import banner2 from '../../../assets/New folder/banner2.png';
// import banner3 from '../../../assets/New folder/banner2.png';
const HomeBanner = ({newData,banner}) => {
    
    // console.log(banner);
    return (
        <div className='lg:pt-32 pb-10 lg:pb-40'   style={{backgroundImage:`url(${newData.picture})`,backgroundSize:'100% 550px',backgroundRepeat:"no-repeat"}}>
            <section>
                <div className="max-w-screen-xl mx-auto lg:ml-20 text-gray-600 gap-x-12 items-center overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h2 className="text-4xl text-[#FFAC7F] font-extrabold md:text-5xl mt-10 lg:mt-0">
                        {newData?.title}
                        </h2>
                        <p className='text-white'>
                       {newData?.about}
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <Link to="/allProduct" className="btn btn-[#FFAC7F] lg:btn-md btn-md flex items-center justify-center gap-x-2 py-2 px-4 bannertext-color hover:text-gray-500 font-medium duration-150 active:text-color2 border-color rounded-lg inline-flex">
                                let's travel
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    
                </div>

            </section>
        </div>
    );
};

export default HomeBanner;