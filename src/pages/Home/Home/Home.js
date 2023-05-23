import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeBanners from '../HomeBanner/HomeBanners';
import Countries from '../../Countries/Countries';
import PlaceAndThingsToDo from '../../PlaceAndThingsToDo/PlaceAndThingsToDo';
import About from '../../About/About';
import Packages from '../../Packages/Packages';
import Contact from '../../Contact/Contact';

const Home = () => {
    return (
        <div>
            <HomeBanners></HomeBanners>
            <Countries></Countries>
            <PlaceAndThingsToDo></PlaceAndThingsToDo>
            <Packages></Packages>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;