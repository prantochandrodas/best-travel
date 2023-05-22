import React, { useContext, useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import PackageDetail from '../PackageDetail/PackageDetail';
import { AuthContext } from '../Contexts/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const PackageDetails = () => {
    const {user}=useContext(AuthContext);
    const [datas, setDatas] = useState([]);
    console.log(datas)
    const [loading, SetLoading] = useState(false);
    useEffect(() => {
        fetch('https://best-deal-newserver.vercel.app/packageDetails')
            .then(res => res.json())
            .then(request => setDatas(request));
    }, []);

    const addBooking = (data) => {
        const booking = {
            package_id:data.package_id,
            isActive:data.isActive,
            email:user.email,
            price:data.price,
            picture:data.picture,
            name:data.name,
            Seller_Location:data.Seller_Location,
            Tour_Location:data.Tour_Location,
            Duration:data.Duration,
            Destination:data.Destination,
            about:data.about,
            Guide_Service:data.Guide_Service,
            hotel:data.hotel
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
               if(result===false){
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
    if (loading) {
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
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default PackageDetails;