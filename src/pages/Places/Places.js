import React from 'react';
import { Link } from 'react-router-dom';

const Places = ({data}) => {
    const setcountryId=(id)=>{
        localStorage.setItem('id',id);
    }
    return (
        <div>
            <Link to='countryDetails' onClick={()=>setcountryId(data.Country_id)} class="group h-[300px] lg:h-full  w-[80%] mx-auto  lg:w-[90%] relative block">
                <img
                    alt="Developer"
                    src={data.picture}
                    class="absolute inset-0 lg:h-[700px] md:h-[500px] h-[500px]  lg:w-[320px]  w-[100%] object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div class="relative p-4 sm:p-6 lg:p-8">
                    <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                        {data.Country_name}
                    </p>
                    <div class="mt-32 sm:mt-48 lg:mt-64">
                        <div
                            class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 "
                        >
                            <p class="text-sm text-white">
                               {data.headline}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Places;