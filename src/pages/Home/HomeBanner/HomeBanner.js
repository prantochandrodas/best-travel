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
        <div className='lg:pt-32 pb-32 lg:pb-40'   style={{backgroundImage:`url(${newData.picture})`,backgroundSize:'100% 550px',backgroundRepeat:"no-repeat"}}>
            <section>
                <div className="max-w-screen-xl mx-auto lg:ml-20 text-gray-600 gap-x-12 items-center overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h2 className="lg:text-4xl  md:text-3xl text-2xl text-[#FFAC7F] font-extrabold md:text-5xl mt-10 lg:mt-0">
                        {newData?.title}
                        </h2>
                        <p className='text-white'>
                       {newData?.about}
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            
                        </div>
                    </div>
                    
                </div>

            </section>
        </div>
    );
};

export default HomeBanner;