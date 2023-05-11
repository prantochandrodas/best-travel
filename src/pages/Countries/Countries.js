import React, { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import Country from '../Country/Country';
import Slider from 'react-slick';
import MiniCategories from '../MiniCategories/MiniCategories';

const Countries = () => {
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
        slidesToShow: 3,
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

    const settings2 = {
        dots: false,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 6,
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
                    slidesToShow: 4,
                    slidesToScroll: 4,
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
    return (
        <div>
            <div className='my-10 lg:block none'>
                <Slider {...settings}>
                    {
                        datas?.map(data => <Country
                            key={data._id}
                            data={data}
                        ></Country>)
                    }
                </Slider>
            </div>
           
            <div className='lg:mb-10'>
                <Slider {...settings2}>
                    {
                        datas?.map(data => <MiniCategories
                            key={data._id}
                            data={data}
                        ></MiniCategories>)
                    }
                </Slider>
            </div>
        </div>

    );
};

export default Countries;