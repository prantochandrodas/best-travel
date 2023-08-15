import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import Spinner from '../Spinner/Spinner';
import Slider from 'react-slick';

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

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none" }}
                onClick={onClick}
            />
        );
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none",color:'' }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "30px",
        slidesToShow: 4,
        slidesToScroll: 2,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 3000,
      
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    centerMode: false,
                    nextArrow: <SampleNextArrow></SampleNextArrow>,
                    prevArrow: <SamplePrevArrow></SamplePrevArrow>
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    nextArrow: <SampleNextArrow></SampleNextArrow>,
                    prevArrow: <SamplePrevArrow></SamplePrevArrow>
                }
            }
        ]

    };
     console.log(datas.result);
    return (
        <div className='text-white'>
            <h1 className='lg:text-3xl text-xl text-center'>Packages</h1>
            <div className='w-[90%] mx-auto '>
           <Slider {...settings}>
            {
                datas?.result?.map(data => <Package
                    key={data._id}
                    data={data}
                ></Package>)
            }
            </Slider>
        </div>
        </div>
    );
};

export default Packages;