import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeBanners from '../HomeBanner/HomeBanners';
import Countries from '../../Countries/Countries';
import PlaceAndThingsToDo from '../../PlaceAndThingsToDo/PlaceAndThingsToDo';
import About from '../../About/About';
import Packages from '../../Packages/Packages';
import Contact from '../../Contact/Contact';
import Features from '../../Features/Features';
import HomeBlogs from '../../HomeBlogs/HomeBlogs';
import OurTeam from '../../OurTeam/OurTeam';
import Cta from '../../Cta/Cta';
import CurrencyConverter from '../../CurrencyConverter/CurrencyConverter';
import Reviews from '../../Reviews/Reviews';
const Home = () => {
    return (
        <div>
            <HomeBanners></HomeBanners>
            <Countries></Countries>
            <Packages></Packages>
            <PlaceAndThingsToDo></PlaceAndThingsToDo>
            <Features></Features>
            <HomeBlogs></HomeBlogs>
            <Reviews></Reviews>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;