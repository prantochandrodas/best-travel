import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Contexts/AuthProvider';
import { useQuery } from 'react-query';
import { FcBusinessman } from "react-icons/fc";
import { IconName, GoTrashcan } from "react-icons/go";
import { ToastContainer, toast } from 'react-toastify';
import Spinner from '../Spinner/Spinner';
const Reviews = ({review,deleteReview}) => {
    const { user } = useContext(AuthContext);
    console.log(user);


    const { isLoading, refetch } = useQuery();
   
   
    return (
        <div>

            <div className="container flex flex-col w-full max-w-lg p-6 mx-start border border-gray-200 my-2 divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            <img src={review?.photo ? review?.photo : <FcBusinessman></FcBusinessman>} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                        </div>
                        <div>
                            <h4 className="font-bold">{review.name}</h4>
                            <span className="text-xs dark:text-gray-400">{review.email}</span>
                        </div>
                    </div>
                    <div className="flex text-red-600 items-center space-x-2 dark:text-yellow-500">
                       {
                        review?.email==user?.email? <button onClick={() => deleteReview(review._id)}><GoTrashcan></GoTrashcan></button>:<></>
                       }
                       
                    </div>
                </div>
                <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                    {review.review}
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Reviews;