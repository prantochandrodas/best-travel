import React from 'react';
import { IconName ,GoTrashcan} from "react-icons/go";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const Booking = ({data,handelDelete}) => {
    const setPackageId=(id)=>{
        localStorage.setItem('package_id',id);
    }
    
    return (
        <div>
            <div className="flex my-4 lg:max-w-md w-[90%] mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="lg:w-1/2 w-1/2 bg-cover"  style={{backgroundImage:`url(${data.picture})`}}></div>
                <div className="w-2/3 p-4 md:p-4">
                    <h1 className="lg:text-xl font-bold text-gray-800 dark:text-white">{data.name}</h1>

                    
                    <div className="flex justify-between mt-3 item-center">
                        <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">${data.price}</h1>
                        <Link to='/packageDetails'>   <button onClick={()=>setPackageId(data.package_id)} className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Details</button></Link> 
                    </div>
                </div>
                <div className='flex items-center justify-center lg:px-8'>
                 <Link onClick={()=>handelDelete(data._id)}><button className='btn btn-error'><GoTrashcan></GoTrashcan></button></Link> 
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Booking;