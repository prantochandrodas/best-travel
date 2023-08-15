import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <section className="pt-10">
                <div className=" text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex">
                    <div className="md:px-10 flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h2 className="text-4xl text-white font-extrabold md:text-5xl">
                            ABOUT
                        </h2>
                        <p className="opacity-50 text-white">
                        Welcome to Travel Freak, your gateway to unforgettable journeys and breathtaking destinations. At [Your Travel Agency Name], we're passionate about crafting extraordinary travel experiences that linger in your heart forever. From pristine beaches to ancient wonders, our handpicked destinations await your exploration. Our expert tips and captivating demo packages offer a glimpse into the adventures that await you. Become a part of our travel community by booking your dream getaway today. Let us inspire, guide, and fulfill your wanderlust. Join us on a journey of discovery, one destination at a time. Your dream vacation begins here.
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            {/* <Link className="flex items-center justify-start gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 underline underline-offset-2 rounded-lg md:inline-flex">
                                More About us
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </Link> */}
                        </div>
                    </div>
                    <div className="flex-none mt-14 md:mt-0 w-full">
                        <img
                            src="https://static.saltinourhair.com/build/images/saltinourhair-travel-couple-blog.jpg"
                            className="md:rounded-tl-[108px] lg:h-[600px]"
                            alt=""
                        />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;