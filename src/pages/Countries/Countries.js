import React, { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';

const Countries = () => {
    const [datas,setDatas]=useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        setLoading(true);
        fetch('http://localhost:5000/countries')
        .then(res=>res.json())
        .then(result=>{
            setDatas(result);
            setLoading(false)
        })
    },[]);
    if(loading){
        return <Spinner></Spinner>
    }
    return (
        <div>
            
        </div>
    );
};

export default Countries;