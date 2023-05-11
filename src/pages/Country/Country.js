import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({ data }) => {
    console.log(data);
    return (
        <Link>
            <a href="#" class="block">
                <img
                    alt="Signage"
                    src={data.picture}
                    class="h-56 lg:w-[90%] w-[95%] rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
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