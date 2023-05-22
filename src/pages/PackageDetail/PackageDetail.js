import React from 'react';
import { Link } from 'react-router-dom';

const PackageDetail = ({ data, addBooking }) => {
    console.log(data);
    const getLocalStoreAgeId = localStorage.getItem('package_id');
    console.log(data.picture);
    return (
        <div>
            {
                data?.package_id == getLocalStoreAgeId ? <>
                    <section>
                        <div class="relative mx-auto max-w-screen-xl px-4 py-8">
                            <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                                <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
                                    <img
                                        alt="Les Paul"
                                        src={data.picture}
                                        class="aspect-square w-full rounded-xl object-cover"
                                    />

                                   
                                </div>

                                <div class="sticky top-0">
                                    <div class="mt-8 flex justify-between">
                                        <div class="max-w-[35ch] space-y-2">
                                            <h1 class="text-xl font-bold sm:text-2xl">
                                                {data.name}
                                            </h1>

                                            <p class="text-sm">Highest Rated Package</p>

                                            <div class="-ms-0.5 flex">
                                                <svg
                                                    class="h-5 w-5 text-yellow-400"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                    />
                                                </svg>

                                                <svg
                                                    class="h-5 w-5 text-yellow-400"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                    />
                                                </svg>

                                                <svg
                                                    class="h-5 w-5 text-yellow-400"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                    />
                                                </svg>

                                                <svg
                                                    class="h-5 w-5 text-yellow-400"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                    />
                                                </svg>

                                                <svg
                                                    class="h-5 w-5 text-gray-200"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                                        <p class="text-lg font-bold">${data.price}</p>
                                    </div>

                                    <div class="mt-4">
                                        <div class="prose max-w-none">
                                            <p>
                                               {data.about}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="mt-8">
                                        <div class="mt-8 flex gap-4">
                                            <button onClick={()=>addBooking(data)}
                                                class="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                                            >
                                               Book Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </> : <></>
            }
        </div>
    );
};

export default PackageDetail;