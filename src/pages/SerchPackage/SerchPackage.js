import React, { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import { useNavigate } from 'react-router-dom';
import Package from '../Package/Package';

const SerchPackage = () => {
    const getText = localStorage.getItem('serch_text');
    console.log(getText);
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true);
        fetch(`https://best-deal-newserver.vercel.app/serch/${getText}`)
            .then(res => res.json())
            .then(result => {
                setDatas(result);
                setLoading(false);
                navigate('/serch')
            });
    }, [getText, navigate]);
    console.log(datas);
    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            {datas?.length == 0 ? <p className='text-xl font-bold min-h-screen flex items-center justify-center'>No Package found with this Country Name</p> : <div className='w-[90%] mx-auto grid  lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-[20px] md:my-10 my-4'>
                {
                    datas?.map(data => <Package
                        key={data._id}
                        data={data}
                    ></Package>)
                }
            </div>}

        </div>
    );
};

export default SerchPackage;