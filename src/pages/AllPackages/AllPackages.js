import React, { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import Package from '../Package/Package';

const AllPackages = () => {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(false);

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(3);
    const newpages = Math.ceil(datas.count / size);
     console.log(newpages);
    // console.log(size);
    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/allpackage?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(result => {
                setDatas(result)
                setLoading(false);
            })
    }, [page,size]);

    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <div className='w-[90%] mx-auto grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-[20px]'>
                {
                    datas?.result?.map(data => <Package
                        key={data._id}
                        data={data}
                    ></Package>)
                }
            </div>
            <div className='w-[90%] mx-auto my-4'>
               <p className='font-bold text-xl'>Current Selected Page : {page}</p>
                {
                  newpages>=0 ? [...Array(newpages).keys()]?.map(number=><div className="btn-group">
                  <button key={number} className={page===number ? ' btn btn-active mx-2':'btn mx-2' } onClick={()=>setPage(number)}>{number}</button>
                </div>):
                  <></>
                }
            </div>
        </div>
    );
};

export default AllPackages;