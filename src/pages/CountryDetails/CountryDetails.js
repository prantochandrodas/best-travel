import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import CountryDetail from '../CountryDetail/CountryDetail';

const CountryDetails = () => {
  const [datas,setDatas]=useState([]);
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true);
    fetch('https://best-deal-newserver.vercel.app/countriesDetails')
    .then(res=>res.json())
    .then(result=>{
      setDatas(result);
      setLoading(false);
    })

  },[])
  console.log(datas);
  if(loading){
    return <Spinner></Spinner>
  }
    return (
        <div>
            {
              datas.map(data=><CountryDetail
                key={data._id}
                data={data}
              ></CountryDetail>)
            }
        </div>
    );
};

export default CountryDetails;