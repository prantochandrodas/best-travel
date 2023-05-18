import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeBanners from '../HomeBanner/HomeBanners';
import Countries from '../../Countries/Countries';
import PlaceAndThingsToDo from '../../PlaceAndThingsToDo/PlaceAndThingsToDo';
import About from '../../About/About';
import Packages from '../../Packages/Packages';

const Home = () => {
    return (
        <div>
            <HomeBanners></HomeBanners>
            <Countries></Countries>
            <PlaceAndThingsToDo></PlaceAndThingsToDo>
            <Packages></Packages>
            <About></About>
        </div>
    );
};

export default Home;