import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const Cta = () => {

    const {user}=useContext(AuthContext);
    return (
        <div>
            <section class="">
                <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                    <h2 class="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-white opacity-50 xl:text-3xl dark:text-white">
                    The journey of a thousand miles begins with a single step lets go to <span class="text-blue-500">next level.</span>
                    </h2>

                    <p class="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
                        Are you looking for a best travel exprence .Visit our website and learn about the destinations and to get out package please signup. 
                    </p>

                    <div class="inline-flex w-full mt-6 sm:w-auto">
                        {
                        !user && <Link to="/signup" class="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        Sign Up
                    </Link>
                        }
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cta;