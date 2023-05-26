import React from 'react';

const HomeBlogs = () => {
    return (
        <div>
            <section class="">
                <div class="container px-6 py-10 mx-auto">
                    <div class="lg:-mx-6 lg:flex lg:items-center">
                        <img class="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[400px]" src="https://upload.wikimedia.org/wikipedia/commons/6/61/Great_Blue_Hole.jpg" alt="" />

                        <div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                            <p class="text-5xl font-semibold text-blue-500 ">“</p>

                            <h1 class="text-2xl font-semibold text-white-600 dark:text-white lg:text-3xl lg:w-96">
                                Help us to get  best traveling exprence
                            </h1>

                            <p class="max-w-lg mt-6 text-white-300 dark:text-gray-400 ">
                                The Great Blue Hole in Belize is probably one of the most famous travel photos ever. It’s also the biggest underwater sinkhole in the world, and it looks even more amazing if you see it in person!
                                Touring the Blue Hole is one of the top ‘bucket list’ things to do in Central America. You can enjoy a scenic flight over the reef in a small plane or helicopter, and take photos of it from above, or hop on a boat and go scuba diving inside the sinkhole itself.
                            </p>

                            <h3 class="mt-6 text-lg font-medium text-blue-500">Hey there! I'm David,</h3>
                            <p class="text-white-300">Full Time traveler</p>

                            <div class="flex items-center justify-between mt-12 lg:justify-start">
                                <button title="left arrow" class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <button title="right arrow" class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeBlogs;