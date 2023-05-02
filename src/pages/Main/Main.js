import React from 'react';
import { Outlet } from 'react-router-dom';
import Bnner from '../Header/Bnner/Bnner';
import Navbar from '../Header/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;