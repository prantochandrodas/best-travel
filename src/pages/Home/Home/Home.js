import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeBanners from '../HomeBanner/HomeBanners';
import Countries from '../../Countries/Countries';

const Home = () => {
    return (
        <div>
            <HomeBanners></HomeBanners>
            <Countries></Countries>
        </div>
    );
};

export default Home;