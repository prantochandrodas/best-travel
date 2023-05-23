import React, { useContext, useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import PackageDetail from '../PackageDetail/PackageDetail';
import { AuthContext } from '../Contexts/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Reviews from '../Reviews/Reviews';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
const PackageDetails = () => {
    const { user } = useContext(AuthContext);
    const navigate=useNavigate();
    const [datas, setDatas] = useState([]);
    console.log(datas)
    const [loading, SetLoading] = useState(false);
    useEffect(() => {
        fetch('https://best-deal-newserver.vercel.app/packageDetails')
            .then(res => res.json())
            .then(request => setDatas(request));
    }, []);
//get review
const getLocalStoreAgeId = localStorage.getItem('package_id');
const { data: reviews = [], isLoading, refetch } = useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
        const res = await fetch(`https://best-deal-newserver.vercel.app/getReviews/${getLocalStoreAgeId}`);
        const data = await res.json();
        return data;
    }
});
//delete review
const deleteReview = (id) => {
    fetch(`https://best-deal-newserver.vercel.app/deleteReview/${id}`, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                toast.error('review Deleted', {
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
// console.log(reviews);

// add review 
    const { register, handleSubmit, watch, formState: { errors }} = useForm();
    
    const onSubmit = data => {

        console.log(data);

        const review = {
            id:getLocalStoreAgeId,
            review: data.review,
            email: user.email,
            photo: user.photoURL,
            name: user.displayName
        }
        fetch(`https://best-deal-newserver.vercel.app/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged == true) {
                   refetch();
                }
            })
    }

   

  
    const addBooking = (data) => {
        const booking = {
            package_id: data.package_id,
            isActive: data.isActive,
            email: user.email,
            price: data.price,
            picture: data.picture,
            name: data.name,
            Seller_Location: data.Seller_Location,
            Tour_Location: data.Tour_Location,
            Duration: data.Duration,
            Destination: data.Destination,
            about: data.about,
            Guide_Service: data.Guide_Service,
            hotel: data.hotel
        }
        console.log(booking);
        fetch('https://best-deal-newserver.vercel.app/addBooking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    toast.success('Sucess fully Added', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
                if (result === false) {
                    toast.info('Already Added', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }

            })

    }
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            {
                datas.map(data => <PackageDetail
                    key={data._id}
                    addBooking={addBooking}
                    data={data}
                ></PackageDetail>)
            }
            <div class="w-[90%] mx-auto my-10 rounded-lg bg-white p-8 shadow-2xl lg:col-span-3 lg:p-12">
                <p className='font-semibold my-4'>Add Reviews :- </p>
                <form onSubmit={handleSubmit(onSubmit)} class="space-y-4">
                    <div>
                        <label class="sr-only" for="name">Name</label>
                        <input
                            class="w-full rounded-lg border border-gray-600 p-3 text-sm"
                            placeholder="Add Review"
                            {...register("review", { required: "review is required" })}
                        />
                    </div>
                    <div class="mt-4">
                        <button
                            type="submit"
                            class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                        >
                            add
                        </button>
                    </div>
                </form>
    {
        reviews?.map(review=><Reviews
            review={review}
            key={review._id}
            deleteReview={deleteReview}
        ></Reviews>)
    }               
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default PackageDetails;