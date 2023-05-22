import React, { useContext, useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import { AuthContext } from '../Contexts/AuthProvider';
import Booking from '../../Booking/Booking';
import { useQuery } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';
const Bookings = () => {
    const { user } = useContext(AuthContext);

    const { data: datas = [], isLoading,refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://best-deal-newserver.vercel.app/bookings?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    const handelDelete=(id)=>{
        fetch(`https://best-deal-newserver.vercel.app/Deletebookings/${id}`,{
            method:'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                toast.error('Booking Deleted', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                    refetch();
            }
        })
    }
  
    
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            {
                datas.length == 0 ? <p className='font-bold text-xl min-h-screen flex items-center justify-center'>
                    Do not have any booking .
                </p> : <div className='min-h-screen block flex flex-col  items-center justify-center'>
                    {
                        datas?.map(data => <Booking
                            key={data._id}
                            data={data}
                            handelDelete={handelDelete}
                        ></Booking>)
                    }
                   
                </div>
            }
             <ToastContainer></ToastContainer>
        </div>
    );
};

export default Bookings;