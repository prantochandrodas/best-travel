import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({ data }) => {
    const setcountryId=(id)=>{
        localStorage.setItem('id',id);
    }
    // console.log(data);
    // const getLocalStoreAgeId = localStorage.getItem('id');

    
    return (
        <Link to={`/countryDetails`} onClick={()=>setcountryId(data.Country_id)}>
            <a href="#" class="block w-[90%]  mx-auto">
                <img
                    alt="Signage"
                    src={data.picture}
                    class="lg:w-[300px] lg:h-[169px] w-[95%] h-[250px] rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                />

                <div class="mt-4  sm:items-center sm:justify-center sm:gap-4">
                    <strong class="font-medium">{data.Country_name}</strong>

                    <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                    <p class="mt-0.5 opacity-50 sm:mt-0">{data.headline}</p>
                </div>
            </a>
        </Link>
    );
};

export default Country;