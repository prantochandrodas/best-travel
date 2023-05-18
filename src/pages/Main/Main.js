import React from 'react';
import { Outlet } from 'react-router-dom';
import Bnner from '../Header/Bnner/Bnner';
import Navbar from '../Header/Navbar/Navbar';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;