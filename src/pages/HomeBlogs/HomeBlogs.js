import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import HomeBlog from './HomeBlog';
import { Link } from 'react-router-dom';

const HomeBlogs = () => {

    const [blogsdata, setBlogs] = useState([]);
    useEffect(() => {
        fetch(`https://best-deal-newserver.vercel.app/blogs`)
            .then(res => res.json())
            .then(result => setBlogs(result))
    }, [])
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
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow></SampleNextArrow>,
        prevArrow: <SamplePrevArrow></SamplePrevArrow>
    };
    return (
        <div className='my-4'>
            <h1 className='text-center font-bold lg:text-3xl my-4'>Blogs</h1>
            <div className='w-[80%] mx-auto'>
                <Slider {...settings}>
                    {
                        blogsdata?.map(blog => <HomeBlog
                            key={blog._id}
                            blog={blog}
                        ></HomeBlog>)
                    }
                </Slider>
            </div>
            <div className='flex justify-center my-4'>
              <Link to={`allBlogs`} className=' text-white text-lg text-center cursor-pointer'>See More → </Link>
            </div>
            
        </div>
    );
};

export default HomeBlogs;