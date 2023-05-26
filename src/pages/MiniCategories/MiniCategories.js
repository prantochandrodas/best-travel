import React from 'react';
import { Link } from 'react-router-dom';

const MiniCategories = ({ data }) => {
    // console.log(data);
    const setcountryId=(id)=>{
        localStorage.setItem('id',id);
    }
    return (
       <Link to='/countryDetails' onClick={()=>setcountryId(data.Country_id)}>
       <div className='flex  items-center bg-[#f5f4f2] lg:w-[150px] w-[150px] p-1 rounded-full'>
            <div className="avatar">
                <div className="w-10 rounded-full">
                    <img src={data.picture} />
                </div>
            </div>
            <p className='ml-4 font-bold text-black'>{data.Country_name}</p>
        </div></Link>
        
    );
};

export default MiniCategories;