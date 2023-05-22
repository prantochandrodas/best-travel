import React from 'react';
import { Link } from 'react-router-dom';

const ThingsTodo = () => {
    const setcountryId = (id) => {
        localStorage.setItem('id', id);
    }
    return (
        <div className='p-4'>
            <Link to={`/countryDetails`} onClick={() => setcountryId(0)} className='pointer'>
                <div className='flex items-center  lg:w-[450px] w-[95%] mb-2'>
                    <img src="https://static.saltinourhair.com/wp-content/uploads/2023/04/11114914/taormina-italy-12-1082x1440.jpg" className='lg:w-[150px] lg:h-[100px] w-[80px] h-[80px]' alt="" />
                    <h2 className='font-bold lg:text-xl  text-md ml-2'>12 Best Things to do <br /> in Taormina, Sicily</h2>
                </div>
            </Link>
            <Link to={`/countryDetails`} onClick={() => setcountryId(1)}>
                <div className='flex items-center  lg:w-[450px] w-[95%] mb-2'>
                    <img src="https://static.saltinourhair.com/wp-content/uploads/2020/01/23123153/malaysia-2-week-travel-guide-600x600.jpg" className='lg:w-[150px] lg:h-[100px] w-[80px] h-[80px]' alt="" />
                    <h2 className='font-bold lg:text-xl text-md ml-2'>Malaysia Travel <br /> Guide:  Tips  for the <br /> Ultimate Itinerary</h2>
                </div>
            </Link>
            <Link to={`/countryDetails`} onClick={() => setcountryId(1)}>
                <div className='flex items-center  lg:w-[450px] w-[95%] mb-2'>
                    <img src="https://static.saltinourhair.com/wp-content/uploads/2021/11/19112437/provence-Fontaine-de-Vaucluse-1-1128x1440.jpg" className='lg:w-[150px] lg:h-[100px] w-[80px] h-[80px]' alt="" />
                    <h2 className='font-bold lg:text-xl text-md ml-2'>8 Best Things to do in <br /> Provence, France</h2>
                </div>
            </Link>
            <Link to={`/countryDetails`} onClick={() => setcountryId(3)}>
                <div className='flex items-center  lg:w-[450px] w-[95%] mb-2'>
                    <img src="https://static.saltinourhair.com/wp-content/uploads/2019/11/23125318/things-to-do-munduk-Handara-Gate-1747x1440.jpg" className='lg:w-[150px] lg:h-[100px] w-[80px] h-[80px]' alt="" />
                    <h2 className='font-bold lg:text-xl text-md ml-2'>The Ultimate <br /> Bali  Travel Guide (3 Weeks)</h2>
                </div>
            </Link>
        </div>
    );
};

export default ThingsTodo;