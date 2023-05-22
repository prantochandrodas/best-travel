import React from 'react';
import { Link } from 'react-router-dom';

const Package = ({data}) => {
    const setPackageId=(id)=>{
        localStorage.setItem('package_id',id);
    }
    return (
        <div>
            <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm lg:h-[470px]">
                <img src={data.picture} loading="lazy" alt="img" className="w-full lg:w-[500px] lg:h-60 h-48 rounded-t-md" />
                <div className="pt-3 ml-4 mr-2 mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                        {data.name}
                    </h3>
                    <h3 className='text-xl my-4'>
                    Price: ${data.Price}
                    </h3>
                    <Link to='/packageDetails' onClick={()=>setPackageId(data.Package_id)}> <button className='inline-block text-white rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[6px] hover:text-white focus:outline-none focus:ring active:text-opacity-75'>Details</button> </Link>
                </div>
            </article>
        </div>
    );
};

export default Package;