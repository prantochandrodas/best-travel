import React from 'react';
import { Link } from 'react-router-dom';

const ThingsTodo = () => {
    const setcountryId = (id) => {
        localStorage.setItem('id', id);
    }
    return (
        <div className='p-4 lg:border'>
            <Link to={`/countryDetails`} onClick={() => setcountryId(0)} className='pointer'>
                <div className='flex items-center  lg:w-[450px] w-[95%] mb-2'>
                    <img src="https://static.saltinourhair.com/wp-content/uploads/2019/08/23132152/valencia-city-guide-664x600.jpg" className='lg:w-[126px] rounded lg:h-[84px] w-[80px] h-[80px]' alt="" />
                    <h2 className='font-bold lg:text-xl  text-md ml-2'>12 Best Things to do <br /> in Taormina, Sicily</h2>
                </div>
            </Link>
            <Link to={`/countryDetails`} onClick={() => setcountryId(1)}>
                <div className='flex items-center  lg:w-[450px] w-[95%] mb-2'>
                    <img src="https://static.saltinourhair.com/wp-content/uploads/2020/03/23122030/must-do-hoi-an-vietnam-400x600.jpg" className='lg:w-[126px] rounded lg:h-[84px] w-[80px] h-[80px]' alt="" />
                    <h2 className='font-bold lg:text-xl text-md ml-2'>Malaysia Travel <br /> Guide:  Tips  for the <br /> Ultimate Itinerary</h2>
                </div>
            </Link>
            <Link to={`/countryDetails`} onClick={() => setcountryId(1)}>
                <div className='flex items-center  lg:w-[450px] w-[95%] mb-2'>
                    <img src="https://static.saltinourhair.com/wp-content/uploads/2023/03/15165324/hot-spring-batur-bali-600x600.jpg" className='lg:w-[126px] rounded lg:h-[84px] w-[80px] h-[80px]' alt="" />
                    <h2 className='font-bold lg:text-xl text-md ml-2'>8 Best Things to do in <br /> Provence, France</h2>
                </div>
            </Link>
            <Link to={`/countryDetails`} onClick={() => setcountryId(3)}>
                <div className='flex items-center  lg:w-[450px] w-[95%] mb-2'>
                    <img src="https://static.saltinourhair.com/wp-content/uploads/2021/06/04100711/santorini-greece-things-to-do-travel-guide-600x600.jpg" className='center lg:w-[126px] rounded  lg:h-[84px] w-[80px] h-[80px]' alt="" />
                    <h2 className='font-bold lg:text-xl text-md ml-2'>The Ultimate <br /> Bali  Travel Guide (3 Weeks)</h2>
                </div>
            </Link>
        </div>
    );
};

export default ThingsTodo;