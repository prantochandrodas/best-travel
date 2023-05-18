import React, { useEffect, useState } from 'react';
import ThingsTodo from '../ThingsTodo/ThingsTodo';
import Spinner from '../Spinner/Spinner';
import Places from '../Places/Places';
import Slider from 'react-slick';

const PlaceAndThingsToDo = () => {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/countries')
            .then(res => res.json())
            .then(result => {
                setDatas(result);
                setLoading(false)
            })
    }, []);
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
                style={{ ...style, display: "none" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: false,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "30px",
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow></SampleNextArrow>,
        prevArrow: <SamplePrevArrow></SamplePrevArrow>,
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
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='flex my-10 flex-col lg:flex-row'>
            <ThingsTodo></ThingsTodo>
          
         <div className='lg:w-[60%] w-full'>
         <Slider {...settings}>
                {
                    datas.map(data => <Places
                        key={data._id}
                        data={data}
                    ></Places>)
                }
            </Slider>
         </div>
          
        </div>
    );
};

export default PlaceAndThingsToDo;