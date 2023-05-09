import React, { useEffect, useState } from 'react';
import HomeBanner from './HomeBanner';
import Slider from 'react-slick';
import banner from '../../../assets/New folder/banner.jpg';
import banner2 from '../../../assets/New folder/banner2.png';
import banner3 from '../../../assets/New folder/banner2.png';

const HomeBanners = () => {

   
    const [loading, SetLoding] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        SetLoding(true);
        fetch('banner.json')
            .then(res => res.json())
            .then(result => {
                setData(result);
                SetLoding(false);
            })
    }, [])
    if (loading) {
        return <p className='text-xl text-center'>Loading</p>
    }
    console.log(data);
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
    function SampleHeight(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, height:'600px' }}
                onClick={onClick}
            />
        );
    }
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        fadeSpeed: 4000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

        nextArrow: <SamplePrevArrow></SamplePrevArrow>
    };
    return (
        <div style={{height:'600px!important'}}>
            <Slider {...settings}>
                {
                    data.map(newData => <HomeBanner
                        key={newData._id}
                        newData={newData}
                        // banner={banner}
                    ></HomeBanner>)
                }
                
            </Slider>
        </div>
    );
};

export default HomeBanners;