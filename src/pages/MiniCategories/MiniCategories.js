import React from 'react';

const MiniCategories = ({ data }) => {
    console.log(data);
    return (
        <div className='flex  items-center bg-[#f5f4f2] lg:w-[150px] w-[150px] p-1 rounded-full'>
            <div className="avatar">
                <div className="w-10 rounded-full">
                    <img src={data.picture} />
                </div>
            </div>
            <p className='ml-4 font-bold'>{data.Country_name}</p>
        </div>
        
    );
};

export default MiniCategories;