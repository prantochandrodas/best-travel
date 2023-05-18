import React from 'react';
import { Link } from 'react-router-dom';

const PackageDetail = ({ data ,addBooking}) => {
    console.log(data);
    const getLocalStoreAgeId = localStorage.getItem('package_id');
    console.log(data.picture);
    return (
        <div>
            {
                data?.package_id == getLocalStoreAgeId ? <>
                    <article className="w-[90%] mx-auto lg:my-20 shadow-lg border rounded-md duration-300 hover:shadow-sm lg:h-full">
                        <img src={data.picture} loading="lazy" alt="img" className="w-full lg:w-full lg:h-[400px] h-48 rounded-t-md" />
                        <div className="pt-3 ml-4 mr-2 mb-3">
                            <h3 className="text-xl font-bold text-gray-900">
                                {data.name}
                            </h3>
                            <h3 className='text-xl my-4'>
                                <div className='font-bold inline'>Price:</div> ${data.price}
                            </h3>
                            <h3 className='text-xl my-4'>
                                <div className='font-bold inline'>Duration:</div> {data.Duration}
                            </h3>
                            <h3 className='text-xl my-4'>
                                <div className='font-bold inline'>Seller_Location:</div> {data.Seller_Location}
                            </h3>
                            <h3 className='text-xl my-4'>
                                <div className='font-bold inline'>Tour_Location:</div> {data.Tour_Location}
                            </h3>
                            <h3 className='text-xl my-4'>
                                <div className='font-bold inline'>hotel:</div> {data.hotel}
                            </h3>
                            <h3 className='text-xl my-4'>
                                <div className='font-bold inline'>Destination:</div> {data.Destination}
                            </h3>
                            <h3 className='text-xl my-4'>
                                <div className='font-bold inline'>About:</div> {data.about}
                            </h3>
                            <Link to='/packageDetails'> <button className='btn btn-primary' onClick={()=>addBooking(data)}>Book Now</button> </Link>
                        </div>
                    </article>
                </> : <></>
            }
        </div>
    );
};

export default PackageDetail;