import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import Spinner from '../Spinner/Spinner';

const Packages = () => {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(false);
    console.log(datas);
    useEffect(() => {
        setLoading(true);
        fetch(`https://best-deal-newserver.vercel.app/package`)
            .then(res => res.json())
            .then(result => {
                setDatas(result)
                setLoading(false);
            })
    }, []);

    if (loading) {
        return <Spinner></Spinner>
    }
     console.log(datas.result);
    return (
        <div className='w-[90%] mx-auto grid  lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-[20px]'>
            {
                datas?.result?.map(data => <Package
                    key={data._id}
                    data={data}
                ></Package>)
            }
        </div>
    );
};

export default Packages;