import React from 'react';

const CountryDetail = ({ data }) => {
    const getLocalStoreAgeId = localStorage.getItem('id');
    console.log(data)
    return (
        <div>
            {
                data?.Country_id == getLocalStoreAgeId ? <>
                    {
                        console.log(data)
                    }
                    <section className="dark:bg-gray-800 dark:text-gray-100 lg:mt-20">
                        <div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-10 lg:flex-row lg:justify-between">
                            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                                <h1 className="text-5xl font-bold leading-none sm:text-6xl">{data.headline}
                                </h1>
                                <p className="mt-6 mb-8 text-lg sm:mb-12">{data.header_title}
                                </p>
                            </div>
                            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                                <img src={data.header_image} alt="" className="object-contain h-72 sm:h-80 lg:h-[500px] lg:w-[550px] xl:h-112 2xl:h-128" />
                            </div>
                        </div>
                    </section>
                    <div className='w-[90%] mx-auto'>
                        <h2 className='my-4 text-2xl font-bold'>{data.title1}</h2>
                        <p className='text-lg lg:w-[50%] mb-4'>{data.title1_about}</p>
                        <div className='lg:flex lg:flex-row'>
                            <img src={data.title1_image} className='lg:h-[500px] lg:mr-2' alt="" />
                            <img src={data.title4_image} className='lg:h-[500px] mt-2 lg:mt-0' alt="" />
                        </div>
                    </div>
                    <div className='w-[90%] mx-auto'>
                        <h2 className='my-4 text-2xl font-bold'>{data.title2}</h2>
                        <p className='text-lg lg:w-[50%] mb-4'>{data.title2_about}</p>
                        <div className='lg:flex lg:flex-row'>
                            <img src={data.title2_image} className='lg:h-[500px] lg:mr-2' alt="" />
                            <img src={data.title3Image} className='lg:h-[500px] mt-2 lg:mt-0' alt="" />
                        </div>
                    </div>
                    <div className='lg:flex w-[90%] mx-auto lg:flex-row'>
                        <div className='lg:w-[50%]'>
                            <h2 className='my-4 text-2xl font-bold'>{data.title3}</h2>
                            <p className='text-lg lg:w-[90%] mb-4'>{data.title3_about}</p>
                            <div className='lg:flex lg:flex-row'>
                                <img src={data.title3Image} className='lg:h-[300px] lg:w-[250px] lg:mr-2' alt="" />
                                <img src={data.title1_image} className='lg:h-[300px] lg:w-[250px] mt-2 lg:mt-0' alt="" />
                            </div>
                        </div>
                        <div className='lg:w-[50%]'>
                            <h2 className='my-4 text-2xl font-bold'>{data.title4}</h2>
                            <p className='text-lg lg:w-[90%] mb-4'>{data.title4_about}</p>
                            <div className='lg:flex lg:flex-row'>
                                <img src={data.title4_image} className='lg:h-[400px] lg:w-[250px] lg:mr-2' alt="" />
                                <img src={data.title6_image} className='lg:h-[400px] lg:w-[250px] mt-2 lg:mt-0' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='w-[90%] mx-auto'>
                        <h2 className='my-4 text-2xl font-bold'>{data.title5}</h2>
                        <p className='text-lg lg:w-[50%] mb-4'>{data.title5_about}</p>
                        <div className='lg:flex lg:flex-row'>
                            <img src={data.title5_image} className='lg:h-[500px] lg:w-[450px] lg:mr-2' alt="" />
                            <img src={data.header_image} className='lg:h-[500px] lg:w-[450px] mt-2 lg:mt-0' alt="" />
                        </div>
                    </div>
                    <div className='w-[90%] mx-auto my-10'>
                        <h2 className='my-4 text-2xl font-bold text-center'>{data.title6}</h2>
                        <p className='text-lg lg:w-[90%] text-center mb-4'>{data.title6_about}</p>
                        <div className='lg:flex lg:flex-row items-center justify-center'>
                            <img src={data.title6_image} className='lg:h-[500px] lg:mr-2' alt="" />
                            <img src={data.title2_image} className='lg:h-[500px] mt-2 lg:mt-0' alt="" />
                        </div>
                    </div>
                </> : <></>
            }
        </div>
    );
};

export default CountryDetail;