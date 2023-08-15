import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
// import banner from '../../../assets/New folder/banner.jpg';
// import banner2 from '../../../assets/New folder/banner2.png';
// import banner3 from '../../../assets/New folder/banner2.png';
// gap-x-12 items-center overflow-hidden md:flex md:px-8
const HomeBanner = ({ newData, banner }) => {

    // console.log(banner);style={{ backgroundImage: `url(${newData.picture})`, backgroundSize: '100% 100%', backgroundRepeat: "no-repeat" }}
    return (
        <div className='lg:pt-32 lg:h-[500px] h-[350px] bg-black' >
            <section>
                <div className="">
                    <div className="w-[80%] lg:w-[60%] mx-auto">
                        <h2 className="lg:text-4xl text-center  md:text-3xl text-2xl text-[#FFAC7F] font-extrabold md:text-5xl mt-10 lg:mt-0">
                            {newData?.title}
                        </h2>
                        <p className='text-white text-center'>
                            {newData?.about}
                        </p>
                        <div className="items-center  gap-x-3 space-y-3 sm:flex sm:space-y-0">

                        </div>
                    </div>

                </div>

            </section>
        </div>
    );
};

export default HomeBanner;